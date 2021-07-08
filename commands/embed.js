const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('INFORMATION')
            .setTitle('**INFORMATION SERVEUR**')
            .setDescription('[clic pour voter](https://top-serveurs.net/gta/vote/modernity-life-rp-606ad0fcd615b) vote le serveur')
            .setColor('#00ff51')
            .addField('statut du serveur', 'le serveur est actuellement ouvert\nmerci de vous connecter si possible', true)
            .addField('comment ce connecter ?', 'F8 puis\nconnect mlfivegt.isaper.com', true)
            .setAuthor('Bot de MLfive', 'https://cdn.discordapp.com/attachments/822897296244080651/855727111717650442/20210617_184940.jpg', 'https://google.fr')
            .setImage('https://cdn.discordapp.com/attachments/822897296244080651/855727111717650442/20210617_184940.jpg')
            .setThumbnail('https://cdn.discordapp.com/attachments/822897296244080651/855727111717650442/20210617_184940.jpg')
            .setFooter('bot d administration et d information de Mlfive', 'https://cdn.discordapp.com/attachments/822897296244080651/855727111717650442/20210617_184940.jpg')
            .setTimestamp()
            .setURL('https://google.fr'))
    },
    name: 'embed'
}
