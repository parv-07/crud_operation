const parv = require("../model/crud");
var db = require("../model/crud");
var User = db.createtable;
var adduser = async (req, res) => {
  const jane = await User.create({ firstName: "Robin", lastName: "Uthappa" });
  console.log(jane instanceof User); // true
  console.log(jane.firstName); // "Jane"
  // jane.set({
  //   firstName: "Mamta",
  // });

  await jane.update({ firstName: "gwen" });
  //await jane.save();
  console.log("jane was to the database");
  // await jane.destroy();

  //await jane.reload();
  console.log(jane.toJSON());
  res.status(200).json(jane.toJSON());
};

var getusers = async (req, res) => {
  const data = await User.findAll({});
  res.status(200).json({ parv: data });
};
var getuser = async (req, res) => {
  const data = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ parv: data });
};
var postuser = async (req, res) => {
  var postData = req.body;
  console.log(req.body);
  const data = await User.create(postData);
  // const data = await User.create(postData);
  // //console.log(data instanceof User);
  res.json({ parv: data });
};

var deleteuser = async (req, res) => {
  const data = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ parv: data });
};

var patchuser = async (req, res) => {
  var updatedata = req.body;
  const data = await User.update(updatedata, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ parv: data });
};

module.exports = {
  adduser,
  getusers,
  getuser,
  postuser,
  deleteuser,
  patchuser,
};
