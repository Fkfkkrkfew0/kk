const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("490591334575636482")
setInterval(function() {

 
channel.send(`شهد `);
}, 99)
})
 
 
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
