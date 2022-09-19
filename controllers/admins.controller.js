class AdminController{
    /**
    * DOCU: Function to show the sign in page <br>
    * Triggered by users.routes/home <br>
    * Last updated at: September 19, 2022
    * @async
    * @function
    * @memberOf AdminController
    * @param {null} null - no parameters needed
    * @returns signin.ejs
    * @author Adrian
    */
    signin(req, res){
        res.render("admins/signin");
    }
}

module.exports = new AdminController