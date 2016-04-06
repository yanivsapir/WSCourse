'use strict';

var EventEmitter = require('events');
var eventsConfig = require('./config');

module.exports = class hotelReviewHanlder extends EventEmitter{
    constructor(hName, category){
        super();
        this.hotelName = hName;
        this.category = category;
        this.likeCnt = 0;
    }

    incLikeCnt(){
        this.likeCnt += 1;
        this.emit(eventsConfig.cntChanged);
    }
    
    decLikeCnt(){
        if(this.likeCnt > 0)
            this.likeCnt -= 1;
        this.emit(eventsConfig.cntChanged);
    }
}