const express    = require('express');
const app        = express();
const ejs        = require('ejs');
const bodyParser = require('body-parser');
const Router     = require('./routes');

const server  = app.listen(process.env.PORT || 3000, function(){
    console.log('listening at 3000!')
});

const io = require('socket.io')(server);

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/assets'));

app.use(Router);