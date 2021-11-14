"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class DonationPayment extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: _sequelize2.default.STRING,
        description: _sequelize2.default.STRING,
        amount: _sequelize2.default.INTEGER,
      },
      {
        sequelize,
        tableName: "donation-payments",
        modelName: "DonationPayment",
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Attachment, {
      foreignKey: "attachmentableId",
      constraints: false,
      scope: {
        attachmentableType: "donation-payment",
      },
    });
  }
}

exports. default = DonationPayment;
