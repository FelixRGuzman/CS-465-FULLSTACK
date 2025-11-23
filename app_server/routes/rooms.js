var express = require('express');
var router = express.Router();
var ctrlRooms = require('../controllers/rooms');

router.get('/', ctrlRooms.roomsList);

module.exports = router;
