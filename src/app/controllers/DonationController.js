import Donation from "../models/Donation";
let Joi = require("joi");

import { Op } from "sequelize";
import District from "../models/district";

class DonationController {
  async index(req, res) {
    const filterCriteria = {};
    filterCriteria.id = {
      [Op.lt]: 10,
    };

    filterCriteria.name = {
      [Op.iLike]: "%%",
    };
    try {
      const donations = await Donation.findAll({
        attributes: ["id", "name", "createdAt", "updatedAt"],
        include: [
          {
            model: District,
            attributes: ["id", "name"],
          },
        ],
        where: filterCriteria,
        limit: 10,
      });

      return res.status(200).json(donations);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: err });
    }
  }

  async store(req, res) {
    try {
      const donation = await Donation.create(req.body);
      return res.status(201).json(donation);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: `Error store a item` });
    }
  }

  async show(req, res) {
    try {
      const DonationResult = await Donation.findByPk(req.params.id);
      if (!DonationResult) {
        return res.status(400).json({ error: "donation don't exist'" });
      }

      const attachment = await DonationResult.getAttachments();

      const donationObj = DonationResult.get({ plain: true });
      donationObj.attachment = attachment;

      return res.status(200).json(donationObj);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: `Error retrieving a item` });
    }
  }

  async update(req, res) {
    res.send("Under development feature");
  }

  async addAttachment(req, res) {
    const id = req.params.id;

    let attachmentSchema = Joi.object().keys({
      name: Joi.string().required(),
      url: Joi.string().required(),
      type: Joi.string().valid("video", "image").required(),
    });

    let validationRule = Joi.array().items(attachmentSchema);

    let validation = validationRule.validate(req.body);

    if (validation.error) {
      res.send(validation.error.details);
    }
    try {
      const DonationResult = await Donation.findByPk(req.params.id);
      if (!DonationResult) {
        return res.status(400).json({ error: "donation don't exist'" });
      }

      const attachments = req.body;

      attachments.forEach(async (element) => {
        await DonationResult.createAttachment(element);
      });

      return res
        .status(200)
        .send(`successfully add attachment to donation-${id}`);
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Error add attachment to donation" });
    }
  }

  async destroy(req, res) {
    const id = req.params.id;

    try {
      const DonationExist = await Donation.findByPk(req.params.id);
      if (!DonationExist) {
        return res.status(400).json({ error: "hotel don't exist'" });
      }

      await Donation.destroy({
        where: { id: id },
      });

      return res.status(204).send({
        message: `donation with id=${id} was deleted successfully!`,
      });
    } catch (err) {
      return res.status(500).send({
        message: `Could not delete item with id=${id}`,
      });
    }
  }
}

export default new DonationController();
