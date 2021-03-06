const Discord = require('discord.js')
const execute = require('./execute.js')
const config = require('./config.js')
const client = new Discord.Client()
const prefix = '!'

client.login()

client.on('message', async message => {
message.content = message.content.toLowerCase()
//code
  
  execute(prefix, message)
})
