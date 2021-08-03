const Discord = require("discord.js");

// TEMPLATE FOR BASIC EMBED

module.exports = {
	name: 'NAME',
	description: 'DESCRIPTION',
    format: '',
	permlvl: 2,
	restricted: false,
    hidden: true,
	execute(message, args) {


        const returnEmbed = new Discord.MessageEmbed()
        .setColor('#FF7100')
        .setAuthor('The Anti-Xeno Initiative', "https://cdn.discordapp.com/attachments/860453324959645726/865330887213842482/AXI_Insignia_Hypen_512.png")
        .setTitle("text")
        .setDescription(`Text`)


        message.channel.send(`${message.author.toString()} This is my reply`);
        message.channel.send(returnEmbed.setTimestamp());
    }
};