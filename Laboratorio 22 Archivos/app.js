const express = require('express');
const app = express();
const session = require('express-session');
const isAuth = require('./util/is-auth');
const csrf = require('csurf');
const multer = require('multer');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');
// app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'xKrsDBW3!!L5tb5w5E$2gANH5W@0d6fV*MQR@e2l47%ADrB@Vd', 
    resave: false,
    saveUninitialized: false
}));

//CSRF Protection
const csrfProtection = csrf();
app.use(csrfProtection); 
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

// Rutas
const mainRuta = require('./routes/main.routes');
const azulRuta = require('./routes/blue.routes');
const verdeRuta = require('./routes/green.routes');
const amarilloRuta = require('./routes/yellow.routes');
const registrarRuta = require('./routes/main.routes');
const usersRuta = require('./routes/users.routes')

// Middlewares
app.use('/', mainRuta);
app.use('list', isAuth, mainRuta)
app.use(azulRuta);
app.use(verdeRuta);
app.use(amarilloRuta);
app.use(registrarRuta);
app.use(usersRuta);

// 404
app.use((request, response) => {
    response.statusCode = 404;
    response.send("Lo sentimos, no conocemos ese color.");
});

app.listen(3000);
