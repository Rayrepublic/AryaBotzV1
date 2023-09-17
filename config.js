import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6283199346086', 'Ray', true],
  ['6283127962809'], 
  ['6281934502364'] 
] //Numeros de owner 

global.mods = ['6283199346086'] 
global.prems = ['6283199346086', '6283127962809', '6281934502364']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY' //--- 100 de límite diario --- Regístrese en https://api-fgmods.ddns.net/
}

// Sticker WM
global.packname = 'AryaBot' 
global.author = 'RayXD' 
global.fgig = 'Instagram\nhttps://www.instagram.com/ray.anakbaek_' 
global.dygp = '-'
global.fgsc = 'https://github.com/Rayrepublic' 
global.fgyt = '-'
global.fgpyp = '-'
global.fglog = 'https://telegra.ph/file/4df2b5a15c344b05aacb3.jpg' 

global.wait = '*⌛ Mohon Tunggu Sebentar'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
