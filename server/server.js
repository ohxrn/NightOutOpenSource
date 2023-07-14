const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();
const port = process.env.PORT;

require("./config/mongoose.config");
app.use(cors());

require("./routes/night.routes")(app);
require("./routes/company.routes")(app);

const server = app.listen(port, () =>
  console.log(`Listening on port: ${port}`)
);

// SSOCKET

// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require("socket.io")(server, { cors: true });

io.on("connection", (socket) => {
  socket.on("hello", (arg) => {
    console.log(arg);
    socket.emit("yo", "we joined in");
  });
  socket.on("theThrow", (arg) => {
    console.log("this is where it's received on server", arg);
    socket.broadcast.emit("product", arg);
  });
  console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
});
