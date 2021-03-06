const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '!'

client.on('message', async message => {
message.content = message.content.toLowerCase()
//code

if (message.content === `${prefix}help`) {
try {
message.channel.send(`ok`)
} catch(err) {
console.log(`error??`)
}
}
})
