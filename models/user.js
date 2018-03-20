const bcrypt = require('bcrypt');

const db = require('../config/database.js');

let User = {};
User.create = (user) => {
  //create salted hash password
  user.password = bcrypt.hashSync(user.password, 10);

  return db.one(`
    INSERT INTO users
    (username, email, password, placelist)
    VALUES ($1, $2, $3, $4)
    RETURNING
    username, email, password, placelist
    `, [user.username, user.email, user.password, user.placelist]);
}

User.findByEmail = (user) => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE email = $1
    `, [user.email]);
}

User.findById = (id) => {
    return db.oneOrNone(`
        SELECT * FROM users
        WHERE id = $1
    `, [id]);
}

User.update = (user, id) => {
  return db.none(`
    UPDATE users SELECT
    username = $1
    email = $2
    password = $3
    placelist = $4
    WHERE id = $4
    `, [user.username, user.email, user.password, user.placelist, id])
}
module.exports = User;
