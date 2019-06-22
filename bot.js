const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("591990452845150219")
setInterval(function() {
channel.send(`Amir Kaoua`);
}, 30)
})

client.login(process.env.BOT_TOKEN);