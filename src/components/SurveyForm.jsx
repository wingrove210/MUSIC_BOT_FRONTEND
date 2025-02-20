import { useState } from 'react';

const TelegramWebApp = window.Telegram.WebApp;

export default function SurveyForm() {
  const [formData, setFormData] = useState({
    name: '',
    recipient: '',
    relationship: '',
    timeApart: '',
    lastDayTogether: '',
    firstWords: '',
    hardestPart: '',
    stayingConnected: '',
    cherishedMoments: '',
    supportiveWords: '',
    sourceOfStrength: '',
    specialThing: '',
    cherishedThings: '',
    describeLovedOnes: '',
    unspokenWords: '',
    sharedDream: '',
    reunionMoment: '',
    emotionalTone: '',
    musicalStyle: '',
    essentialWords: '',
    desiredEmotions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 📌 Отправляем данные на сервер (если нужно)
      await fetch('http://127.0.0.1:8000/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      // 📌 Отправляем данные боту
      const botToken = 'ВАШ_ТОКЕН';
      const chatId = TelegramWebApp.initDataUnsafe.user?.id; // Получаем ID пользователя
      if (!chatId) {
        alert("Ошибка: Не удалось получить ваш Telegram ID.");
        return;
      }

      const message = `
📋 *Новая анкета*  
👤 *Имя:* ${formData.name}  
🎵 *Кому песня:* ${formData.recipient}  
❤️ *Кто они для вас:* ${formData.relationship}  
⏳ *Давно в разлуке:* ${formData.timeApart}  
📅 *Последний день вместе:* ${formData.lastDayTogether}  
💬 *Первые слова:* ${formData.firstWords}  
😢 *Сложности в разлуке:* ${formData.hardestPart}  
📞 *Как поддерживаете связь:* ${formData.stayingConnected}  
✨ *Дорогие моменты:* ${formData.cherishedMoments}  
📝 *Слова поддержки:* ${formData.supportiveWords}  
💪 *Источник сил:* ${formData.sourceOfStrength}  
🎁 *Важный предмет:* ${formData.specialThing}  
🏡 *Дорогие мелочи:* ${formData.cherishedThings}  
🫂 *Близкие в 3 словах:* ${formData.describeLovedOnes}  
💖 *Неуспетые слова:* ${formData.unspokenWords}  
🌍 *Общая мечта:* ${formData.sharedDream}  
🎉 *Встреча после разлуки:* ${formData.reunionMoment}  
🎼 *Эмоции в песне:* ${formData.emotionalTone}  
🎵 *Музыкальный стиль:* ${formData.musicalStyle}  
🗣 *Важные слова:* ${formData.essentialWords}  
😊 *Какие эмоции вызвать:* ${formData.desiredEmotions}  
      `;

      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown"
        })
      });

      const result = await response.json();
      if (result.ok) {
        alert("✅ Данные успешно отправлены!");
        TelegramWebApp.close(); // Закрываем WebApp
      } else {
        alert("❌ Ошибка при отправке данных.");
      }

    } catch (error) {
      console.error("Ошибка:", error);
      alert("❌ Не удалось отправить данные.");
    }
  };

  return (
    <form className="survey-form" onSubmit={handleSubmit}>
      <h2>🔹 Личность и связь с близкими</h2>
      <label>1. Как вас зовут?</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />

      <label>2. Кому вы отправляете эту песню?</label>
      <input type="text" name="recipient" value={formData.recipient} onChange={handleChange} />

      <label>Расскажите, кто эти люди для вас:</label>
      <textarea name="relationship" value={formData.relationship} onChange={handleChange}></textarea>

      <label>3. Как долго вы в разлуке?</label>
      <input type="text" name="timeApart" value={formData.timeApart} onChange={handleChange} />

      <button type="submit">Отправить</button>
    </form>
  );
}
