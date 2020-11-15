module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      power: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      blockIgnore: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.hasOne(db.ProfileImage);
    db.User.belongsToMany(db.User, {
      through: 'friend',
      as: 'Friended',
      foreignKey: 'friendedId',
    });
    db.User.belongsToMany(db.User, {
      through: 'friend',
      as: 'Friending',
      foreignKey: 'friendingId',
    });
    db.User.belongsToMany(db.User, {
      through: 'ignore',
      as: 'Ignorings',
      foreignKey: 'ignoringId',
    });
    db.User.belongsToMany(db.User, {
      through: 'ignore',
      as: 'Ignored',
      foreignKey: 'ignoredId',
    });
    db.User.belongsToMany(db.Post, {
      as: 'Likes',
      through: `like`,
    });
  };
  return User;
};
/*
const DataTypes = require('sequelize')
const { Model } = DataTypes

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
    }, {
      modelName: 'User',
      tableName: 'users',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      sequelize
    })
  }
  static associate(db) {
    db.User.hasMany(db.Post)
    db.User.hasMany(db.Comment)
    db.User.hasOne(db.ProfileImage)
  }
}
*/
