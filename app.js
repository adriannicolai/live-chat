/* App dependencies */
const express    = require('express');
const App        = express();
const ejs        = require('ejs');
const bodyParser = require('body-parser');
const path       = require('path');

/* Start the server */
const server  = App.listen(process.env.PORT || 3000, function(){
    console.log('listening at 3000!');
});

/* Initialize middlewares */
App.use(bodyParser.urlencoded({ extended: true }));
App.use(express.static(__dirname + '/assets'));
App.use('/assets', express.static(path.join(__dirname, 'assets')))

App.use((req, res, next) => {
    console.log('req.url :>> ', req.url);

    next();
})

/*  Socket.io for real-time
    TODO: clean later move to another folder
*/
const io = require('socket.io')(server);

/**
* DOCU: Handle socket. <br>
* When an emit or connection is triggered
* Triggered by: n/a <br>
* Last updated at: September 19, 2022
* @function
* @author Adrian
*/
io.on('connect', function(socket){
    /*
        Log the socket.id
        TODO: Remove once ready
    */
    console.log('socket :>> ', socket.id);

    socket.on("new_connection", () =>{
        console.log("there is a new connection");
    })
});


/* Set the view engine to ejs */
App.set('view engine', 'ejs');

/* For routes */
const ApiRoutes = require('./routes/api.routes');
ApiRoutes(App);