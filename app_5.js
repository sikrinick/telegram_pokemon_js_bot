// 5. Зараз спробуємо вибрати випадково покемона зі списку покемонів

import { Telegraf } from "telegraf"
import { token, urlAddress } from "./configuration.js"

const bot = new Telegraf(
    token,
    { telegram: { apiRoot: urlAddress } }
)

const knownPokemons = [
    { name: "Пікачу", photo: "https://w7.pngwing.com/pngs/585/436/png-transparent-pokemon-pikachu-illustration-icon-pikachu-background-mammal-food-vertebrate-thumbnail.png" },
    { name: "Мяут", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIff3mByoGvZTxp6Ot3p5mQLqOheL-oo-oQTerq2d4Ww&s" },
    { name: "Меджікарп", photo: "https://w7.pngwing.com/pngs/17/569/png-transparent-pokemon-magikarp-jump-color-gyarados-pokemon-leaf-orange-vertebrate-thumbnail.png" },
    { name: "Іві", photo: "https://w7.pngwing.com/pngs/288/96/png-transparent-pokemon-let-s-go-pikachu-and-let-s-go-eevee-pokemon-go-pikachu-thumbnail.png" }
]

function getRandomInt(from, to) {
    return from + Math.floor(Math.random() * (to - from));
}

function replyWithRandomPokemon(ctx) {
    const randomIdx = getRandomInt(0, knownPokemons.length)
    const pokemon = knownPokemons[randomIdx]
    ctx.replyWithPhoto(
        pokemon.photo,
        {
            caption: pokemon.name,
        }
    )
}

bot.on("message", replyWithRandomPokemon);

bot.launch();
