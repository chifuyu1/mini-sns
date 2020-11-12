module.exports = (sequelize, DataTypes) => {
  const ProfileImage = sequelize.define(
    'ProfileImage',
    {
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );
  ProfileImage.associate = (db) => {
    db.ProfileImage.belongsTo(db.User);
  };
  return ProfileImage;
};

/*
const DataTypes = require('sequelize')
const { Model } = DataTypes

module.exports = class ProfileImage extends Model {
  static init(sequelize) {
    return super.init({
      src: {
        type: DataTypes.STRING(200),
        allowNull: false
      }
    }, {
      modelName: 'ProfileImage',
      tableName: 'profileimages',
      charset: 'utf8',
      collate: 'utf8_general_ci'
    })
  }
  static associate(db) {
    db.ProfileImage.belongsTo(db.User)
  }
}
*/
