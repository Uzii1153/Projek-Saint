 const SETTING = require('../lib/validator/config')
 const keywords = require('../lib/validator/allKeywords')
  //=======================================================//
                      /* { module } */
  //=======================================================//
  let modul = SETTING['modul'];
  let getreq = SETTING['file'];
  const chalk = modul['chalk'];
  const fs = modul['fs'];
  const util = modul['util'];
  const https = modul['https'];
  const axios = modul['axios'];
  const ytsr = modul['ytsr'];
  var os = require('os')
  const { spawn, exec } = modul['child'];
  const { downloadContentFromMessage, WA_DEFAULT_EPHEMERAL, getLastMessageInChat, MessageType, generateWAMessageFromContent, proto } = modul['baileys'];
  const moment = modul['time'];
  const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
  const qrcode = modul['qrcode'];
  const QrCode = modul['QrCode'];
  const qr = new QrCode();
  const ikyyClient = modul['ikyy'];
  const Ikyy = new ikyyClient();
  const { sizeFormatter } = modul['sizeFormater']
  const speed = modul['speed'];
  const request = modul['request'];
  const path = modul['path'];
  const dl = modul['bochil'];
  const ms = modul['premium'];

/*<--------------------( external function )--------------------->*/
  const { instagram } = require('.' + getreq['scrapp'])
  const _prem = require('.' + getreq['prem'])
  const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('.' + getreq['limit'])
  const thumbb = fs.readFileSync ('./storage/image/thumb.jpg')

   //=======================================================//
                       /* { database } */
   //=======================================================//
   const { parseMention } = require('../lib/myfunc')
   var balance = JSON.parse(fs.readFileSync('./storage/database/balance.json')); 
   var limit = JSON.parse(fs.readFileSync('./storage/database/limit.json'));
   var glimit = JSON.parse(fs.readFileSync('./storage/database/glimit.json'));
   var premium = JSON.parse(fs.readFileSync('./storage/database/premium.json'));
   const pengguna = JSON.parse(fs.readFileSync('./storage/database/user.json'))
   const banned = JSON.parse(fs.readFileSync('./storage/database/banned.json'))

/*
debedata = JSON.parse(fs.readFileSync('./storage/database/database.json'))

if (debedata) global.db.data = {

users: {},

chats: {},

game: {},

database: {},

settings: {},

setting: {},

others: {},

sticker: {},
    
     ...(global.db.data || {})

}*/
   //=======================================================//
                       /* { js } */
   //=======================================================//
   
  const { color, bgcolor, ConsoleLog, biocolor } = require('.' + getreq['color'])
  const { reSize, runtime, getBuffer, getRandom, pickRandom, fetchJson, isUrl, genMath, formatp} = require('.' + getreq['funct'])
  const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif, writeExifStc } = require('.' + getreq['exif'])
  
  //=======================================================//
                       /* { media } */
  //=======================================================//

  const thumb = fs.readFileSync(getreq['thumb'])
  
//=======================================================//
                       /* { exports this function } */
