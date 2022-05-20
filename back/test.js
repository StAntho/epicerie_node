var QRCode = require('qrcode');

QRCode.toDataURL('https://fr.reactjs.org/', function (err, url) {
  console.log('url:' + url);
});
