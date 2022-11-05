# parse-from-discord-to-telegram

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ git clone https://github.com/petrashin/parse-from-discord-to-telegram.git # or clone your own fork
$ cd parse-from-discord-to-telegram
$ npm install
```
Create .env file as env.example where:
- auth_token is your [discord auth token](https://www.androidauthority.com/get-discord-token-3149920/)
- channel_id is discord channel id from which you will forward the messages
- hashtag is identifier of discord channel
- bot_token is your telegram bot token that you can get [here](https://t.me/BotFather)
- chat_id is your channel id [info](https://stackoverflow.com/a/56546442)

Add created telegram bot to your channel.

```sh
$ node app.js
```