//=======================================================//
b = '*'
g = '```'
shp = '⬡'
module.exports = async(msg, client, from, store) => {
    
    //=======================================================//
                          /* { detect } */  
    //=======================================================//
   const isGrouP = msg.key.remoteJid.endsWith('@g.us')
   const sender = isGrouP ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
   const pushname = msg.pushName || "No Name"
   const CMD = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.xtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage') && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'listResponseMessage') && msg.message.listResponseMessage.singleSelectReply.selectedRowId? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.xtype == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
   const prefix = /^[#!.,®©¥€¢£/\∆✓]/.test(CMD) ? CMD.match(/^[#!.,®©¥€¢£/\∆✓]/gi) : '#'   
	 global.prefix = prefix
   const chatmessage = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') ? msg.message.imageMessage.caption : (msg.xtype == 'videoMessage') ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.xtype == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (msg.xtype === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : ''
   const ordermessage = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.xtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text.startsWith(prefix) ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage') && msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'listResponseMessage') && msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.xtype == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? msg.message.templateButtonReplyMessage.selectedId : ''   
   const chats = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.xtype == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (msg.xtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''   	
   const args = ordermessage.trim().split(/ +/).slice(1)         
   const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
   const command = ordermessage.slice(1)
   const q = args.join(' ')
   const text = args.join(" ")
   const fatkuns = (msg.quoted || msg)
   const quoted = (fatkuns.xtyp == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.xtyp == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.xtyp == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : msg.quoted ? msg.quoted : msg
   const isCmd = ordermessage.startsWith(prefix)   
   const content = JSON.stringify(msg.message)
   const orderPlugins = isCmd ? ordermessage.slice(1).trim().split(/ +/).shift().toLowerCase() : null
   const isGroup = from.endsWith(keywords[0]['chats'][1])
   const botNumber = client.user.id.split(':')[0] + keywords[0]['chats'][0]
   const mime = (quoted.msg || quoted).mimetype || '' 
   const isMedia = /image|video|sticker|audio/.test(mime)
   const itulho = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid  
   const isOwner = [botNumber, ...global.ownerNumber].map(jid => jid.replace(/[^0-9]/g, '') + keywords[0]['chats'][0]).includes(itulho)
   const groupMetdata = isGroup ? await client.groupMetadata(from) : ''
         client.groupMembers = isGroup ? groupMetdata.participants : ''
         client.groupName = isGroup ? await groupMetdata.subject : ''   
         client.groupAdmins = isGroup ? msg.getGroupAdmins(client.groupMembers) : ''
   const isBotGroupAdmins = client.groupAdmins.includes(botNumber) || false
   const isGroupAdmins = client.groupAdmins.includes(msg.sender)
   const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
   const gcounti = SETTING.gcount
   const gcount = isPremium ? gcounti.prem : gcounti.user
   const limitCount = SETTING.limitCount
   
   //=======================================================//
                    /* { Premium } */  
    //=======================================================//

    _prem.expiredCheck(client, premium)

   //=======================================================//
                    /* { participant mentions } */   
   //=======================================================//

   const isImage = (msg.xtype === 'imageMessage')
   const isVideo = (msg.xtype === 'videoMessage')
   const isSticker = (msg.xtype == 'stickerMessage')
   const isAudio = (msg.xtype == 'audioMessage')
   const isText = (msg.xtype == 'conversation')
   const isReaction = (msg.xtype == 'reactionMessage')
   const isViewOnce = (msg.xtype == 'viewOnceMessage')
   const isAllMedia = (msg.xtype === 'imageMessage' || msg.xtype === 'videoMessage' || msg.xtype === 'stickerMessage' || msg.xtype === 'audioMessage' || msg.xtype === 'contactMessage' || msg.xtype === 'locationMessage')
   const isQuotedImage = msg.xtype === 'extendedTextMessage' && content.includes('imageMessage')
   const isQuotedVideo = msg.xtype === 'extendedTextMessage' && content.includes('videoMessage')
   const isQuotedSticker = msg.xtype === 'extendedTextMessage' && content.includes('stickerMessage')
   const isQuotedAudio = msg.xtype === 'extendedTextMessage' && content.includes('audioMessage')
   const isQuotedTeks = msg.xtype === 'extendedTextMessage' && content.includes('quotedMessage')
   const isQuotedTag = msg.xtype === 'extendedTextMessage' && content.includes('mentionedJid')
   const isQuotedReply = msg.xtype === 'extendedTextMessage' && content.includes('Message')
   const isQuotedText = msg.xtype === 'extendedTextMessage' && content.includes('conversation')
   const isQuotedViewOnce = msg.xtype === 'extendedTextMessage' && content.includes('viewOnceMessage')


   const mentionByTag = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
   const mentionByreply = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""       
   const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
          mention != undefined ? mention.push(mentionByreply) : []
   const mentionUser = mention != undefined ? mention.filter(n => n) : false 
  //=======================================================//
                          /* { function } */   
  //=======================================================//

   const sleep = async (ms) => {
       return new Promise(resolve => setTimeout(resolve, ms))
   }
                   
    const formatSize = sizeFormatter({
 	std: "JEDEC",
	decimalPlaces: "2",
	keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B`,
   });   
   
   
   //=======================================================//      
         /* { Function Hari } */
   //=======================================================//
        
   const today = moment().tz("Asia/Jakarta")
   const day = today.format('dddd');
   const datee = today.format('D');
   const month = today.format('MMMM');
   const year = today.format('YYYY');
   const jos = '```'
   
   //=======================================================//      
         /* { Function Rp } */
   //=======================================================//
   
   function Rp(angka) {
    return "Rp. " + (angka < 0 ? "" : "") + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "";
   }
   const totaal = getBalance(sender, balance)
   const belec = await Rp(`${totaal}`)
   
   const replyNtag = (teks) => {
    client.sendMessage(from, { text: teks, mentions: parseMention(teks) }, { quoted: msg })
    }


const replygc = (teks) => {        
client.sendMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true,
quoted: msg,
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `halll`,
"body": `Rest Api Free For You`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": "https://telegra.ph/file/1ea8b5174fdedc5a791bb.jpg",
"mediaUrl": `https://github.com/Aldi33`,
"thumbnail": global.thumb,
"sourceUrl": `https://youtube.com/xziyy__`}}})}

const replyL = (teks) => {
return client.sendMessage(from, { 
text: teks, 
contextInfo:{
"externalAdReply": {
"title": `halo saya sain bot`,
"body": `${msg.sayingtime + msg.timoji} kak ${pushname}`,
mediaType: 1,
renderLargerThumbnail: true,
"previewType": "VIDEO",
"jpegThumbnail": thumbb,
"thumbnailUrl": 'https://telegra.ph/file/1ea8b5174fdedc5a791bb.jpg',
"thumbnail": thumbb,
"sourceUrl": `https://whatsapp.com/channel/0029VaPNMxNK0IBsKDGFD90K`}}}, { quoted:msg})} 




/*const replyL = (teks) => {
client.sendMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Hallo ${pushname}` ,
"body": `Rest Api Free For You`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"mediaUrl": "http://Instagram.com/zuxyganz_",
"thumbnail": global.thumb,
"sourceUrl": "http://ziy.herokuapp.com",
}} quoted : msg})
}*/
   //=======================================================//
                         /* { plugins } */ 
    //=======================================================//
    
   for (let name in plugins) {
                let plugin = plugins[name]              
                if (plugin.order && plugin.order.includes(orderPlugins)) {
                    let turn = plugin.order instanceof Array
                        ? plugin.order.includes(orderPlugins)
                        : plugin.order instanceof String
                            ? plugin.order == orderPlugins
                            : false
                    if (!turn) continue
                    if (plugin.owner && !isOwner){ msg.reply(keywords[0]['message'][2])
                    continue 
                    }
                    if (plugin.group && !isGroup){ msg.reply(keywords[0]['message'][1])
                    continue
                    }
                    if (plugin.groupAdmins && !isGroupAdmins){ msg.reply(keywords[0]['message'][3])
                    continue
                    }
                    if (plugin.botGroupAdmins && !isBotGroupAdmins){ msg.reply(keywords[0]['message'][4])
                    continue
                    }
          await plugin.exec(msg, client, from, { q, args, order })
       }
   }         
   
const nay1 = { key: {fromMe: false, participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { contactMessage: { displayName: `${msg.sayingtime + msg.timoji}\n☏User: ${pushname}`, vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + `item1.TEL;waid=${sender.split("@")[0]}:+${sender.split("@")[0]}\n` + 'item1.X-ABLabel:Ponsel\n' + 'END:VCARD' }}}  
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2024,status: 200, thumbnail: global.thumb, surface: 200, message: 'Yahoo Semuanya 👋', orderTitle: 'xZiyy', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}


const replyKon = (teks) => {
client.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `Fauzi Pristel`,"body": `follow ig me`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./storage/image/thumbnail.jpg`),"sourceUrl": "https://instagram.com/ziyy__"}}}, { quoted: msg})
}




    //=======================================================//               
                                         /* { eval } */
    //=======================================================//
    if (chatmessage.startsWith('=>')) {

    if (!isOwner) return msg.reply('*khusus Premium*')

    let evaled = await eval(chatmessage.slice(2))

    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await msg.reply(evaled)

    }
    
if (chatmessage.startsWith('>')) {
if (!isOwner) return 
if (!q) return msg.reply('Masukan Parameter Code!')
let kode = chatmessage.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await msg.reply(require('util').format(teks))
}
}

     if (chatmessage.startsWith('$')) {
       if (!isOwner) return 
        exec(chatmessage.slice(2), (err, stdout) => {
       if(err) return client.sendMessage(from, {text :String(err)}, {quoted:msg})
       if (stdout) return msg.reply(stdout)
       })
     } 



     //=======================================================//
                                   /* { function pplong } */
     //=======================================================//
     
     const jimp_1 = require('jimp')
      async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}


//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(msg.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(msg.text)) return
isSurrender = !/^[1-9]$/.test(msg.text)
if (msg.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(msg.sender === room.game.playerO, parseInt(msg.text) - 1))) {
msg.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (msg.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = msg.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await client.sendText(room.x, str, msg, { mentions: parseMention(str) } )
await client.sendText(room.o, str, msg, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}


															
 
   //=======================================================//
                             /* { conlog cmd } */
   //=======================================================//
   
     if (isCmd && !isGroup) {
        console.log(keywords[0]['cmd'][0], keywords[0]['cmd'][1], time, color(`#${command} [${args.length}]`, 'gray'), 'from', color(msg.pushName))
     }
     if (isCmd && isGroup) {
       console.log(keywords[0]['cmd'][0], keywords[0]['cmd'][1], time, color(`#${command} [${args.length}]`, 'gray'), 'from', color(msg.pushName), 'in', color(client.groupName, 'orange'))
     }
   
   //=======================================================//
                         /* { cases } */   
   //=======================================================//
                       
    switch(order){
/*
case prefix + ['afk']: {

let user = global.db.data.users[msg.sender]

user.afkTime = + new Date

user.afkReason = text

msg.reply(`${pushname}... Telah Afk Dengan Alasan ${text ? ': ' + text : ''}`)
}

break*/

case prefix + ['p'] :{
     if (!msg.isGroup) return
     replykon('Pu Pa Pe Pe Biasakan lah Mengucapkan Salam/n/nsain bot WhatsApp_')
     }
     break

case prefix + ['p'] :{
     replykon('iya ada apa ya')
     }
     break
case prefix + ['help']: {
/*const sections = [
    {
title: `HolyHelper`,
      rows: [
        {
          title: "menu",
          rowId: ".menu",
          description: "menampilkan menu",
        }
      ],
    }
  ];

  const listMessage = {
    text: `
Hai, @${msg.sender.split("@")[0]}.

々 *PENGENALAN*
• HolyHelper Multidevice, sebuah robot yang dirancang dengan full bahasa JavaScript dan terhubung langsung dengan WhatsApp. Diciptakan untuk memberikan bantuan ekstra kepada pengguna WhatsApp, HolyHelper siap membantu Anda mengoptimalkan pengalaman penggunaan fitur WhatsApp.

• Bagaimana Cara Menggunakan nya
Kamu Bisa Ketik #menu atau tekan list di bawah ini
`,
    footer: "Made By Fauzi", 
    title: "HolyHelper",
    mentions: [msg.sender],
    buttonText: "Click Here",
    sections,
  };
 client.sendMessage(from, listMessage, { quoted: msg });
}*/
client.sendMessage(from, { 
text: `
Hai, @${msg.sender.split("@")[0]}.

々 *PENGENALAN*
• sain bot Multidevice, sebuah robot yang dirancang dengan full bahasa JavaScript dan terhubung langsung dengan WhatsApp. Diciptakan untuk memberikan bantuan ekstra kepada pengguna WhatsApp, sain bot siap membantu Anda mengoptimalkan pengalaman penggunaan fitur WhatsApp.

• Bagaimana Cara Menggunakan nya
Kamu Bisa Ketik #menu`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": 'Fauzi Ramah Sekali', 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": "https://telegra.ph/file/1ea8b5174fdedc5a791bb.jpg",
"mediaUrl": `https://github.com/Aldi33`,
"sourceUrl": `https://whatsapp.com/channel/0029VaPNMxNK0IBsKDGFD90K`
}
}
}, {quoted: ftroli})
/*
const sections = [
    {
      title: `List MENU`,
      rows: [
        {
          title: "Claude AI",
          rowId: ".claude",
          description: "Menampilkan Fitur AI Claude-2.1",
        },
        {
          title: "Bing Image Creator",
          rowId: ".bingimg",
          description: "Menampilkan Fitur Create Image",
        },
        {
          title: "Bing Image To Image",
          rowId: ".bingimg",
          description: "Menampilkan Fitur Bing Image to Image",
        },
      ],
    }
  ];

  const listMessage = {
    text: `Hai, @${msg.sender.split("@")[0]}.\n\nSelamat datang di YanzBotz-APIs,\nSilahkan Pilih Fitur AI Yang kamu ingin kan!!`,
    footer: "YanzBotz-APIs", 
    title: "⬒ ───⟢⟨ *LIST MENU AI* ⟩⟣─── ⬒",
    mentions: [msg.sender],
    buttonText: "Click Here",
    sections,
  };
 client.sendMessage(from, listMessage, { quoted: msg });*/
}
break


     
case prefix + ["allmenu"]: {
client.sendMessage(from, { video: { url : `https://telegra.ph/file/ebe80f822ab6d6c992086.mp4`, type : "video/mp4" },gifPlayback: true,
  caption: `┏━⬢ ${b}informasi${b}
┃
┃ ⌬ ${g}name = sain bot${g}
┃ ⌬ ${g}owner = xZiyy${g}
┃ ⌬ ${g}Platform : ${os.platform()}${g}
┃ ⌬ ${g}Language : Javascript${g}
┃ ⌬ ${g}Lib : Baileys-MD${g}
┃
┗━⬢

┏━⬢ ${b}USER INFO${b}
┃
┃ ⌬ ${g}username : ${pushname}${g}
┃ ⌬ ${g}nomor: wa.me/${msg.sender.split("@")[0]}${g}
┃ ⌬ ${g}premium : ${isPremium ? '✅' : '❎'}${g}
┃
┗━⬢

々 *OWNER MENU*
• ${prefix}self
• ${prefix}public

々 *GAME MENU*
• ${prefix}tictactoe
• ${prefix}delttc

々 *DOWNLOAD MENU*
• ${prefix}Instagram link
• ${prefix}tiktok link
• ${prefix}tiktokaudio link

々 *TOOLS MENU*
• ${prefix}sticker
• ${prefix}remini (proses delay)

々 *GROUP MENU*
• ${prefix}group close/open

々 *OTHER MENU*
• ${prefix}credits

   𝐂𝐫𝐞𝐚𝐭𝐞𝐝 : 𝐱-𝐙𝐢𝐲𝐲`, contextInfo: {
 externalAdReply: {
containsAutoReply: true,
mediaType: 1,
mediaUrl: `https://youtube.com/@xZiyy?feature=share8`,
renderLargerThumbnail: true,
showAdAttribution: true,
sourceUrl: "https://instagram.com/xziyy__",
thumbnailUrl: 'https://telegra.ph/file/9e478fae7e12eb2cb296b.jpg',
title: `Hello World`,
body: `tap for fly`,},},}, { quoted: ftroli });
}
break

            case prefix + ['menu']:{
            let p = 0
// kalo gasuka tampilannya ubah ae sendiri
// ${bl} ${bd}${ic}${prefix}fiturnya ${ic}${bd}
bd = '*' // bold
mc = '```' // monospace
shp = '⬡' // apaajah
bl = '-' // bulled list = •
bq = '>' // block quote
ic = '`' // inline code
ii = '_' // italic
//fuzzy.sendbutvid(from, olv, `${global.caption}`, gipt, null, thumb, {quoted: fakestatus})
client.sendMessage(from, { video: { url : `https://telegra.ph/file/ebe80f822ab6d6c992086.mp4`, type : "video/mp4" },gifPlayback: true,
  caption: `${bd}Hii ${pushname} ${msg.sayingtime + msg.timoji}${bd}

┏━⬢ ${bd}INFORMASI${bd}
┃ ⌬ ${mc}name = saint bot${mc}
┃ ⌬ ${mc}mode = ${SETTING['banchats'] ? 'PUBLIC' : 'SELF'}${mc}
┃ ⌬ ${mc}owner = xZiyy${mc}
┃ ⌬ ${mc}Platform : ${os.platform()}${mc}
┃ ⌬ ${mc}Language : Javascript${mc}
┃ ⌬ ${mc}Lib : Baileys-MD${mc}
┗━⬢

┏━⬢ ${bd}USERS${bd}
┃ ⌬ ${mc}user = @${msg.sender.split("@")[0]}${mc}
┃ ⌬ ${mc}name = ${pushname}${mc}
┃ ⌬ ${mc}status = ${isOwner ? "OWNER":"NPC"}${mc}
┃ ⌬ ${mc}premium : ${isPremium ? '✅' : '❎'}${mc}
┗━⬢
     ${bd}「 𝐒𝐀𝐈𝐍𝐓 𝐁𝐎𝐓 」${bd}
            𝐂𝐨𝐦𝐦𝐚𝐧𝐃

 - ${bd}GENERAL FITUR${bd}
${bl} ${bd}${ic}${prefix}sticker${ic}${bd}
${bq} ${ii}${bd}ex:kirim gambar dengan caption ${prefix}sticker${bd}${ii}
${bq} ${ii}p: untuk membuat sticker${ii}
${bl} ${bd}${ic}${prefix}colong <text|text>${ic}${bd}
${bq} ${ii}${bd}reply sticker dengan cap ${prefix}take txt1|txt2${bd}${ii}
${bq} ${ii}p: untuk menyolong sticker dengan wm namamu${ii}
${bl} ${bd}${ic}${prefix}tictactoe${ic}${bd}
${bq} ${ii}${bd}ex:ketik ${prefix}tictactoe${bd}${ii}
${bq} ${ii}p: untuk memainkan game tictactoe${ii}

 - ${bd}LIST MENU${bd}
${bl} ${bd}${ic}${prefix}allmenu${ic}${bd}
${bl} ${bd}${ic}${prefix}premmenu${ic}${bd}


 𝐂𝐨𝐩𝐲 𝐑𝐢𝐠𝐡𝐭 𝐁𝐲 ${bd}${ic}Baileys${ic}${bd}
   𝐂𝐫𝐞𝐚𝐭𝐞𝐝 : 𝐱-𝐙𝐢𝐲𝐲`, contextInfo: {
 externalAdReply: {
containsAutoReply: true,
mediaType: 1,
mediaUrl: `https://youtube.com/@xZiyy?feature=share8`,
renderLargerThumbnail: true,
showAdAttribution: true,
sourceUrl: "https://instagram.com/xziyy__",
thumbnailUrl: 'https://telegra.ph/file/9e478fae7e12eb2cb296b.jpg',
title: `Hello World`,
body: `tap for fly`,},},}, { quoted: ftroli });
}
break

 case prefix + ['tesa']: {
memek = `Can U think`
              client.sendMessage(from, {text: memek, contextInfo: {
                        "externalAdReply": {
                            "mentionedJid": sender,
                            "title": `hello`,
                            "mediaType": 1,
                            "renderLargerThumbnail": true,
                            "showAdAttribution": true,
                            "jpegThumbnail": thumbb,
                            "mediaUrl": 'https://youtube.com/@xZiyy?feature=share8',
                            "thumbnail": thumbb,
                            "thumbnailUrl": 'https://telegra.ph/file/e1155ce7655250545afa1.jpg',
                            "sourceUrl": 'https://youtube.com/@xZiyy?feature=share8',
                        }
                    }}, { quoted: ftroli})
 
}
 break


case prefix + ["premmenu"]: {
client.sendMessage(from, { text: `*Menu Premium sain bot BoT*

々 *PREMIUM MENU*
• ${prefix}tf
• ${prefix}balance
• ${prefix}buylimit
• ${prefix}buyglimit
• ${prefix}topbalance
• ${prefix}buypremium
• ${prefix}cekpremium
• ${prefix}listpremium
`, 
contextInfo: { externalAdReply: {
title: "sain bot Multidevice",
sourceUrl: "https://xnxx.com",
mediaUrl: "https://github.com/Aldi33",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: "" }}}, {quoted: msg})
}
break  

case prefix + ["credits"]: {
client.sendMessage(from, { text: `       
       Thank for
       • allah swt
       • ortu
       • YanzBotz ( my team )
       • Febzabotz ( my team )
       • Aprilia ( my team )
       • Aldi Fauzi  ( my team )
       • Dika Ardnt
       • Rifza.p.p
       • IqbalzzX
    All creator bot, maaf kalau salah satu ga kesebut nama nya mohon maaf


     Base By Aypa Team
       • Febzabotz 
       • YanzBotz 
       •  Aprilia 
       • Aldi Fauzi

`, 
contextInfo: { externalAdReply: {
title: "sain bot Multidevice",
sourceUrl: "https://chat.whatsapp.com/Dnkt2ZKxc25KNBTA0W00H",
mediaUrl: "https://github.com/Aldi33",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: "" }}}, {quoted: msg})
}
break  

case prefix + ['buypremium'] : case prefix + ['buyprem'] : {
	if (isPremium) return msg.reply(`Kamu Sudah User Premium `)
         if (!args[0]) return msg.reply("*Premium PerMinute:*\n1m | 2m | 3m | 4m | 5m | 6m | 7m | 9m | 10m\n\n*Premium PerHours:*\n1h | 2h | 3h | 4h | 5h | 6h | 7h | 8h | 9h | 10h\n\n*Premium Harian:*\n1d | 2d | 3d | 4d | 5d | 6d | 7d | 8d | 9d | 10d\n\n*Premium Bulanan:*\n30d | 60d\n\n*Premium Tahun:*\n365d\n\nExample : *#buypremium 1d*\nUntuk melihat harga premium silahkan ketik *#listharga*")
          let preem = args[0]   
           if (args[0] === "1d"){
               let ane = 100000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "2d"){
               let ane = 300000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "3d"){
               let ane = 300000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                 _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "4d"){
             let ane = 400000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                 _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "5d"){
             let ane = 500000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "6d"){
             let ane = 600000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "7d"){
              let ane = 700000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "8d"){
               let ane = 800000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "9d"){
               let ane = 900000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                 _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "10d"){
             let ane = 1000000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                 _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "1m"){
             let ane = 1000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "2m"){
             let ane = 2000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "3m"){
              let ane = 3000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "4m"){
             let ane = 4000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "5m"){
             let ane = 5000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "6m"){
              let ane = 6000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "7m"){
             let ane = 7000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "8m"){
             let ane = 8000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
               client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "9m"){
              let ane = 9000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "10m"){
             let ane = 10000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "1h"){
             let ane = 41000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "2h"){
             let ane = 42000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "3h"){
              let ane = 43000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "4h"){
             let ane = 44000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "5h"){
             let ane = 45000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "6h"){
              let ane = 46000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "7h"){
             let ane = 47000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "8h"){
             let ane = 48000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "9h"){
              let ane = 49000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "10h"){
             let ane = 50000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "30d"){
             let ane = 3000000000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "60d"){
             let ane = 6000000000000000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                 var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "365d"){
             let ane = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
            } else msg.reply('Belum tersedia, tunggu next update')
          }
         break

case prefix + ['group'] : { 
     	if (!isGroup) return msg.reply('Khusus gc')
     	if (!isBotGroupAdmins) return msg.reply('Bot ga admin')
     	if (!isGroupAdmins) return msg.reply('Anda bukan admin')
     	if (q.toLowerCase() === "close") {
     		await client.groupSettingUpdate(from, 'announcement').then((res) => msg.reply(`Sukses Menutup Group`)).catch((err) => msg.reply(jsonformat(err)))
         } else if (q.toLowerCase() === "open") {
         	 await client.groupSettingUpdate(from, 'not_announcement').then((res) => msg.reply(`Sukses Membuka Group`)).catch((err) => msg.reply(jsonformat(err)))
          } else {	
          	 client.sendPoll(from, "Silahkan Dipilih, I Hope Your Happy!", [`${command.charAt(0).toUpperCase()+command.slice(1)} open`,`${command.charAt(0).toUpperCase()+command.slice(1)} close`])
          }   
      }      
      break
      
   case prefix + ['limit'] :
            case prefix + ['balance'] :
            case prefix + ['ceklimit']:
            case prefix + ['cekbalance'] : {
                var Ystatus = ownerNumber.includes(sender)
                var isPrim = Ystatus ? true : _prem.checkPremiumUser(sender, premium)
                var ggcount = isPrim ? gcounti.prem : gcounti.user
                var limitMen = `${getLimit(sender, limitCount, limit)}`
                let bel = { 
                text: `\n*Name :* ${jos}${msg.pushName}${jos}\n*Limit :* ${jos}${isOwner ? 'Infinity' : isPremium ? 'Infinity' : getLimit(sender, limitCount, limit)}/${limitCount}${jos}\n*Limit Game :* ${jos}${cekGLimit(sender, ggcount, glimit)}/${ggcount}${jos}\n*Balance :* ${jos}${belec}${jos}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`,
                contextInfo: {
                    externalAdReply: {
                        title: `${day}, ${datee} ${month} ${year}`,
                        body: `${msg.sayingtime + msg.timoji}`,
                        thumbnail: fs.readFileSync('./storage/image/balance.jpg'),
                        mediaUrl: "https://www.youtube.com/@xZiyy",
                        mentions:[sender],
                        renderLargerThumbnail: true,
                        showAdAttribution: false,
                        mediaType: 1
                    }
                }
            }
            client.sendMessage(from, bel, {
                quoted: msg
            })
            }
            break    
            
case prefix + ['tf'] :
case prefix + ['tfbalance'] :{
	if (!isGroup) return msg.reply(`\n*「 ❗ 」WARNING*\n_Fitur Hanya bisa di gunakan di dalam group`)
	if (isGame(sender, isOwner, gcount, glimit)) return msg.reply(`Limit game kamu Telah Habis, Beli limit game ketik #buyglimit`)
           if (!isPremium) return msg.reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
           if (args.length < 2) return msg.reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @0 1000`)
                 if (mention.length == 0) return msg.reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[1]) return msg.reply(`Masukkan nominal nya!`)
                 if (isNaN(args[1])) return msg.reply(`Nominal harus berupa angka!`)
                 if (args[0].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[1].includes("-")) return msg.reply(`Jangan menggunakan -`)
                 if (args[1].includes(",")) return msg.reply(`Jangan menggunakan ,`)
                 if (args[1].includes(".")) return msg.reply(`Jangan menggunakan .`)
                 if (args[1].includes("$")) return msg.reply(`Jangan menggunakan $`)
                 var anu = getBalance(sender, balance)
                 if (anu < args[1] || anu == 'undefined') return msg.reply(`「 *TRANSFER FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}🥷 DARI    : @${msg.sender.split("@")[0]}${jos}\n${jos}🥷 TUJUAN  : @${mention[0].split("@")[0]}${jos}\n${jos}🏷️ JUMLAH  : $${args[1]}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance Kamu Tidak Mencukupi Untuk Transfer_`)
                 kurangBalance(sender, parseInt(args[1]), balance)
                 addBalance(mention[0], parseInt(args[1]), balance)
               replyNtag(`「 *TRANSFER BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}🥷 DARI    : @${msg.sender.split("@")[0]}${jos}\n${jos}🥷 TUJUAN  : @${mention[0].split("@")[0]}${jos}\n${jos}🏷️ JUMLAH  : $${args[1]}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n\n_Sukses mentransfer, jika ada bug silahkan lapor ke owner_`)
            }
            gameAdd(sender, glimit)
       break    
       
     case prefix + ['buylimit']: {
                if (args.length < 1) return msg.reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $300 balance\nPajak $1 / $10`)
                if (args[0].includes('@')) return msg.reply(`Jangan menggunakan @tag, Masukan angka untuk membeli limit`)
                if (args[0].includes('-')) return msg.reply(`Jangan menggunakan -`)
                if (isNaN(args[0])) return msg.reply(`Harus berupa angka`)
                var ane = args[0] * 300
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🛍️ JUMLAH  : ${q}${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli limit_`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, args[0], limit)
                replyNtag(`「 *BUY LIMIT BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🛍️ JUMLAH  : ${args[0]}${jos}\n${jos}📍 LIMIT   : ${getLimit(sender, limitCount, limit)}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n\n_Sukses membli limit, jika ada bug silahkan lapor ke owner_`)
                }
            break      
    case prefix + ['cekprem'] :
            case prefix + ['cekpremium'] :
                if (!isPremium) return msg.reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
                var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                var premiumnya = `*Expire :* ${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                msg.reply(premiumnya)
                break

   case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                 if (args.length < 1) return msg.reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $300 balance\nPajak $1 / $10`)
                if (args[0].includes('@')) return msg.reply(`Jangan menggunakan @tag, Masukan angka untuk membeli limit`)
                if (args[0].includes('-')) return msg.reply(`Jangan menggunakan -`)
                if (isNaN(args[0])) return msg.reply(`Harus berupa angka`)
                var ane = args[0] * 300
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🛍️ JUMLAH  : ${q}${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli glimit_`)
                kurangBalance(sender, ane, balance)
                givegame(sender, args[0], glimit)
                replyNtag(`「 *BUY GLIMIT BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🛍️ JUMLAH  : ${q}${jos}\n${jos}🕹️ GLIMIT  : ${cekGLimit(sender, gcount, glimit)}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n\n_Sukses membli glimit, jika ada bug silahkan lapor ke owner_`)
                }
                break            

