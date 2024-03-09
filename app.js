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

// ПЛАН - поєднати зі списком відомих покемонів
const randomPokemonNames = [
  "Пікачу", "Іві", "Чармандер", "Чармелеон", "Чарізард", "Джолтеон", "Запдос", "Молтрес", "Артікуно", "Флареон", "Бульбазавр", "Івізавр",
  "Венузавр", "Відл", "Какуна", "Бідріл", "Катерпі", "Метапод", "Баттерфрі", "Мяут", "Меджікарп", "Вапореон"
]

const currentGameSessions = {}

function random(from, to) {
    return from + Math.floor(Math.random() * to)
}

bot.on("message", async (ctx) => {
    const textMessage = ctx.message.text
    const chatId = ctx.chat.id

    const correctAnswer = currentGameSessions[chatId]

    if (correctAnswer === undefined) {
        await ctx.reply("Привіт!")
    } else if (correctAnswer == textMessage) {
        await ctx.reply("Так, вгадав!")
    } else { 
        await ctx.reply("Ні, це " + correctAnswer)
    }

    const pokemon = knownPokemons[random(0, knownPokemons.length)]
    const randomName1 = randomPokemonNames[random(0, randomPokemonNames.length)]
    const randomName2 = randomPokemonNames[random(0, randomPokemonNames.length)]
    const randomName3 = randomPokemonNames[random(0, randomPokemonNames.length)]

    currentGameSessions[chatId] = pokemon.name

    const buttons = [
        pokemon.name,
        randomName1,
        randomName2, 
        randomName3
    ].sort((x) => random(0,2) - 1);

    await ctx.sendPhoto(
        pokemon.photo,
        {
            caption: "Що це за покемон?",
            reply_markup: JSON.stringify({
                keyboard: [
                    [{text: buttons[0]}, {text: buttons[1]}],
                    [{text: buttons[2]}, {text: buttons[3]}]
                ]
            })
        }
    )
});

bot.launch();
