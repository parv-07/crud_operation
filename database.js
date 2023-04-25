var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "facebook",
});

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM user_profile", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
