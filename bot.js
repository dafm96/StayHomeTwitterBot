const Twit = require('twit');
const config = require('./config.js');
const tweetBot = new Twit(config);


var CronJob = require('cron').CronJob;
var job = new CronJob('0 0 12 * * *', function () {
    let status = '';
    if (config.language === 'PT') {
        status = config.can_i_leave === 'FALSE' ? 'Não.' : 'Sim.';
    }
    else if (config.language === 'EN') {
        status = config.can_i_leave === 'FALSE' ? 'No.' : 'Yes.';
    }
    if (status !== '') {
        tweetBot.post('statuses/update', { status }, function (err, data, response) {
            console.log(data)
        })
    }
}, null, true, 'Europe/Lisbon');
job.start();