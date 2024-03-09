## Телеграм Бот. Гра "Вгадай Покемона". Приклад

## Системні залежності
- Node 21
- NPM

## Рекомендоване середовище
- VS Code

## Встановлення

### Залежності
```
npm install
```

### Змінні середовища
Для запуску бота потрібен файл конфігурації, в якому будуть вказані УРЛ адреса до серверів Телеграм і токен, який можна отримати через [BotFather](https://t.me/botfather).  

[Тут можна подивитись як створити токен.](https://sendpulse.ua/knowledge-base/chatbot/telegram/create-telegram-chatbot)

Далі треба створити файл `configuration.js` з наступним змістом

```
// Тут треба вписати токен, який отримали через [BotFather](https://t.me/botfather)
const token = "7052***228:AAGxjwFrqn5807Ut****JePZ1lC3R9bGkCc"

// Якщо з цією адресою не вдасться — запитайте мене
const urlAddress = "https://api.telegram.org"

export { token, urlAddress }
```

## Запуск
```
npm run start
```