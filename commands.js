// Code for registering a command in Discord

const { REST, Routes }  = require('discord.js');


const commands = [
  {
    name: 'short-url',
    description: 'Generates Short URL for Messy Long URLS!😋',
  },
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}


