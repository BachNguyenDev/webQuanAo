var express = require('express');
var router = express.Router();
const pg = require('pg');
const { Client } = pg
const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'products',
  user: 'postgres',
  password: '1234',
})
async function ketNoiData() {
  try {
    await client.connect();
  } catch (err) {
    console.error('Error:', err);
  }
}
ketNoiData();
// api get data from sql
router.get('/getdata01', function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  
  client.query('SELECT * FROM product_info', (err, result) => {
     if(err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal Server Error');
     } else {
        res.send(result.rows);
     }
    //  client.end()
  });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
