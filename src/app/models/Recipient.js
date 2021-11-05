import Sequelize, { Model } from "sequelize";

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        districtId: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: "recipients",
        modelName: "Recipient",
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Attachment, {
      foreignKey: "attachmentableId",
      constraints: false,
      scope: {
        attachmentableType: "recipient",
      },
    });

    this.belongsTo(models.District);
  }
}

export default Recipient;
