"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

var _Recipient = require('../app/models/Recipient'); var _Recipient2 = _interopRequireDefault(_Recipient);
var _Attachment = require('../app/models/Attachment'); var _Attachment2 = _interopRequireDefault(_Attachment);
var _DonationPayment = require('../app/models/DonationPayment'); var _DonationPayment2 = _interopRequireDefault(_DonationPayment);
var _district = require('../app/models/district'); var _district2 = _interopRequireDefault(_district);

const models = [_Attachment2.default, _DonationPayment2.default, _Recipient2.default, _district2.default];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new (0, _sequelize2.default)(_database2.default);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

exports. default = new Database();