case prefix + ['instagram'] : case prefix + ['ig'] : {
 if (!q)return msg.reply(`Berikan Link\nExample : ${command} link`)
 if (!isUrl(q)) return msg.reply(`Link Ga Sesuai`)
 if (!q.includes('instagram.com')) return msg.reply(`Link Ga Sesuai`)
 msg.reply('_Sedang Mendownload...')
 instagram(q).then( data => {
 for ( let i of data ) {
 if (i.type === "video") {
 client.sendMessage(from, {video: {url: i.url}}, {quoted: msg })
 } else if (i.type === "image") {
 client.sendMessage(from, { caption: `nih jangan lupa follow @xZiyy__`, image: { url: i.url }}, {quoted: msg })
            }
     }
 }).catch(() => msg.reply(`ERORR. Postingan tidak Tersedia`))
 }
break

  case prefix + ['tiktok'] : case prefix + ['tt'] : {  

  if (!text) return msg.reply( `EROR!, Example : ${prefix + command} link`)

  if (!q.includes('tiktok')) return msg.reply(`Link Invalid!!`)

  replykon(`Tunggu sebentar ya kakak:>`)

  require('../lib/scraper/scraper/tiktok').Tiktok(q).then( data => {

  client.sendMessage(from, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:msg})

  })

  }


  break
    
  case prefix + ['tiktokaudio'] : case prefix + ['ttsong'] : {
  if (!text) return msg.reply( `EROR!, Example : ${prefix + command} link`)

  if (!q.includes('tiktok')) return msg.reply(`Link Invalid!!`)

  replykon(`Tunggu sebentar ya kakak:>`)
require('../lib/scraper/tiktok').Tiktok(q).then( data => {

  client.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: msg })

  })
}

  break

        

