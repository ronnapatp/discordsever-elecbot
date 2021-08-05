const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const { MessageEmbed } = require('discord.js');



client.on('ready', () => {
	console.log(`Logged in as election info bot!`);
});
client.on("message" , msg => {
    if (msg.content === '%$electioninfo'){
        msg.delete()
        msg.channel.send('@everyone')
const exampleEmbed = new MessageEmbed()

	.setColor('#0099ff')
	.setTitle('Election info Month 3 ( 08/30 )')
	.setAuthor('Hi I bored election info')
	.setDescription('Cadinate')
	.setThumbnail('https://cdn.discordapp.com/icons/841948324940873740/a_974b8a68d2a4b80a01b24879246a0075.webp?size=256')
	.addFields(
		{ name: '1.<tag people>', value: 'policy' },
        { name: '2.<tag people>', value: 'policy' },
        { name: '3.<tag people>', value: 'policy' },
        { name: '4.<tag people>', value: 'policy' },
        { name: '5.<tag people>', value: 'policy' },
        { name: '6.<tag people>', value: 'policy' },
        { name: '7.<tag people>', value: 'policy' },
        { name: '8.<tag people>', value: 'policy' },
        { name: '9.<tag people>', value: 'policy' },
        { name: '10.<tag people>', value: 'policy' },

	)
	.setFooter('Vote วันนี้ 13.00 - 21.00', 'https://cdn.discordapp.com/icons/841948324940873740/a_974b8a68d2a4b80a01b24879246a0075.webp?size=256');

    msg.channel.send(exampleEmbed);
}
  })
  client.on("message" , msg => {
    if (msg.content === '%$electionlink'){
        msg.delete()
        msg.channel.send("@everyone Here is link for vote. **GO TO VOTE!**😄 https://forms.gle/fngWaAVtWytsscbLA");
  }
  })
  client.on("message" , msg => {
    if (msg.content === '%$electionresult'){
        msg.delete()
        msg.channel.send("@everyone Here is the election result");
        msg.channel.send('<img or result>')
  }
  })
  client.on("message" , msg => {
    if (msg.content === '%$electioncadinaterequest'){
        msg.delete()
        msg.channel.send("เปิดรับสมัคร Cadinate นายกรัฐมนตรี Hi i bored community ประจำสมัยที่ 3 โปรดติดตามการเลือกตั้งอย่างใกล้ชิดที่ <#864329895151796264>");
        msg.channel.send('Application for Prime Minister Cadinate of Hi i bored community For the 3 time, stay tuned for the election closely at <#864329895151796264>')
        msg.channel.send("https://forms.gle/6UAFekwommKKY9ieA")
        msg.channel.send('Vote 30/8/2021 at google form.')
  }
  })
  client.on("message" , msg => {
    if (msg.content === '%$nextelection'){
        msg.delete()
        const exampleEmbed = new MessageEmbed()

        .setColor('#0099ff')
        .setTitle('Next election is at')
        .setAuthor('Hi I bored election info')
        .setDescription('30/8/2021')
        .setThumbnail('https://cdn.discordapp.com/icons/841948324940873740/a_974b8a68d2a4b80a01b24879246a0075.webp?size=256')
        .setFooter('Hi I bored election info', 'https://cdn.discordapp.com/icons/841948324940873740/a_974b8a68d2a4b80a01b24879246a0075.webp?size=256');
    
        msg.channel.send(exampleEmbed);
  }
  })
client.login(config.token);