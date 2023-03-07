const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const logger = require('morgan');
const morgan = require('morgan')
const logger = require('./logger')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const { Session } = require('inspector');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

//处理404的错误
const errorHandler = (err, req, res, next) => {
  logger.error(`${req.method} ${req.originalUrl}` + err.message);
  const errorMsg = err.message;
  res.status(err.status || 500).json({
    code: -1,
    success: false,
    message: errorMsg,
    data: {}
  })
}

app.use(errorHandler)

//
// app.use(Session({
//   store: new RedisStore({
//     host: "localhost",
//     port: "",
//     db: ""
//   }),
//   esave: false,
//   saveUninitialized: true,
//   secret: 'keyboard cat',
//   cookie: { maxAge: 100000 }
// }))

module.exports = app;