case prefix + ['s'] : case prefix + ['stiker'] : case prefix + ['setiker'] : case prefix + ['sticker'] :{
          if ((isMedia && !msg.message.videoMessage || msg.isQuotedImage) && args.length == 0) {
             client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
             var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
             var buffer = Buffer.from([])
               for await(const chunk of stream) {
                  buffer = Buffer.concat([buffer, chunk])
               }
             let buffers = await writeExifImg(buffer, { packname: SETTING['packname'], author: SETTING['author'] })
           await client.sendMessage(from, { sticker: { url: buffers } }, { quoted: msg })
          } else if ((isMedia && msg.message.videoMessage.seconds < 11 || msg.isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
               client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
                var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
                var buffer = Buffer.from([])
                  for await(const chunk of stream) {
                     buffer = Buffer.concat([buffer, chunk])
                  }
             let buffers = await writeExifVid(buffer, { packname: SETTING['packname'], author: SETTING['author'] })
           await client.sendMessage(from, { sticker: { url: buffers } }, { quoted: msg })
           } else { msg.reply(`Reply gambar/video/sticker dengan caption ${prefix + 'sticker'} \n*(MAKSIMAL 10 DETIK!)*`) }
         }
       break
     
           case prefix + ['hd']: case prefix + ['remini']: {
		  client.sendMessage(from, { react: { text: "⏳", key: msg.key }})
          replykon('tunggu sebentar agak delay ya!, kalo gak kekirim² berarti eror')
          if (!/image/.test(mime)) return msg.reply(`Send/Reply Photos With Captions ${prefix + command}`)
        	const { remini } = require('../lib/scraper/remini')
         	let media = await quoted.download()
         	let proses = await remini(media, "enhance")
        	client.sendMessage(from, { image: proses, caption: 'success'}, { quoted: ftroli})
         	}
         		break       

case prefix + ['toimg']: {
if (!/webp/.test(mime)) return replykon(`balas stiker dengan caption *${prefix+command}*`)
let media = await client.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return replykon(err)
let buffer = fs.readFileSync(ran)
client.sendMessage(frim, { image: buffer, jpegThumbnail: defaultpp }, { quoted: msg })
fs.unlinkSync(ran)
})
}
break
case prefix + ['take']: case prefix + ['stickerwm']: case prefix + ['colongsticker']:{
const cpes = args.join(" ")
const tesa = cpes.split("|")[0];
const tesq = cpes.split("|")[1];
const text = `${cpes}`
 if (!quoted) return replykon(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await client.sendImageAsSticker(from, media, msg, { packname: `${tesa}\n\n©`, author: `${tesq}\n\nmake sticker use sain bot` })
await fs.unlinkSync(encmedia)
}
}
break

