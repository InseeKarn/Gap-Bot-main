import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent // Ensure you have this intent if you want to access message content
  ] 
});

client.once('ready', () => {
  console.log('✅ Ready! Logged in as ${client.user?.tag}');
  
});

client.on('messageCreate', message => {
  // Handle messages here
  if (message.content === '!ping') {
    message.channel.send('Pong.');
  }
});

// Make sure you have BOT_TOKEN in your .env file
client.login(process.env.TOKEN);
