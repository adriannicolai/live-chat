const express         = require('express');
const UserRoute       = express.Router();
const UsersController = require('../controllers/users.controller');

/**
* DOCU: Route to show home page. <br>
* When user navigates to the website. <br>
* Triggered by: n/a <br>
* Last updated at: September 19, 2022
* @function
* @memberof module:routes/users~UserRoute
* @author Adrian
*/
UserRoute.get("/home", UsersController.home);

/**
* DOCU: Route to show the chat page for user. <br>
* When user navigates to the website. <br>
* Triggered by: n/a <br>
* Last updated at: September 19, 2022
* @function
* @memberof module:routes/users~UserRoute
* @author Adrian
*/
UserRoute.get("/help", UsersController.help);

module.exports = UserRoute;