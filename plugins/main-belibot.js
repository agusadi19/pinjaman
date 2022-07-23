let handler = async (m, { conn }) => {
const ftroli = {
    key : {
    remoteJid: '6285707042602-1614953337@g.us',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: 'LiST PRICE JOIN GROUP', 
    orderTitle: `Geeru`,
    thumbnail: 'https://telegra.ph/file/a2096b7d55c7343ff2734.jpg', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
	conn.reply(m.chat, price1, ftroli)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)?$/i

module.exports = handler