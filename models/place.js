const db = require('../config/database');

let Place = {};

Place.findAll = () => {
  return db.manyOrNone(`
    SELECT * FROM markers
    `);
}

Place.findById = (id) => {
    return db.oneOrNone(`
        SELECT * FROM markers
        WHERE id = $1
    `, [id]);
}


Place.create = (place) => {
  return db.one(`
    INSERT INTO markers
    (name, address, lat, lng, description, upvote, downvote)
    VALUES($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
    `, [place.name, place.address, place.lat, place.lng, place.description, place.upvote, place.downvote]);
}

Place.update = (place, id) => {
  return db.none(`
    UPDATE markers SET
    name = $1,
    address = $2,
    lat = $3,
    lng = $4,
    description = $5,
    upvote = $6,
    downvote = $7,
    WHERE id = $8
    `,[place.name, place.address, place.lat, place.lng, place.description, place.upvote, place.downvote, id]);
}

module.exports = Place;
