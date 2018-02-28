'use strict';
module.exports = (sequelize, DataTypes) => {
  var scores = sequelize.define('scores', {
    username: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return scores;
};