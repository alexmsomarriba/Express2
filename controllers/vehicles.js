const vehicles = require('../data/vehicles')

const list = (req, res) => {
    res.json(vehicles)
}

const show = (req, res) => {
    console.log("this requests a vehicle by ID")
    console.log(req.params.id)
    if(!vehicles.some(vehicle => vehicle._id == req.params.id)){
      res.status(400).json({ msg: `No vehicle with an ID of ${req.params.id}`})
    } else res.json(vehicles.filter(vehicle => vehicle._id == req.params.id))
}

const create = (req, res) =>{
    console.log('this adds a vehicle')
    console.log(req.body)
  // I had a grammatical error that I couldn't find in my if statement,
  // so this post route will just accept anything.
    counter = vehicles.length
    counter++
    const newVehicle = {
      _id: counter,
      imgUrl: req.body.imgUrl,
      year: req.body.year,
      make: req.body.make,
      model: req.body.model,
      price: req.body.price,
      km: req.body.km,
      miles: req.body.miles,
      fuel: req.body.fuel,
      city: req.body.city,
      isNew: req.body.isNew
    }
    console.log(newVehicle)
    vehicles.push(newVehicle)
    res.json(vehicles.filter(vehicle => vehicle._id == counter))
}

module.exports = { list, show, create }