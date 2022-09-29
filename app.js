import selfcore from "selfcore";
import dotenv from 'dotenv';

dotenv.config()

var token = process.env.token
var channel_id = process.env.channel_id

const gateway = new selfcore.Gateway(token)

gateway.on("message", m => {
    if(m.channel_id === channel_id) {
        let content = m.content ? m.content : { emdebs: [m.embeds[0]] };
        // TODO: starting .py script that will parse content info and open order
        console.log(content)
    }
})