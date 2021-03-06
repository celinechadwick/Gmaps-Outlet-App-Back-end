const router = require('express').Router();
const controller = require('./controller');
const AuthService = require('../../services/auth');

router.route('/')
// .all(AuthService.restrict)
.post(controller.create);

router.route('/login')
.post(controller.login);

router.route("/:id")
    // .all(AuthService.restrict)
    .get(controller.show)
    .put(controller.update)
    // .delete(controller.destroy);



module.exports = router;