case prefix + ['chat'] :
if(!isOwner) return
if (!args.join(" ")) return msg.reply('invalid use .chat 62×××|text')
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
const lolh = `${pesny}`
client.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[msg.sender]}, {quoted: nay1 })
await msg.reply("_Success dikirim_")
break;

case prefix + ['public'] :{
         if(!isOwner) return
           SETTING['banchats'] = false
          msg.reply(keywords[0]['mode'][0])
         }
      break

case prefix + ['self'] :{
         if(!isOwner) return
             SETTING['banchats'] = true
          msg.reply(keywords[0]['mode'][1])
        }
      break
case prefix + ['rangkum'] : case prefix + ['ringkas'] : {
        if (!q) return msg.reply('mau tanya apa')
         try {
         let rangkum = await fetchJson("https://api.yanzbotz.my.id/api/ai/rangkum?query=" + q)
          client.sendMessage(from, {text: rangkum.result }, { quoted: msg });
          } catch (e) {
          	msg.reply("Eror")
           }
        }
        break 
        
case prefix + ['simi'] : case prefix + ['simisimi'] : {
        if (!q) return msg.reply('mau tanya apa')
         try {
         let SimSimi = await fetchJson("https://api.yanzbotz.my.id/api/ai/simi?query=woy+kontol" + q)
          client.sendMessage(from, {text: SimSimi.result }, { quoted: msg });
          } catch (e) {
          	msg.reply("Eror")
           }
        }
        break                 

