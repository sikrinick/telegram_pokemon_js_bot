// 3. А тепер — фоткою з текстом

import { Telegraf } from "telegraf"
import { token, urlAddress } from "./configuration.js"

const bot = new Telegraf(
    token,
    { telegram: { apiRoot: urlAddress } }
)

function replyWithPikachu(ctx) {
    ctx.replyWithPhoto(
        "https://w7.pngwing.com/pngs/585/436/png-transparent-pokemon-pikachu-illustration-icon-pikachu-background-mammal-food-vertebrate-thumbnail.png",
        {
            caption: "Пікачу"
        }
    )
}

bot.on("message", replyWithPikachu);

bot.launch();
