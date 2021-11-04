import Sequelize, { Model } from "sequelize";

class DonationPayment extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        amount: Sequelize.INTEGER,
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

export default DonationPayment;