case prefix + ['gptvoice'] : case prefix + ['aivn'] : {
        if (!q) return msg.reply('mau tanya apa')
         try {
         let tes = await getBuffer("https://api.akane.my.id/api/ai/gptvoice?query=" + q)
          client.sendMessage(from, { audio: tes, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
          } catch (e) {
          	msg.reply("Error!")
           }
        }
        break      


case prefix + ['ttc'] : case prefix + ['tt'] : case prefix + ['tictactoe'] :{
 let TicTacToe = require("../lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(msg.sender))) return msg.reply('Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
msg.reply('Partner ditemukan! Are You ready?')
room.o = from
room.game.playerO = msg.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}
kirim jawaban contoh: 1

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await okta.sendText(room.x, str, m, { mentions: parseMention(str) } )
await client.sendText(room.o, str, msg, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(msg.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
msg.reply('Menunggu partner, untuk memulai game' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break

case prefix + ['delttc'] : case prefix + ['delttt']: {
 let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(msg.sender))
if (!roomnya) return msg.reply(`Kamu sedang tidak berada di room tictactoe !`)
delete this.game[roomnya.id]
msg.reply(`Berhasil delete session room tictactoe !`)
}
break

case prefix + ['tourl']: {
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/scraper/uploader.js')
let media = await client.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
msg.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
msg.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break

// sw

case prefix + ['pengguna']:  {
if (!isOwner) return msg.reply('*Khusus Premium*')
if (!args[0]) return msg.reply(`*Contoh : ${command} add 62345678910*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (msg.quoted) {
orgnye = msg.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return msg.reply('*Pengguna Ini telah Di Ban*')
banned.push(orgnye)
msg.reply(`Succes ban Pengguna Ini`)
} else if (args[0] === "del") {
if (!isBane) return msg.reply('*Pengguna Ini Telah Di hapus Dari Ban*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
msg.reply(`*Berhasil Menghapus Pengguna yang Di Ban*`)
} else {
msg.reply("Error")
}
}
break

case prefix + ['vnsw']:{
if (!isOwner) return msg.reply('*Khusus Premium*')
if (!text) return m.reply(`masukin text nya yang ada di database listvn`)
var huy = fs.readFileSync(`./storage/sound/${text}.mp3`)
client.sendMessage('status@broadcast', {audio: huy, mimetype: 'audio/mp4', ptt:true},{
backgroundColor: '#FF000000',
statusJidList: pengguna
});
}
msg.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break

case prefix + ['swin']:{
if (!isOwner) return msg.reply('*Khusus Premium*')
if (!text) return m.reply(`masukin text nya`)
client.sendMessage('status@broadcast', {
text: `${text}`
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: pengguna
});
}
msg.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break

    //=============================0==========================// 
                                           /* { akhir case } */  
    //=======================================================//
  
  default:
 
   //=======================================================//
                      /* { includes } */   
   //=======================================================//
        //problem 😡
        salam = ['Assa', 'assa'] 
        for (let sam of salam){
        if (chatmessage.includes(sam)) {	
        msg.reply('Walaikumsalam Warahmatullahi wabarakatuh')
        }}
texttox =`
apaa Luuuuu
hencet
K A N J U TTTTTTTTTTTTTT
bocah toxic
biadab
kerbau
sapi
Belalang
Badak
Bangau
Banteng
Beruk
Bekicot
Belut
Beruang
Bison
Buaya
Bunglon
Burung
Cicak
Cacing
Capung
Dinosaurus
Domba
Dugong
Dara
Dodo
Dingo
`
        toxica = ['anjing', , 'babi', 'memek', 'kontol']
        peq = ['tai', 'anj']
        if (peq.includes(chatmessage)) {
        msg.reply(texttox)
        }
        for (let tow of toxica){
        if (chatmessage.includes(tow)) {	
        msg.reply(texttox)
        }}

        wana = ['aldi', 'zi', 'iz', 'Fauzi', 'ziyy'] 
        for (let sawa of wana){
        if (chatmessage.includes(sawa)) {	
        //client.sendMessage(from, {audio: {url: `${astaga}`},ptt: true,mimetype: 'audio/mpeg'},{quoted:m})
        msg.reply(' Kenapa?, Tinggalkan Pesan aja, Owner ku Lagi Sibuk ayy, Tunggu aja Nnati juga dijawab')
        }}
		aw = ['tes']
        for (let bo of aw){
        if (chatmessage === bo){
        replykon(' ada yang bisa saya bantu? silahkan ketik #menu')
        }}
        // jangan di ubah nanti spam 😂
        pe = ['p']
        if (pe.includes(chatmessage)) {
        msg.reply(`Pu Pa Pe Pe Biasakan lah Mengucapkan Salam`)
        }
        taq = ['@6283804078729']
        if (chatmessage.includes(taq)) {	
        msg.reply('jangan tag dia bang lagi sibuk')
        }
        taga = ['@6285697725326']
        if (chatmessage.includes(taga)) {	
        msg.reply('apaaan co tag tag, so asik lu')
        }					





 }
}//end module exports
let file = require.resolve(__filename)
 fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.red(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})

//
