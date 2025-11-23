var fs = require('fs');
var rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const roomsList = (req, res) => {
    res.render('rooms', { 
        title: 'Travlr Getaways',rooms});
};

module.exports = {
    roomsList
};
