'use strict';

var logger = require('powwow-server-common').logger;
var stateManager = require('powwow-server-common').stateManager;
var screens = stateManager.screens;
var config = require('../config');
var fs = require('fs');
var app = require('powwow-server-common').app;

exports.nextpage = function(page, params) {
    page.action("searchdata", "nextpage");
	
}