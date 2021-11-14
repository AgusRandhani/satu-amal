"use strict";"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert(
      "districts",
      [
        {
          name: "Ilir Timur I",
        },
        {
          name: "Ilir Timur II",
        },
        {
          name: "Ilir Barat I",
        },
        {
          name: "Ilir Barat II",
        },
        {
          name: "Kalidoni",
        },
        {
          name: "Sako",
        },
        {
          name: "Kemuning",
        },
        {
          name: "Sematang Borang",
        },
        {
          name: "Sukarami",
        },
        {
          name: "Bukit",
        },
        {
          name: "Alang Alang Lebar",
        },
        {
          name: "Gandus",
        },
        {
          name: "Seberang Ulu I",
        },
        {
          name: "Kertapati",
        },
        {
          name: "Seberang Ulu II",
        },
        {
          name: "Plaju",
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("districts", null, {});
  },
};
