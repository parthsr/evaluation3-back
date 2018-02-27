'use strict';
module.exports = (sequelize, DataTypes) => {
  var questions = sequelize.define('questions', {
    questionid: DataTypes.INTEGER,
    question: DataTypes.STRING,
    options: DataTypes.STRING,
    rightans: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return questions;
};