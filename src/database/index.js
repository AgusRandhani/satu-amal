import Sequelize from "sequelize";
import databaseConfig from "../config/database";

import Donation from "../app/models/Donation";
import Attachment from "../app/models/Attachment";
import DonationPayment from "../app/models/DonationPayment";
import District from "../app/models/district";

const models = [Attachment, DonationPayment, Donation, District];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
