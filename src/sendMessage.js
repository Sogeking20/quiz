const TELEGRAM_BOT_TOKEN = '';
const TELEGRAM_CHAT_ID = '';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

export default async function sendMessage(event,message) {
    event.preventDefault();

    const form = event.target
    console.log(form)

    };