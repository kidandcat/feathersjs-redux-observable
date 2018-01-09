const message = require('./message/message.service.js');
module.exports = function (app) {
  app.configure(message);
};
