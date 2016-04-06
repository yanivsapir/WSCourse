'use strict';

var http = require('http');
var EventEmitter = require('events');
var eventsConfig = require('./config');
var hotelReviewHanlder = require('./hotelReviewHandler');
var data = "";

http.createServer(function (req, res){
    main();
    res.writeHeader(200,{'Content-Type':'text/plain'});
    res.end(data + "success");
}).listen(3000,'127.0.0.1');

console.log('listening on port 3000..')

function main(){
    var hrh = new hotelReviewHanlder("YS Hotel","Sport");
    hrh.on(eventsConfig.cntChanged,function(){
        if(hrh.likeCnt > 0){
            data = data + "likes counts was updated to: " + hrh.likeCnt
             + "\n";
            console.log("Hotel: '" + hrh.hotelName 
            + "' likes Count was updated from: " 
            + (hrh.likeCnt - 1) + " to: " + hrh.likeCnt);
        }else{
            data = data + "likes counts was updated back to 0\n";
            console.log("Hotel: '" + hrh.hotelName + "' likes Count is: 0\n");
        }
    });

    hrh.incLikeCnt();
    hrh.incLikeCnt();
    hrh.decLikeCnt();
    hrh.decLikeCnt();
    hrh.decLikeCnt();
    hrh.incLikeCnt();
}