
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['5321962158646077'] //ur owner number
global.ownername = "卂ㄚㄖㄩ乃 乇ㄥ卄卂尺丨ㄒ💫" //ur owner name
global.ytname = "ayoub_____felling" //ur yt chanel name
global.socialm = "instagram:ayoub_____felling" //ur github or insta name
global.location = "Africa, MOROCCO, BENI MELLAL💙" //ur location
//bot bomdy 
global.ownernomer = "5321962158646077" //ur number
global.premium = ['5321962158646077'] //ur premium number
global.botname = '❤️卂ㄚㄖㄩ乃 乇ㄥ卄卂尺丨ㄒ💫❤️' //ur bot name
global.linkz = "https://youtube.com/@felling1000" //your theme url which will be displayed on whatsapp
global.websitex = "https://linksharing.samsungcloud.com/xnevgkvew0eU" //ur website to be displayed
global.botscript = 'https://youtube.com/@felling1000' //script link
global.themeemoji = "♥" //ur theme emoji
global.packname = "⍣ٱلَثًےـقَےـةّ⍣" //ur sticker watermark packname
global.author = "⍣0621710767⍣" //ur sticker watermark author
global.wm = "❤️AYOUB ᗷOT❤️." //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success:'تم 💚👍',
    admin: '『❤! 』',
    botAdmin: '『 ارفع البوت ادمن الاول 』',
    premime: '『 ميزات خاصة متميزة إذا كنت ترغب في التسجيل  』',
    owner: '『 هذه الميزة للمطور فقط! 』',
    group: '『 هذه الميزة للمجموعات فقط! 』',
    private: '『 هذه الميزة في الخاص فقط! 』',
    bot: '『 هذه الميزة خاصة بالبوت! 』',
    wait: '『 إنتظر قليلا ... 』',
    linkm: '『 أين الرابط? 』',
    endLimit: 'انتهت صلاحية الحد اليومي الخاص بك ، وسيتم إعادة تعيين الحد كل 12 ساعة',
    nsfw: 'لم يتم تنشيط ميزة nsfw ، يرجى الاتصال بالمسؤول للتفعيل',
}

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
