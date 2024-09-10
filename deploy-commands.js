import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const clientId = process.env.CLIENT_ID; // Ensure this is set
const guildId = process.env.GUILD_ID;   // Ensure this is set

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'add',
    description: 'Adds two numbers',
    options: [
      {
        type: 4, // INTEGER
        name: 'number1',
        description: 'First number',
        required: true,
      },
      {
        type: 4, // INTEGER
        name: 'number2',
        description: 'Second number',
        required: true,
      },
    ],
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
