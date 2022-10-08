const products = require('../data/products')

const list = (req, res) => {
    res.json(products)
}

const show = (req, res) => {
    console.log("this requests a contact by ID")
    console.log(req.params.id)
    if(!products.some(product => product._id == req.params.id)){
      res.status(400).json({ msg: `No product with an ID of ${req.params.id}`})
    } else res.json(products.filter(product => product._id == req.params.id))
}

const create = (req, res) =>{
    console.log('this adds a product')
    console.log(req.body)
    // New objects must have keys for name, description, rating, imageUrl,
    // price, category, and review.
    if (!req.body.name || !req.body.description || !req.body.rating || !req.body.imgUrl
      || !req.body.price || !req.body.category || !req.body.reviews) {
      return res.status(400).json({ msg: "Please include a name, description, rating, imgUrl, price, category, and reviews."})
    }
    counter = products.length
    counter++
    const newProduct = {
      _id: counter,
      name: req.body.name,
      description: req.body.description,
      rating: req.body.rating,
      imgUrl: req.body.imgUrl,
      price: req.body.price,
      category: req.body.category,
      reviews: req.body.reviews
    }
    console.log(newProduct)
    products.push(newProduct)
    res.json(products.filter(product => product._id == counter))
  }

  module.exports = { list, show, create }