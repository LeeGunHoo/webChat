const socket = new WebSocket(`ws://${window.location.host}`); //localhost:3000

// socket open
socket.addEventListener("open", () => {
  console.log("Connected to Server ✅");
});

// To-Do socket message

// socket close
socket.addEventListener("close", () => {
  console.log("Disconnected to Server ❌");
});

setTimeout(() => {
  socket.send("hello from the browser!");
}, 10000);
