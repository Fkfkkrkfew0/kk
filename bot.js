const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("490591334575636482")
setInterval(function() {

 for i in range (0,10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000):
 
channel.send(`شهد `);
}, 25)
})
 
 
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
