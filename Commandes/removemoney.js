const db = require('quick.db')
const Discord = require("discord.js");
const { table } = require('console');
const economie = new db.table("Portefeuille")

module.exports.run = async (client, message, args) => {
    let Owner = `369195340982648832`   
    if (message.author.id !== Owner) return;

    let user = message.mentions.members.first() || message.author;
    
    
    if(isNaN(args[1])) return;  
    economie.substract(`monnaie_${message.guild.id}_${user.id}`, args[1])

    return message.channel.send(`On vous a enleve ${args[1]}`)


return message.channel.send(`${aregnt} **pieces**`)
}


module.exports.help = {
        name:"removemoney",
        }