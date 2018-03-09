const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');

let controller = {};

controller.show = (req, res) => {
    User
    .findById(req.params.id)
    .then((user) => {
        res
        .status(200)
        .json(user);
    })
    .catch((err) => {
        res
        .status(400)
        .json(err);
    });
}

controller.destroy = (req, res) => {
    User
    .destroy(req.params.id)
    .then(() => {
        res.sendStatus(200);
    })
    .catch((err) => {
        res
        .status(400)
        .json(err);
    });
}


controller.create = (req,res) => {
  User
  .create(req.body.user)
  .then((user) =>{
    res
    .status(201)
    .json(user);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

controller.login = (req, res) => {
  //check for email in DB
  //if email is not found, reject login
  //if email is found, continue auth
  //compare user-entered password with hashed password in DB
  //if no match, reject login
  //if match, send JWT
  User.findByEmail(req.body.user)
  .then((user) => {
    if (user) {
      //continue auth
      if (bcrypt.compareSync(req.body.user.password, user.password)) {
        //success! user is authenticated
        //make sure user password is not saved to JWT
        user.password = null;
        //create signed token with serialized user data
        const token = jwt.sign(user, process.env.SECRET_KEY, {
          expiresIn: "7d"
        });
        //send the JWT as a response
        res
        .status(201)
        .json({token: token});
      } else {
        //user is not authenticated
        res
        .status(401)
        .json({error: "Celine says not authorized"})
      }
    } else {
        res
        .status(404)
        .json({error: "Celine says User not found by that email"})
      }
  })
}
module.exports = controller;
