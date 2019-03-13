const app = require("./config/express");
const cronJob = require("./config/image-cron");
require("dotenv").config();
var mongoose = require("mongoose");
var mailer = require("./config/mailer");

const port = process.env.PORT || 8000;
console.log("Port ", port);

var uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  "mongodb://localhost/mydigit";
// mongoose ODM object data modelling
mongoose.connect(uristring, { useNewUrlParser: true }, function(err, res) {
  if (err) {
    console.log("ERROR connecting to: " + uristring + ". " + err);
  } else {
    console.log("Succeeded connected to: " + uristring);
  }
});

mailer.sgMail.send(mailer.msg).then(data=>{
  console.log('data');
});

cronJob.start();
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
