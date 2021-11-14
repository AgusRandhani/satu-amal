"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Recipient = require('../models/Recipient'); var _Recipient2 = _interopRequireDefault(_Recipient);

var _sequelize = require('sequelize');
var _district = require('../models/district'); var _district2 = _interopRequireDefault(_district);

class RecipientController {
  async index(req, res) {
    const filterCriteria = {};
    filterCriteria.id = {
      [_sequelize.Op.lt]: 10,
    };

    filterCriteria.name = {
      [_sequelize.Op.iLike]: "%%",
    };
    try {
      const recipients = await _Recipient2.default.findAll({
        attributes: ["id", "name", "createdAt", "updatedAt"],
        include: [
          {
            model: _district2.default,
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
      const donation = await _Recipient2.default.create(req.body);
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

exports. default = new RecipientController();
