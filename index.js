const {Client, GatewayIntentBits} = require('discord.js') 

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] }); 

client.on('messageCreate', (message) => {
    console.log(message.content);
    if(message.author.bot)
        return;
    message.reply({
        content : "Hi, I am Discord Bot!"
    })
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!!');
    }

    if (interaction.commandName === 'short-url') {
        console.log(interaction.content)
        await interaction.reply('Feature work in progress 😭');
      }


  });


client.login(DiscordToken);