// 2. Тепер замість привіт ми будемо відповідати фоткою

import { Telegraf } from "telegraf"
import { token, urlAddress } from "./configuration.js"

const bot = new Telegraf(
    token,
    { telegram: { apiRoot: urlAddress } }
)

function replyImage(ctx) {
    ctx.replyWithPhoto("https://w7.pngwing.com/pngs/585/436/png-transparent-pokemon-pikachu-illustration-icon-pikachu-background-mammal-food-vertebrate-thumbnail.png")
}

bot.on("message", replyImage);

bot.launch();
