// complete and fix the dbhelpers
const Products = require('./models.js');

getProductsHelper = () => {
  return Products.findAll()
}

postProductsHelper = (item, min_cost, curr_bid, ends_in, image) => {
  return Products.create({ item, min_cost, curr_bid, ends_in, image })
}

updateProductHelper = (id, curr_bid) => {
  return Products.update({ curr_bid }, {
    where: { id }
  })
}

deleteProductHelper = (id) => {
  return Products.destroy({
    where: { id }
  })
}

module.exports = { getProductsHelper, postProductsHelper, updateProductHelper, deleteProductHelper }

