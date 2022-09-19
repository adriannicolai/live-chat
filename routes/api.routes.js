const UserRoutes  = require('./users.routes');
const AdminRoutes = require('./admins.routes');

let ApiRoute = (App) => {
    /* Routes for users */
    App.use("/user", UserRoutes);
    App.use("/admin", AdminRoutes);
}

module.exports = ApiRoute;