
const Place = require('../../models.place');

let controller = {};

controller.index = (req, res) => {
  Place
  .findAll(req.params.user_id)
  .then((places) => {
    res
    .status(200).json(places);
  })
  .catch((err) => {
    res
    .status(400).json(err)
  });
}

controller.create = (req, res) => {
  Place
  .create(req.body.place, req.params.user_id)
  .then((place) => {
      res
      .status(201).json(place);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
}
controller.update = (req, res) => {
  Place
  .update(req.body.place, req.params.user_id, req.params.id)
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

module.exports = controller;
