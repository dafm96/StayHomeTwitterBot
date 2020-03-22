const Twit = require('twit');
const config = require('./config.js');
const tweetBotPT = new Twit({
    consumer_key: config.consumer_key_pt,
    consumer_secret: config.consumer_secret_pt,
    access_token: config.access_token_pt,
    access_token_secret: config.access_token_secret_pt,
});
const tweetBotEN = new Twit({
    consumer_key: config.consumer_key_en,
    consumer_secret: config.consumer_secret_en,
    access_token: config.access_token_en,
    access_token_secret: config.access_token_secret_en,
});


var CronJob = require('cron').CronJob;
var job = new CronJob('0 0 12 * * *', function () {
    let statusPT = '';
    let statusEN = '';
    statusPT = config.can_i_leave === 'FALSE' ? 'Não.' : 'Sim.';
    statusEN = config.can_i_leave === 'FALSE' ? 'No.' : 'Yes.';
    console.log(status);
    tweetBotPT.post('statuses/update', { statusPT }, function (err, data, response) {
        console.log(data)
    })
    tweetBotEN.post('statuses/update', { statusEN }, function (err, data, response) {
        console.log(data)
    })
}, null, true, 'Europe/Lisbon');
job.start();