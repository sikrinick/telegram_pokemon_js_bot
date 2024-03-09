## Telegram Bot. Guess Pokemon. Example

## System Requirements
- Node 21
- NPM

## Recommended IDE
- VS Code

## Installation

### Dependencies
```
npm install
```

### Environment Variables
Bot needs configuration file, which contains Telegram token and URL to Telegram Bot API to run.
Token can be obtained via [BotFather](https://t.me/botfather).

[More here](https://core.telegram.org/bots/features#creating-a-new-bot)

Next, one has to create file `_конфігурація.м` with next content.

```
// Тут треба вписати токен, який отримали через [BotFather](https://t.me/botfather)
const token = "7052***228:AAGxjwFrqn5807Ut****JePZ1lC3R9bGkCc"

// Якщо з цією адресою не вдасться — запитайте мене
const urlAddress = "https://api.telegram.org"

export { token, urlAddress }
```


## Run
```
npm run start
```