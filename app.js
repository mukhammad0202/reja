console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// MogoDB chaqirish
const db = require("./server").db();

// 1: Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session kodlari

// 3: Views kodlari
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing kodlari
// app.get("/hello", function(req, res) {
//     res.end(`<h1 style="background: red">hello world by Mukhammadrizo</h1>`);
// });

// app.get("/gift", function(req, res) {
//     res.end(`<h1>Siz Sovgalar sahifasidasiz</h1>`);
// });

app.post("/create-item", (req, res) => {
  // console.log(req);
  // res.json({test: "success"});
  // TUDO: code with db here
  console.log("user entered /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
    if(err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      res.end("successfully added");
    }
  });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans").find().toArray((err, data) => {
    if(err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      res.render("reja", {items: data});
    }
  });
});

module.exports = app;


