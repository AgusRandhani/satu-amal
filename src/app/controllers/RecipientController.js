import Recipient from "../models/Recipient";

import { Op } from "sequelize";
import District from "../models/district";

class RecipientController {
  async index(req, res) {
    const filterCriteria = {};
    filterCriteria.id = {
      [Op.lt]: 10,
    };

    filterCriteria.name = {
      [Op.iLike]: "%%",
    };
    try {
      const recipients = await Recipient.findAll({
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

      return res.status(200).json(recipients);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: err });
    }
  }

  async create(req, res) {
    try {
      const donation = await Recipient.create(req.body);
      return res.status(201).json(donation);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: `Error store a recipient` });
    }
  }

  async addItems(req, res) {
    res.send("under development");
  }

  async confirmRegistration(req, res) {
    res.send("under development");
  }

  async packagePrepared(req, res) {
    res.send("under development");
  }

  async packagePickup(req, res) {
    res.send("under development");
  }

  async packageReceived(req, res) {
    res.send("under development");
  }

  async latestReport(req, res) {
    res.send("under development");
  }

  async pastReport(req, res) {
    res.send("under development");
  }
}

export default new RecipientController();
