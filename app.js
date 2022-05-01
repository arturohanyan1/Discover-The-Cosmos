require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
const hbs = require('hbs');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const sessionFileStore = require('session-file-store');
const { userName, sessionLogger } = require('./middleware/common');

// Импортируем созданный в отдельный файлах рутеры.
const dbCheck = require('./db/dbCheck');
const indexRouter = require('./routes/indexRouter');
const registerRouter = require('./routes/registerRoutes');
const loginRouter = require('./routes/loginRoutes');
const logoutRouter = require('./routes/logoutRouter');
const aboutRouter = require('./routes/aboutRouter');
const getPhotoRouter = require('./routes/getPhotoRouter');
const myAlbumRouter = require('./routes/myAlbumRoutes');
const mainRouter = require('./routes/mainRoutes');
const showOneRouter = require('./routes/showOneRoutes');
const findAlbumRouter = require('./routes/findAlbumRoutes');

const { PORT } = process.env;

const app = express();
dbCheck();

const sessionConfig = {
  store: new FileStore(),
  name: 'MyCookieName',
  secret: process.env.SESSION_SECRET ?? 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.locals.myTitle = 'NASA';
// Сообщаем express, что в качестве шаблонизатора используется "hbs".
app.set('view engine', 'hbs');

// Сообщаем express, что шаблона шаблонизаторая (вью) находятся в папке "ПапкаПроекта/views".
// hbs.registerPartials(`${__dirname}/views`);
hbs.registerPartials(`${__dirname}/views/partials`);

// Подключаем middleware morgan с режимом логирования "dev",
// чтобы для каждого HTTP-запроса на сервер в консоль выводилась информация об этом запросе.
app.use(logger('dev'));

// sessions
app.use(session(sessionConfig));
app.use(userName);
app.use(sessionLogger);

// Подключаем middleware, которое сообщает epxress,
// что в папке "ПапкаПроекта/public" будут находится статические файлы,
// т.е. файлы доступные для скачивания из других приложений.
app.use(express.static(path.join(__dirname, 'public')));

// Подключаем middleware,
// которое позволяет читать содержимое body из HTTP-запросов типа POST, PUT и DELETE.
app.use(express.urlencoded({ extended: true }));

// Подключаем middleware, которое позволяет читать переменные JavaScript,
// сохранённые в формате JSON в body HTTP-запроса.
app.use(express.json());

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/main', mainRouter);
app.use('/about', aboutRouter);
app.use('/getPhoto', getPhotoRouter);
app.use('/myAlbum', myAlbumRouter);
app.use('/showOne', showOneRouter);
app.use('/findAlbum', findAlbumRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
