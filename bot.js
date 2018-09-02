const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const talkedRecently = new Set();
const InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

client.on('ready', () => {
  console.log(`I\'m online!`);
});

var prefix = "!"
client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) return;
  if (msg.author.bot) return;
if (msg.content.startsWith(prefix + 'what')) {
  msg.channel.send("Greetings Human From Mortal World. This Is Tenshi Sama, The Holy Goddess.\nThings You Can Do Currently:\n!pray --> Pray to Tenshi Sama Once Every Hour!\n")
} else if (msg.content.startsWith(prefix + 'pray')) {
if (talkedRecently.has(msg.author.id)) {
           msg.channel.send(msg.author + "You Can Only Pray To Me Once Per Hour.\nOr Else You Would Be OP With Too Many Blessings!");
   } else {
     msg.channel.send(msg.author + "   " + settings.greets[Math.floor(Math.random() * settings.greets.length)]);

     talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 3600000);
    }} else if(!msg.content.startsWith(prefix + 'what' || prefix + 'pray')) {msg.channel.send("You Stupid Mortal! You Dare To Call Me Without Using Appropriate Commands! Type !what For Help!")}
});


client.login(process.env.TOKEN);
