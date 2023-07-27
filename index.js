const Discord = require('discord.js');
const { Client, MessageEmbed, Intents, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.DirectMessages,
    ],
  });
  
require('dotenv').config();


client.on('ready', () => {
    console.log(`Bot is ready to go ✅ ${client.user.tag}!`);

});

client.on('messageCreate', async (message) => {
if(message.content == '!ban') {
const guild = client.guilds.cache.get(process.env.GUILD);
try {

guild.members.fetch().then(async (member) => {
    member.forEach(async (member) => {
        if(member.user.id === client.user.id) return;
        member.ban({ reason: ' Type Your Reason Here' }).then(() => {
            console.log(`Banned: ${member.user.tag}`);
        }).catch((err) => {
            console.log(`Failed to ban: ${member.user.tag}`);
        }); 
    });
});
} catch (error) {
    console.error(error);
}

}});

client.login(process.env.TOKEN);

/** 
 * 
 * Coded by Mr Groot#9862
 * 
 * */





















































































































































console.log(`
███╗░░░███╗██████╗░  ░██████╗░██████╗░░█████╗░░█████╗░████████╗
████╗░████║██╔══██╗  ██╔════╝░██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝
██╔████╔██║██████╔╝  ██║░░██╗░██████╔╝██║░░██║██║░░██║░░░██║░░░
██║╚██╔╝██║██╔══██╗  ██║░░╚██╗██╔══██╗██║░░██║██║░░██║░░░██║░░░
██║░╚═╝░██║██║░░██║  ╚██████╔╝██║░░██║╚█████╔╝╚█████╔╝░░░██║░░░
╚═╝░░░░░╚═╝╚═╝░░╚═╝  ░╚═════╝░╚═╝░░╚═╝░╚════╝░░╚════╝░░░░╚═╝░░░`)