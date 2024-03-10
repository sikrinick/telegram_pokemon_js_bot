// 1. Створимо простого бота, який просто відповідає привіт

import { Telegraf } from "telegraf"
import { token, urlAddress } from "./configuration.js"

const bot = new Telegraf(
    token,
    { telegram: { apiRoot: urlAddress } }
)

function replyHello(ctx) {
    ctx.reply("Привіт!")
}

bot.on("message", replyHello);

bot.launch();
