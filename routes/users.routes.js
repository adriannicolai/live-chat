const express         = require('express');
const UserRoute       = express.Router();
const UsersController = require('../controllers/users.controller');

/**
* DOCU: Route to show home page. <br>
* When user navigaes to the webstite. <br>
* Triggered by: n/a <br>
* Last updated at: September 18, 2022
* @function
* @memberof module:routes/users~UserRoute
* @author Adrian
*/
UserRoute.get("/home", UsersController.home);

module.exports = UserRoute;