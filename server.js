// dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const sequelize = require('./config/connection');
// Import the custom helper methods
const helpers = require('./utils/helpers'); //this code doesn't exist yet so leave him coded out for now

const app = express();
const PORT = process.env.PORT || 3001;


// Set up sessions with cookies
const sess = {
  secret: "Future secret",
  cookie: {
    // Stored in milliseconds (86400 === 1 day)
    maxAge: 86400,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({}); //this tells it to go to layout/main - automatically

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


// // Cloudinary Server

// const http = require('http');
// const util = require('util');

// const Formidable = require('formidable');

// http.createServer((req, res) => {
//   if (req.url === '/upload' && req.method.toLowerCase() === 'post') {

//     //parse a picture upload
//     // const form = new Formidable();

//     //image we uploaded
//     form.parse(req, (err, fields, files) => {
//       res.writeHead(200, { 'content type': 'text/plain' });
//       res.write('received upload: \n\n');
//       res.end(util.inspect({ fields: fields, files: files }));
//     });
//     return;
//   }
//   res.writeHead(200, { 'content-type': 'text/html' });
//   res.end(`
//   <div style= "display:flex;justify-content:center; align-items:center; width:100%, height: 100%">
//   <form action="/upload" enctype="multipart/form-data" method="post">
//     <input type="file" name="upload" multiple="multiple" /><br/><br/>
//     input type="submit" value"upload"/>
//     </form>
//     </div>
//     `);
// }).listen(5000);