const express = require("express")
const path = require('path')

const app = express();



app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public')); 
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));

/*Home page*/
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
  });
/*Contact page*/
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/contact.html'))
  });
/*About page*/
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/about.html'))
  });
/*Coming to America*/
app.get("/coming_to_america", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/pages/america.html'))
  });
/*Matrix Resurrections*/
app.get("/matrix_resurrections", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/pages/matrix.html'))
  });
/*Black Widow*/
app.get("/black_widow", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/pages/Blackwidow.html'))
  });
/*Fast and Furious*/
app.get("/fast_and_furious", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/pages/fastFurious.html'))
  });
/*Hotel Love*/
app.get("/hotel_love", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/pages/hotelLove.html'))
  });
/*Away Bus*/
app.get("/away_bus", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/pages/awayBus.html'))
  });
/*Keteke*/
app.get("/keteke", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/pages/keteke.html'))
  });
/*Aloe Vera*/
app.get("/aloe_vera", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/pages/aloevera.html'))
  });
/*Nipa Nye*/
app.get("/nipa_nye", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/pages/nipanye.html'))
  });
/*jupiter ascending*/
app.get("/jupiter_ascending", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/pages/jupiter.html'))
  });
/*Ghanaian movies*/
app.get("/Ghanaian_Movies", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/pages/ghanaMovies.html'))
  });





  app.listen(5050, () =>{
    console.log('Running Server at port 5050');
  
  });