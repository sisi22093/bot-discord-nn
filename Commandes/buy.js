const db = require('quick.db')
const Discord = require("discord.js");
const economie = new db.table("Portefeuille")
const item = new db.table("Items")

module.exports.run = async (client, message, args) => {
    
    let user = message.author
    
    let monnaie = economie.fetch(`money_${message.guild.id}_${user.id}`)
    
    if (args[0] === "1") {
        if(monnaie < 1000) return message.channel.send("Vous n'avez pas assez pour vous acheter ca")

    item.add(`epee_${message.guild.id}_${user.id}`, 1)
    economie.substract(`money_${message.guild.id}_${user.id}`, 1000)

    return message.channel.send("Merci de votre achat! ")
    }

}


module.exports.help = {
        name:"buy",
        }