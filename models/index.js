// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
//where did this come from, type too quickly maybe?
// const seedProducts = require('../seeds/product-seeds');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
})
// Categories have many Products
//this still calls the category_ID since it is what binds the two together
Category.hasMany(Product, {
  foreignKey: 'category_id',
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  // foreignKey: "product_id"
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  // foreignKey: "tag_id"
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
