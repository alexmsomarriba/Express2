const contacts = require('../data/contacts')

const list = (req, res) => {
    res.json(contacts)
}

const show = (req, res) => {
    console.log("this requests a contact by ID")
    console.log(req.params.id)
    if(!contacts.some(contact => contact._id == req.params.id)){
      res.status(400).json({ msg: `No contact with an ID of ${req.params.id}`})
    } else res.json(contacts.filter(contact => contact._id == req.params.id))
}

const create = (req, res) =>{
    console.log('this adds a contact')
    console.log(req.body)
    // New contacts must have a name, occupation, and avatar.
    // If the body doesn't include these things, the response in a 400.
    if (!req.body.name || !req.body.occupation || !req.body.avatar) {
      return res.status(400).json({ msg: "Please include a name, occupation, and avatar."})
    }
    counter = contacts.length
    counter++
    const newContact = {
      _id: counter,
      name: req.body.name,
      occupation: req.body.occupation,
      avatar: req.body.avatar
    }
    console.log(newContact)
    contacts.push(newContact)
    res.json(contacts.filter(contact => contact._id == counter))
}

module.exports = { list, show, create}