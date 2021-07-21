console.log('app is live');

const rp = require('request-promise');
const express = require('express')
const path = require('path');
const port = 3000;
const app = express()

let bodyParser = require('body-parser');
app.use(bodyParser.json());

const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '5000',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': 'ee29c580-5ce3-4545-a4fa-ddf783e14c9c'
  },
  json: true,
  gzip: true
};



// app.get('/', function (req, res) {
//     res.send('hello world')
// })
  
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// });

app.use(express.static('docs'))

let products = [];

app.post('/products', function(req, res) {
    // implement
  });
  
  app.put('/products', function(req, res) {
    // implement
  });
  
  app.delete('/products/:id', function(req, res) {
    // implement
  });
  
  app.get('/products', (req, res) => {
    rp(requestOptions).then(response => {
        console.log('API call response:', response);
        res.json(response);
      }).catch((err) => {
        console.log('API call error:', err.message);
      });
    
    
  })

app.listen(port, ()=>{console.log('Running on port ', port)})

