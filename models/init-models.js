var DataTypes = require("sequelize").DataTypes;
var _attribute = require("./attribute");
var _attribute_value = require("./attribute_value");
var _category = require("./category");
var _customers = require("./customers");
var _products = require("./products");
var _sub_category = require("./sub_category");
var _users = require("./users");

function initModels(sequelize) {
  var attribute = _attribute(sequelize, DataTypes);
  var attribute_value = _attribute_value(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var sub_category = _sub_category(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  attribute_value.belongsTo(attribute, { as: "attribute", foreignKey: "attribute_id"});
  attribute.hasMany(attribute_value, { as: "attribute_values", foreignKey: "attribute_id"});
  attribute_value.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(attribute_value, { as: "attribute_values", foreignKey: "category_id"});
  products.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(products, { as: "products", foreignKey: "category_id"});
  sub_category.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(sub_category, { as: "sub_categories", foreignKey: "category_id"});
  attribute_value.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(attribute_value, { as: "attribute_values", foreignKey: "product_id"});
  attribute.belongsTo(sub_category, { as: "sub_category", foreignKey: "sub_category_id"});
  sub_category.hasMany(attribute, { as: "attributes", foreignKey: "sub_category_id"});
  attribute_value.belongsTo(sub_category, { as: "sub_category", foreignKey: "sub_category_id"});
  sub_category.hasMany(attribute_value, { as: "attribute_values", foreignKey: "sub_category_id"});
  products.belongsTo(sub_category, { as: "sub_category", foreignKey: "sub_category_id"});
  sub_category.hasMany(products, { as: "products", foreignKey: "sub_category_id"});

  return {
    attribute,
    attribute_value,
    category,
    customers,
    products,
    sub_category,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
