const UserRoutes = require('./users.routes');

let ApiRoute = (App) => {
    /* Routes for users */
    App.use("/api/users", UserRoutes);
}

module.exports = ApiRoute;