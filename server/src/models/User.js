module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    }
  })

  return User
};