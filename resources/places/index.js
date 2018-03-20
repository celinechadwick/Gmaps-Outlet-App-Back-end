const express = require('express');
const router = express.Router({mergeParams: true});

const controller = require("./controller");
const AuthService = require("../../services/auth")

router.route("/")
  .get(controller.index)
  .post(controller.create);

router.route('/:id')
  .get(controller.show)
  .put(controller.update);

module.exports = router;
