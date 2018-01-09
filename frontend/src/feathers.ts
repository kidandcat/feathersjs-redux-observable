import * as io from "socket.io-client";
import * as feathers from "@feathersjs/feathers";
import * as socketio from "@feathersjs/socketio-client";

const socket = io();
const app = feathers();
app.configure(socketio(socket));

export const server = app;
