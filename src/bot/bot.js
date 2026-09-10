import express from 'express';
import TelegramBot from 'node-telegram-bot-api';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Telegram Bot token...
const bot = new TelegramBot('TOKEN', { polling: false });

app.post('/sendmessage', async (req, res) => {
  const { chatId, text } = req.body;

  try {
    await bot.sendMessage(chatId, text);
    res.send({ success: true });
  } catch (err) {
    res.status(500).send({ error: 'Failed to send message', details: err });
  }
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
