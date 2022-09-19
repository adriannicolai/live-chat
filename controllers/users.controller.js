class UserController{
    /**
    * DOCU: Function to process the login of a user. <br>
    * Triggered by api/users.routes/login <br>
    * Last updated at: July 26, 2022
    * @async
    * @function
    * @memberOf UserController
    * @param {object} req.body - Requires the req.body (email, password)
    * @returns response_data - { status: true/false, result: {}, error, message }
    * @author Adrian
    */

    /**
    * DOCU: Function to show the home page <br>
    * Triggered by api/users.routes/login <br>
    * Last updated at: July 26, 2022
    * @async
    * @function
    * @memberOf UserController
    * @param {null} null - no parameters needed
    * @returns home.ejs
    * @author Adrian
    */
    home(req, res){
        res.render("users/home");
    }
}

module.exports = new UserController