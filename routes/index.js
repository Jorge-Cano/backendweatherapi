var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// http://api.openweathermap.org/data/2.5/weather
// 1260c86b947da77d1247faff3c62e18f
// var getWeather = $.ajax({
//   url: apiUrl,
//   method: 'GET',
//   dataType: 'json',
//   data: {
//     q: city,
//     appid: apiKey,
//     units: 'imperial'
//   }
// })
// api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111

router.post('/city', function(req,res,next){
  console.log('inside the city backend');
  console.log('the value of req.body.city is ', req.body.city);
  var url = 'http://api.openweathermap.org/data/2.5/weather?q="'+req.body.city+'"&APPID=1260c86b947da77d1247faff3c62e18f';
  axios.get(url)
  .then((response)=>{
    console.log("backend response from open weather api ", response);
    res.json({response});
  })
});


module.exports = router;
