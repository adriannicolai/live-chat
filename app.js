/* App dependencies */
const express    = require('express');
const App        = express();
const ejs        = require('ejs');
const bodyParser = require('body-parser');

/* Start the server */
const server  = App.listen(process.env.PORT || 3000, function(){
    console.log('listening at 3000!');
});

/* For loging of request url */
App.use((req, res, next) =>{
    console.log('req :>> ', req.url);

    next();
})

/*  Socket.io for real-time
    TODO: clean later move to another folder
*/
const io = require('socket.io')(server);

/* Initialize middlewares */
App.use(bodyParser.urlencoded({extended:true}));
App.use(express.static(__dirname + '/assets'));

/* Set the view engine to ejs */
App.set('view engine', 'ejs');

/* For routes */
const ApiRoutes = require('./routes/api.routes');
ApiRoutes(App);