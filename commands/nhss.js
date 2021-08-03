const Discord = require("discord.js");

module.exports = {
    name: 'NHSS',
    description: 'All you need to know about NHSS',
    format: '',
    permlvl: 0,
    restricted: false,
    execute(message) {
        const returnEmbed = new Discord.MessageEmbed()
        .setColor('#FF7100')
        .setAuthor('The Anti-Xeno Initiative', "https://cdn.discordapp.com/attachments/860453324959645726/865330887213842482/AXI_Insignia_Hypen_512.png")
        .setTitle("[**NHSS Types**](https://wiki.antixenoinitiative.com/en/nhss)")
        .setDescription(`You can semi consistently determine NHSS contents based on their threat rating:`)
        returnEmbed.addField("THREAT 3: 2 Scouts + 0-3 Human ships")
        returnEmbed.addField("THREAT 4: 4-7 Scouts + 0-3 Human ships")
        returnEmbed.addField("THREAT 5: 1 Cyclops    OR    4-8 Scouts")
        returnEmbed.addField("THREAT 6: 1 Basilisk   OR    1 Cyclops + 4 Scouts    OR    12 Scouts")
        returnEmbed.addField("THREAT 7: 1 Medusa     OR    1 Basilisk + 4 Scouts")
        returnEmbed.addField("THREAT 8: 1 Hydra      OR    1 Medusa + 4 Scouts")
        returnEmbed.addField("THREAT 9: 1 Hydra + 4 Scouts")
        returnEmbed.addField("**NOTE:** If a Nonhuman Signal Source has a Salvage Icon (cylinder) in the navigation panel, it will always be a solo Thargoid Interceptor.")
        returnEmbed.addField("NHSS Spawn Rate Analysis: https://cdn.discordapp.com/attachments/566728213737373707/704675898263076894/2020-04-28_22_50_46-Window.png")
        message.channel.send(returnEmbed.setTimestamp());
    }
};