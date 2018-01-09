// Initializes the `message` service on path `/message`
const createService = require('feathers-memory');
const hooks = require('./message.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'message',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/message', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('message');

  service.hooks(hooks);
};
