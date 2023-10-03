const socket = new WebSocket(`ws://${window.location.host}`); //localhost:3000

socket.addEventListener("open", () => {
    console.log("Connected to Server ✅");
});

socket.addEventListener("message", (message) => {
    console.log("New message: ", message.data);
});

socket.addEventListener("close", () => {
    console.log("Disconnected to Server ❌");
});

setTimeout(() => {
    socket.send("hello from the browser!");
}, 10000);