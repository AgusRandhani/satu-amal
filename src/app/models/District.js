import Sequelize, { Model } from "sequelize";

class District extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "districts",
        modelName: "District",
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Recipient, {
      as: "recipients",
      foreignKey: "districtId",
    });
  }
}

export default District;
