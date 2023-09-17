
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONACION*
Berapapun donasi kalian akan sangat berarti buat saya :) 
❏ DANA
0831-9934-6086
❏ GOPAY
0831-9934-6086
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['donasi', 'donate', 'donar'] 

export default handler
