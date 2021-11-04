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
    this.hasMany(models.Donation, {
      as: "donations",
      foreignKey: "districtId",
    });
  }
}

export default District;
