var CronJob = require('cron').CronJob;
var cronTime = require('cron').CronTime;

const fs = require('fs');
const path = require('path');

const directory = 'uploads';

module.exports = new CronJob('* 30 * * * *', () => {
    console.log('Images stored in uploads folder will be deleted  for every 30 min');

    fs.readdir(directory, (err, files)=>{
        if(err) throw err;

        files.forEach(file => {
            console.log('file ', path.join(directory, file));
            fs.unlink(path.join(directory, file), err => {
                if (err) throw err;
            });
        });
    })
});