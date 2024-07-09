const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254748994363";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_58_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5LFxuICAgICAgICA5NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDg0LFxuICAgICAgICAzLFxuICAgICAgICA3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICA2MixcbiAgICAgICAgNDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk4LFxuICAgICAgICA5MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMjMxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxODIsXG4gICAgICAgIDk2LFxuICAgICAgICA1OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMyxcbiAgICAgICAgOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDKzA4a1lkdXczRUgvT01IdlRqTSszLzN1V3Rnb3JwRkZTd0JuWGNza1JrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc0ODk5NDM2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEM1NDIyMjUyN0Q3NzVDQzcyRDcyNUI1QjBBQjc4NDdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDY1MTEyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNsek9CTDI4UV9pSjJkb3RHWXRTWWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGJkYTcwNzEtZDBkZC00MWRmLWFiMWYtMDRiZDNlMTAzNjRiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgMzQsXG4gICAgICAxNTYsXG4gICAgICA4MCxcbiAgICAgIDE3MyxcbiAgICAgIDEyNixcbiAgICAgIDY5LFxuICAgICAgMTcsXG4gICAgICAxODIsXG4gICAgICAxMzEsXG4gICAgICAxNDQsXG4gICAgICAzOCxcbiAgICAgIDAsXG4gICAgICAyMjksXG4gICAgICAyMzgsXG4gICAgICA4MixcbiAgICAgIDEzMyxcbiAgICAgIDIzLFxuICAgICAgNjAsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NCxcbiAgICAgIDE2MSxcbiAgICAgIDQzLFxuICAgICAgODcsXG4gICAgICA0NCxcbiAgICAgIDEzMSxcbiAgICAgIDY1LFxuICAgICAgMzgsXG4gICAgICA1OCxcbiAgICAgIDExMSxcbiAgICAgIDIxNSxcbiAgICAgIDQ5LFxuICAgICAgMjI5LFxuICAgICAgNjUsXG4gICAgICAxOTQsXG4gICAgICAxMDUsXG4gICAgICAxMDcsXG4gICAgICAxNDAsXG4gICAgICAxMTQsXG4gICAgICAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZWU1ozQlBOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDg5OTQzNjM6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCIuWkVFSkFZIHRoZSBHUkFQSEVSXCIsXG4gICAgXCJsaWRcIjogXCIyMTYwODg3ODA1MjE0OTQ6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0N4amNzQkVOSHRzTFFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpTWlWbG0zUTlkby9qOE1ya1RSSjAxbE43WTlEYWIyNlh1TFlENXliZVJvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZ6Z1B0dWNuZmNpd1F0WXcvRVJFYWNzR0VVczc2NC9NVU85T0ozT0Nnb3FRVTNqcS9ZV0NpUVZKd0E2VGFwZm83ODNtSklmczU1dERJZTc2SWFVK0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlZTVpqczZTSlRKbjBJejVTYkE4dmRaSTV3aEY0bDFkdnE4ZFVrVThJV1FaU0I1SmtWK0dTNWVtc3JoUWdkVXcwYjU1OU1hT3VNS00zRnI2bFNmZkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0ODk5NDM2MzozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDY1MTA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDFNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEMU0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5RElHMm1QbWhqSmZEK3F3SkJldmVPNUhKMmFTa2U5Y3lEbis1V1pTQUNZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQyNTk0MTE1MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4MjE1MTY2ODc1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝕾𝖕𝖔𝖔𝖐𝖞 𝖒𝖉👻",
  ownername:process.env.OWNER_NAME|| "FAKE IDENTITY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
