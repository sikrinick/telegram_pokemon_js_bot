// 6. Зробимо іншу гру, де треба вгадати імʼя покемона по фотці

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

const gameSessions = {}

function replyWithGame(ctx) {
    const userInput = ctx.message.text    
    const chatId = ctx.chat.id

    const correctAnswer = gameSessions[chatId]

    if (userInput == correctAnswer) {
        ctx.reply("Так, вгадав!")
    } else if (correctAnswer == undefined) {
        ctx.reply("Привіт!")
    } else {
        ctx.reply("Ні, це " + correctAnswer)
    }

    const randomIdx = getRandomInt(0, knownPokemons.length)
    const pokemon = knownPokemons[randomIdx]
    gameSessions[chatId] = pokemon.name

    ctx.replyWithPhoto(
        pokemon.photo,
        {
            caption: "Що це за покемон?",
        }
    )
}

bot.on("message", replyWithGame);

bot.launch();
