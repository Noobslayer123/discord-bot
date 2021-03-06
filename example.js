const Discord = require('discord.js')
const execute = require('./execute.js')
const client = new Discord.Client()
const prefix = '!'

client.on('message', async message => {
message.content = message.content.toLowerCase()
//code
  
  execute(message)
})
