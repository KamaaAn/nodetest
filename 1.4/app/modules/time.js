
var os = require('os');

function getProprtTime(){
        var uptime = os.uptime();
        var timeHours = Math.floor(uptime / 360);
        var timeMin = uptime % 60;
        console.log('Uptime: ', timeHours, 'godz.', timeMin, 'min');
        
        }

exports.print = getProprtTime;
