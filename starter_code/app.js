
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')
app.set('views', __dirname + '/views');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index');
});
app.get('/beers', (req, res, next) => {
  
  punkAPI.getBeers()
    .then(beers => {

      
      console.log(beers[0].food_pairing)
      res.render('beers', {beers: beers });
      
    })
    .catch(error => {
    })
  });
  
  app.get('/random-beers', (req, res, next) => {
    res.render('randombeer');
  });
  
  // console.log(error)
  
  app.listen(3000);
  // res.render('beers');
      // let beerArr = beers.map(beer => {
      //   return {
      //       title: beer.name,
      //       tagline: beer.tagline,
      //       url: beer.image_url,
      //       description: beer.description
      //   }
      // });