require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client();
const createCaptcha = require('./captcha');
const fs = require('fs').promises;
client.login(process.env.token);

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

client.on('guildMemberAdd', async member => {
    const captcha = await createCaptcha();
    try {
        const msg = await member.send('', {
            files: [{
                attachment: `${__dirname}/captchas/${captcha}.png`,
                name: `${captcha}.png`
            }]
        });
        try {
            const filter = m => {
                if(m.author.bot) return;
                if(m.author.id === member.id && m.content === captcha) return true;
                else {
                    m.channel.send('Incorrecto.');
                    return false;
                }
            };
            const response = await msg.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time']});
            if(response) {
                await msg.channel.send('Has sido verificado!');
                await member.roles.add('736001778121965749');
                await fs.unlink(`${__dirname}/captchas/${captcha}.png`);
                logs = client.channels.cache.get('736173575547125780');
                logs.send(`${mention.member} se ha verificado`)
                    .catch(err => console.log(err));
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    catch(err) {
        console.log(err);
    }
});