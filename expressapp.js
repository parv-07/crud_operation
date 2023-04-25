const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const port = 3000;
require("./model/crud");
// const User = require("./model/createtable");
// const Contact = require("./model/createtable2");
app.use(bodyParser.json());
var userAdd = require("./controller/userController");
app.get("/", (req, res) => {
  res.send("Hello Parv!,");
});
app.get("/add", userAdd.adduser);
app.get("/users", userAdd.getusers);
app.get("/user/:id", userAdd.getuser);
app.post("/user", userAdd.postuser);
app.delete("/delete/:id", userAdd.deleteuser);
app.patch("/updateuser/:id", userAdd.patchuser);

//User.sync({ force: true });
//User.drop();
//Contact.sync({ force: true });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
