const db = require('quick.db')
const Discord = require("discord.js");
const { table } = require('console');
const economie = new db.table("Portefeuille")
const item = new db.table("Vitrine")

module.exports.run = async (client, message, args) => {
       let user = message.author
       
        let argent = economie.fetch(`monnaie_${message.guild.id}_${user.id}`)
        if (argent === null) argent = 0
        let items = item.fetch(`epee_${message.guild.id}_${user.id}`)
        if (items === null) items = 0

return message.channel.send(` Argent: ${argent} dollars néonormands 
Items : ${items} epée`)

}


module.exports.help = {
        name:"money",
        }