var fs = require('fs');
// // var events = require('events');
// // var eventEmitter = new events.EventEmitter();
var rs = fs.createReadStream('./demofile.txt');

rs.on('open', function() {
    console.log('Dosya Açıldı')
});