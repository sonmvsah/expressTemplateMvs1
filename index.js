 const { static } = require('express');
 const express = require('express');
 const app = express();
 const port = 9999;

 const pug = require('pug');
 app.set('view engine', 'pug');
 app.set('views', './views');
 app.use(express.static('public'));
 app.use('/bootstrap', express.static('./bower_components/bootstrap/dist/'));
 app.use('/jquery', express.static('./bower_components/jquery/dist/'));
 app.use('/box-lid', express.static('./bower_components/box-lid/'));
 app.use('/font-awesome', express.static('./bower_components/font-awesome/css/'));
 app.get('/', (req, res) => {

     res.render('index');

 });




 app.listen(port, () => {
     console.log(`Server started on port, Let access to http://localhost:` + port);
 });