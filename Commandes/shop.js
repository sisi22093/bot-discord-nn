const db = require('quick.db')
const Discord = require("discord.js");
const { table } = require('console');
// const economie = new db.table("Portefeuille")

module.exports.run = async (client, message, args) => {
    return message.channel.send("Immobilier: `1`: Appartement `2`: maison `3`: manoir `4`:Chateaux `5`:Terrain")
}


module.exports.help = {
        name:"shop",
        }