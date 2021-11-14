import District from "../models/District";
import Sequelize from "sequelize";

class DistrictController {
  async index(req, res) {
    try {
      const districts = await District.findAll({
        attributes: {
          include: [
            [
              Sequelize.literal(`(
                  select count(*) from donations where district_id = "District"."id"
                )`),
              "donation_count",
            ],
          ],
          exclude: ["createdAt", "updatedAt"],
        },
      });

      return res.status(200).json(districts);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: err });
    }
  }
}

export default new DistrictController();
