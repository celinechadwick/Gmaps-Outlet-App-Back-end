const bcrypt = require('bcrypt');

const db = require('../config/database.js');

let User = {};
User.create = (user) => {
  //create salted hash password
  user.password = bcrypt.hashSync(user.password, 10);

  return db.one(`
    INSERT INTO users
    (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING
    username, email, password
    `, [user.username, user.email, user.password]);
}

User.findByEmail = (user) => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE email = $1
    `, [user.email]);
}

User.update = (user, id) => {
  return db.none(`
    UPDATE users SELECT
    username = $1
    email = $2
    password = $3
    `, [user.username, user.email, user.password])
}
module.exports = User;
