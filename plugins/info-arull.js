let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : Adi
║│➸ ```UMUR``` : 17tahun
║│➸ ```ASAL``` : MALANG JAWA TIMUR
║│➸ ```OFFICIAL GRUP``` :
https://chat.whatsapp.com/CCIlN7YFOF72twArqjHUFk
║│➸ ```ISTAGRAM``` : http://instagram.com/adix.yr
║│➸ ```WHATSAPP``` : http://wa.me/6285707042602?text:hai bang
╰────────❉
`.trim(), m)
}

handler.help = ['infoarull']
handler.tags = ['main', 'utama']
handler.command = /^(infoarull|inforozi)$/i

handler.exp = 150

module.exports = handler
