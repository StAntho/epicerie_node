var QRCode = require('qrcode');

QRCode.toDataURL('coucou', function (err, url) {
  console.log(url);
});
