"use strict";

const fs = require('fs')
const chalk = require('chalk')
global.ownerNumber = ["6283804078729"]
module.exports = {
  sesionName: "session",
  banchats: false,
  autoreadsw: false,
  anticall: true,
  banned: {
   maroko: true,
   india: false,
  },
  botfullname: "SA-x MD",
  botname: "SA-x MD",
  ownername: "ALDI FAUZI",
  author: `'x'\n'Z'\n'i'\n'y'`,
  packname: `"SAIN"\n"BOT whatsapp Multi Device"\n"owner": "wa.me/6283804078729"\n"ig": "https://instagram.com/xziyy__"`,
  gcount: { "prem": 30, "user": 20 },
  limitCount: 20,
  modul: {
    qrcode: require('qrcode'),  	
    QrCode: require('qrcode-reader'),  
    bochil: require("@bochilteam/scraper"),
    baileys: require("@whiskeysockets/baileys"),
    boom: require('@hapi/boom'),
    chalk: require('chalk'),
    ikyy: require('ikyy'),
    child: require('child_process'),
    fs: require('fs'),
    pino: require("pino"),
    path: require("path"),
    phonenumber: require('awesome-phonenumber'),
    time: require("moment-timezone"),
    jimp: require('jimp'),
    speed: require('performance-now'),
    util: require("util"),
    https: require('https'),
    sizeFormater: require('human-readable'),
    axios: require('axios'),
    ytsr: require('yt-search'),           
    qrcode: require('qrcode'), 
    qrcodereader: require('qrcode-reader'),
    request: require('request'),
    readline: require("readline"),
    nodecache: require("node-cache"),
    premium: require('parse-ms'),
   },
  file: {
    load: './connect/starting',
    color: './lib/color',
    move: './lib/simple.js', 
    yanz: './lib/myfunc',
    funct: './lib/function',
    exif: './lib/exif',
    thumb: './storage/image/thumb.jpg',
    list: './lib/list',
    scrapp: './lib/scraper/scraper',
    prem: './lib/premium',
    limit: './lib/limit',
  },

}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellow(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})
 
 //end
