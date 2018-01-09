import feathers from "@feathersjs/feathers";
const socket = io("http://localhost:3030", {
  transports: ["websocket"]
});
const app = feathers();
app.configure(feathers.socketio(socket));
app.configure(feathers.authentication());

export const serviceMessages = app.service("messages");
