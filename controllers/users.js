const { response } = require("express");

const getUsers = (req, res = response) => {
  const { nombre } = req.query;

  res.json({
    msg: "get API - Controller",
    nombre,
  });
};

const postUsers = (req, res = response) => {
  const { name, age } = req.body;

  res.json({
    msg: "post API - Controller",
    name,
    age,
  });
};

const putUsers = (req, res = response) => {
  const { id } = req.params.id;

  res.json({
    msg: "put API - Controller",
    id,
  });
};

const deleteUsers = (req, res = response) => {
  res.json({
    msg: "delete API - Controller",
  });
};

module.exports = {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
};
