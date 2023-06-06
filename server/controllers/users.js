const db = require("../helpers/db");

exports.getAllUsers = (req, res) => {
  db.query("SELECT * FROM cars;", (err, result, fields) => {
    if (err) return console.log(err);
    res.status(200).send({
      msg: "Users found",
      result,
    });
  });
};

exports.getAllBrands = (req, res) => {
  db.query("SELECT brand FROM cars;", (err, result, fields) => {
    if (err) return console.log(err);
    res.status(200).send({
      msg: "Brands found",
      result,
    });
  });
};

exports.getUserById = (req, res) => {
  db.query(
    "SELECT * FROM cars WHERE id = ?;",
    [req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "User found",
        result,
      });
    }
  );
};

exports.getUsersByBrand = (req, res) => {
  db.query(
    "SELECT * FROM cars WHERE brand = ?;",
    [req.body.brand],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Users found",
        result,
      });
    }
  );
};

exports.postUser = (req, res) => {
  db.query(
    "INSERT INTO cars (name, engine, power, color, transmision, weight, manufacture_year, price, img, brand) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
    [
      req.body.name,
      req.body.engine,
      req.body.power,
      req.body.color,
      req.body.transmision,
      reg.body.weight,
      reg.params.manufacture_year,
      reg.body.price,
      req.body.img,
      req.body.brand,
    ],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "User created",
        result,
      });
    }
  );
};

exports.putUser = (req, res) => {
  db.query(
    "UPDATE cars SET name = ?, engine = ?, power = ?, color = ?, transmision = ?, weight = ?, manufacture_year = ?, price = ?, img = ?, brand = ? WHERE id = ?;",
    [
      req.body.name,
      req.body.engine,
      req.body.power,
      req.body.color,
      req.body.transmision,
      req.body.weight,
      req.params.manufacture_year,
      req.body.price,
      req.body.img,
      req.body.brand,
      req.params.id,
    ],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "User updated",
        result,
      });
    }
  );
};

exports.deleteUser = (req, res) => {
  db.query(
    "DELETE FROM cars WHERE id = ?;",
    [req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "User deleted",
        result,
      });
    }
  );
};
