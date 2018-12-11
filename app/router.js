'use strict';

module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/insert', app.controller.home.insert);
};
