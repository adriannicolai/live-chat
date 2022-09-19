const express         = require('express');
const AdminRoute      = express.Router();
const AdminController = require('../controllers/admins.controller');

/**
* DOCU: Route to show the login page for admin/. <br>
* When user navigates to the website. <br>
* Triggered by: n/a <br>
* Last updated at: September 19, 2022
* @function
* @memberof module:routes/users~UserRoute
* @author Adrian
*/
AdminRoute.get("/login", AdminController.signin);

module.exports = AdminRoute;