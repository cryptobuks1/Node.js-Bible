"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Contacts", [
      {
         firstname: "Jose Mari",
          lastname: "Tome",
          phone:"677 676 767",
          email:"iremti2@gmail.com",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      {
         firstname: "Erik",
          lastname: "Twist",
          phone:"666 555 888",
          email:"erik@gmail.com",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(), 
        },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
