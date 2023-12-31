import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log("Listening on http://localhost:3000");

const server = http.createServer(app); // http server
const wss = new WebSocket.Server({ server });

// socket message
function onSocketMessage(message) {
  console.log(message);
}

// socket close
function onSocketClose() {
  console.log("Disconnected from the Browser ❌");
}

// To-Do socket open
