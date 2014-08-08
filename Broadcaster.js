// var redis = require('node-redis');
//
// var apns = require("apns"), device;
//
// var client = redis.createClient(10303, "pub-redis-10303.us-east-1-1.2.ec2.garantiadata.com", "loveme1234");
//
// client.subscribe('broadcast')
//
// console.log('Started Listening the messages.');
//
// client.on('message:broadcast', function (buffer) {
// 	console.log('I got a message to Broadcast.[' + buffer + ']');
//
// })

// client.unsubscribe('channel')

//client.end();


var latlong = require('latlong');

var coords = [
{lat: '40.739683', long: '73.985151', name: 'Gramercy Theatre'},
{lat: '40.730601', long: '74.000447', name: 'Blue Note Jazz Club'},
{lat: '40.742256', long: '74.006344', name: 'Milk Studios'},
{lat: '40.691805', long: '73.908089', name: 'Greenroom Brooklyn'}
]


var close = latlong(coords, {loc: {lat: 40, long: 50}, max: 1})


console.log(close.reverse())