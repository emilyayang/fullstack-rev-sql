// Controller here
// complete building out the controller
const { getProductsHelper, postProductsHelper, updateProductHelper, deleteProductHelper } = require('../db/dbhelpers.js')

const controller = {
  get: (req, res) => {
    getProductsHelper()
      .then(data => res.status(200).send(data))
      .catch(data => res.status(400).send(err))

  },
  post: (req, res) => {
    let { item, min_cost, curr_bid, ends_in, image } = req.body
    postProductsHelper(item, min_cost, curr_bid, ends_in, image)
      .then(() => res.status(201).send('posted'))
      .catch(err => res.status(401).send(err))
  },
  put: (req, res) => {
    let { curr_bid } = req.body

    updateProductHelper(req.params._id, curr_bid)
      .then(() => res.status(201).send('updated'))
      .catch(err => res.status(402).send(err))

  },
  delete: (req, res) => {
    deleteProductHelper(req.params._id)
      .then(() => res.status(201).send('deleted'))
      .catch(err => res.status(403).send(err))
  }
}

module.exports = controller;