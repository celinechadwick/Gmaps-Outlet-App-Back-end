const router = require("express").Router();

router.use("/places", require("./resources/places"));
router.use("/users", require('./resources/users'));

module.exports = router;
