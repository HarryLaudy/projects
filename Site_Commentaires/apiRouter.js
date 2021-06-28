var express = require('express');
var usersCtrl = require('./routes/usersCtrl');

exports.router = (function() {
    var apiRouter = express.Router();

    apiRouter.route('/home/').get(usersCtrl.home);
    apiRouter.route('/liste/').get(usersCtrl.liste);

    return apiRouter;

})();
