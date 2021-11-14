"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _District = require('../models/District'); var _District2 = _interopRequireDefault(_District);
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class DistrictController {
  async index(req, res) {
    try {
      const districts = await _District2.default.findAll({
        attributes: {
          include: [
            [
              _sequelize2.default.literal(`(
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

exports. default = new DistrictController();
