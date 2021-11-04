import Sequelize, { Model } from "sequelize";

class Donation extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        districtId: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: "donations",
        modelName: "Donation",
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Attachment, {
      foreignKey: "attachmentableId",
      constraints: false,
      scope: {
        attachmentableType: "donation",
      },
    });

    this.belongsTo(models.District);
  }
}

export default Donation;
