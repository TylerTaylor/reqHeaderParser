var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/whoami', (req, res) => {
  // get the IP address, language and operating system for this browser
  var osInfo = req.headers['user-agent']
  osInfo = osInfo.split(/[\(\)]/)[1] // search for words in parentheses

  var ip = req.ip
  // we only need the first part of the language, before the comma
  var language = req.headers['accept-language'].split(',')[0].trim()

  var data = {
    "ipaddress": ip,
    "language": "en-US",
    "software": osInfo
  }

  res.json(data)
})

module.exports = router;
