const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attribute', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sub_category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sub_category',
        key: 'id'
      }
    },
    attribute_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'attribute',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sub_category_id",
        using: "BTREE",
        fields: [
          { name: "sub_category_id" },
        ]
      },
    ]
  });
};
