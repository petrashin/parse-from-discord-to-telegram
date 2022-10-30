import selfcore from "selfcore";
import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';

dotenv.config()

var auth_token = process.env.auth_token
var bot_token = process.env.bot_token
var channel_id_1 = process.env.channel_id_1
var channel_id_2 = process.env.channel_id_2
var hashtag_1 = process.env.hashtag_1
var hashtag_2 = process.env.hashtag_2
var chat_id = process.env.chat_id

const gateway = new selfcore.Gateway(auth_token)
const bot = new TelegramBot(bot_token)

gateway.on("message", m => {
    if(m.channel_id === channel_id_1) {
        let content = m.content ? m.content : { emdebs: [m.embeds[0]] };
        bot.sendMessage('-100' + chat_id, `#${hashtag_1}\n${content}`)
    }
    else if (m.channel_id === channel_id_2) {
        let content = m.content ? m.content : { emdebs: [m.embeds[0]] };
        bot.sendMessage('-100' + chat_id, `#${hashtag_2}\n${content}`)
    }
})