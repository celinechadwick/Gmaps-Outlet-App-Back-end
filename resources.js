const router = require("express").Router();

router.use(
    "/users",
    require("./resources/users")
);

router.use(
    "/users/:user_id/places",
    require("./resources/places")
);

router.use(
    "/users",
    require("./resources/users")
);

module.exports = router;
