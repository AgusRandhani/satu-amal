import Sequelize, { Model } from "sequelize";

class Attachment extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        url: Sequelize.STRING,
        type: Sequelize.STRING,
        attachmentableId: Sequelize.INTEGER,
        attachmentableType: Sequelize.STRING,
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
    this.belongsTo(models.Donation, {
      foreignKey: "attachmentableId",
      constraints: false,
    });

    this.belongsTo(models.DonationPayment, {
      foreignKey: "attachmentableId",
      constraints: false,
    });
  }
}

export default Attachment;
