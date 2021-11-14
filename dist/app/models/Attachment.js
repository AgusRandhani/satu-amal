"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Attachment extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: _sequelize2.default.STRING,
        url: _sequelize2.default.STRING,
        type: _sequelize2.default.STRING,
        attachmentableId: _sequelize2.default.INTEGER,
        attachmentableType: _sequelize2.default.STRING,
      },
      {
        sequelize,
        tableName: "attachments",
        modelName: "Attachment",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Recipient, {
      foreignKey: "attachmentableId",
      constraints: false,
    });

    this.belongsTo(models.DonationPayment, {
      foreignKey: "attachmentableId",
      constraints: false,
    });
  }
}

exports. default = Attachment;
