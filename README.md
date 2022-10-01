# parse-from-discord-to-telegram

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ git clone https://github.com/petrashin/parse_discord_and_open_order.git # or clone your own fork
$ cd parse_discord_and_open_order
$ npm install
```
Create .env file as env.example where:
- auth_token is your [discord auth token](https://www.androidauthority.com/get-discord-token-3149920/)
- channel_id is channel id from which you will forward the message
- bot_token is your telegram bot token that you can get [here](https://t.me/BotFather)
- chat_id is your channel id with -100 prefix [info](https://stackoverflow.com/a/56546442)

```sh
$ node app.js
```
