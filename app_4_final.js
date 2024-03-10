// 4. Спробуємо додати гру — повертати фотку на текст

import { Telegraf } from "telegraf"
import { token, urlAddress } from "./configuration.js"

const bot = new Telegraf(
    token,
    { telegram: { apiRoot: urlAddress } }
)

const knownPokemons = {
    "Пікачу": "https://w7.pngwing.com/pngs/585/436/png-transparent-pokemon-pikachu-illustration-icon-pikachu-background-mammal-food-vertebrate-thumbnail.png",
    "Мяут": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIff3mByoGvZTxp6Ot3p5mQLqOheL-oo-oQTerq2d4Ww&s",
    "Меджікарп": "https://w7.pngwing.com/pngs/17/569/png-transparent-pokemon-magikarp-jump-color-gyarados-pokemon-leaf-orange-vertebrate-thumbnail.png",
    "Іві": "https://w7.pngwing.com/pngs/288/96/png-transparent-pokemon-let-s-go-pikachu-and-let-s-go-eevee-pokemon-go-pikachu-thumbnail.png"
}

function replyWithPokemonPhoto(ctx) {
    const pokemonName = ctx.message.text
    const pokemonPhoto = knownPokemons[pokemonName]
    
    if (pokemonPhoto) {
        ctx.replyWithPhoto(
            pokemonPhoto,
            {
                caption: pokemonName,
            }
        )
    } else {
        ctx.reply("Немає такого покемону")
    }
}

bot.on("message", replyWithPokemonPhoto);

bot.launch();
