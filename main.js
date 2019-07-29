const Discord = require('discord.js')
const fs      = require('fs')
const config  = JSON.parse(fs.readFileSync('config.json', 'utf8'))



var client = new Discord.Client()

client.on('ready', () => {
console.log(`Logged in as ${client.user.username}...`)
if(config.activity.streaming == true) {
client.user.setActivity(config.activity.streamgame, {url: config.activity.url})
} else if(config.activity.streaming != true) {
client.user.setActivity(config.activity.game, {type: 'PLAYING'})
}
})

client.on('message', (msg) => {
var cont     = msg.content,
member   = msg.member,
channel  = msg.channel,
guild    = msg.guild


    if(member.id != client.user.id && cont.startsWith(config.prefix + "no-real")) {
    member.removeRole('601091026270289940')
    let embed1 = new Discord.RichEmbed()
        .setColor(config.colors.blau)
        .addField("Dir wurde Die Rolle `Realität Abonennt/in` emtfernt!", `rquested by ${member.displayName}`);
    channel.sendEmbed(embed1)
    } if(member.id != client.user.id && cont.startsWith(config.prefix + "real")) {
    member.addRole('520951937307246602')
    let embed2 = new Discord.RichEmbed()
        .setColor(config.colors.blau)
        .addField("Dir wurde Die Rolle `Realität Abonennt/in` hinzugefügt!", `requested ${member.displayName}`)
    } if(member.hasPermission('ADMINISTRATOR') && member.id != client.user.id && cont.startsWith(config.adminprefix + "offline")) {
    client.user.setStatus('invisible')
    let embed3 = new Discord.RichEmbed()
        .setColor(config.colors.blau)
        .addField("Der Status wurde nun auf **OFFLINE** gesetzt", `requested by ${member.displayName}`);
    channel.sendEmbed(embed3)
    } if(member.hasPermission('ADMINISTRATOR') && member.id != client.user.id && cont.startsWith(config.adminprefix + "online")) {
    client.user.setStatus('online')
    let embed4 = new Discord.RichEmbed()
        .setColor(config.colors.blau)
        .addField("Der Status wurde wider auf **ONLINE**", `requested by ${member.displayName}`);
    channel.sendEmbed(embed4)
    } if(member.hasPermission('ADMINISTRATOR') && member.id != client.user.id && cont.startsWith(config.adminprefix + "n-activity")) {
    client.user.setActivity(config.activity.game, {type: 'PLAYING'})
    let embed5 = new Discord.RichEmbed()
        .setColor(config.colors.blau)
        .addField(`Die Aktivität wurde auf **${config.activity.game}** gesetzt`, `requested by ${member.displayName}`);
    channel.sendEmbed(embed5)
    } if(member.hasPermission('ADMINISTRATOR') && member.id != client.user.id && cont.startsWith(config.adminprefix + "s-activity")) {
    client.user.setActivity(config.activity.streamgame, {url: config.activity.url})
    let embed6 = new Discord.RichEmbed()
        .setColor(config.colors.blau)
        .addField(`Die Aktivität auf **${config.activity.streamgame}** gesetzt`, `requested by ${member.displayName}`);
    channel.sendEmbed(embed6)
    } if(member.id != client.user.id && cont.startsWith(config.prefix + "help")) {
    let embed7 = new Discord.RichEmbed()
        .setColor(config.colors.blau)
        .addField("Du kannst in **#command-vorschläge** Vorschläge stellen!", `requested by ${member.displayName}`);
    channel.sendEmbed(embed7)
    } if(member.id != client.user.id && cont.startsWith(config.prefix + "wumpus")) {
        let embed8 = new Discord.RichEmbed()
            .setThumbnail("https://images.discordapp.net/avatars/562551251699630081/23f23de7b41aa0bb7fac1cb4edd5deed.png?size=512");
        channel.sendEmbed(embed8)
    }

})



client.login(config.token)
