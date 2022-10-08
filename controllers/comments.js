const comments = require('../data/comments')

const list = (req, res) => {
    console.log(comments)
    res.json(comments)
}
const show = (req, res) => {
    console.log("this requests a comment by ID")
    console.log(req.params.id)
    // the .some method returns false if no comment._id matches the requests's id
    if(!comments.some(comment => comment._id == req.params.id)){
      res.status(400).json({ msg: `No comment with an ID of ${req.params.id}`})
      // the .filter method returns the element[s] of the comments array that pass the test
    } else res.json(comments.filter(comment => comment._id == req.params.id))
}

const create = (req, res) =>{
    console.log('this posts a comment')
    console.log(req.body)
    // counter's sole purpose is assigning a new ID to each POST
    counter = comments.length
    counter++
    // I wasn't sure how to send/receive unformatted text through Postman.
    // When I tried, the req object had no body (body: false).
    // As a workaround, I sent my req as a JSON object with one key (comment:).
    // We create a new object, give it an id, take the body from req.body.comment,
    // and add a postID of 1.
    const newComment = {
      _id: counter,
      body: req.body.comment,
      postId: 1
    }
    console.log(newComment)
    // We push the newly created object to the comments array and return
    // the newly created object as a response.
    comments.push(newComment)
    res.json(comments.filter(comment => comment._id == counter))
  }
module.exports = { list, show, create }