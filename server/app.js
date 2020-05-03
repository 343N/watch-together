//
// imports
//
const ID = require('ID.js')
const Room = require('Room.js')
const User = require('User.js')
const Video = require('Video.js')

const cfg = require('./config.json');

//
// important constants
//
const USERS = [] // indexed by ID
const ROOMS = [] // indexed by ID


var io = require('socket.io')(80);




