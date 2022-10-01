import selfcore from "selfcore";
import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';

dotenv.config()

var auth_token = process.env.auth_token
var bot_token = process.env.bot_token
var channel_id = process.env.channel_id
var chat_id = process.env.chat_id

const gateway = new selfcore.Gateway(auth_token)
const bot = new TelegramBot(bot_token)

gateway.on("message", m => {
    if(m.channel_id === channel_id) {
        let content = m.content ? m.content : { emdebs: [m.embeds[0]] };
        console.log(content)
        bot.sendMessage(chat_id, content)
    }
})