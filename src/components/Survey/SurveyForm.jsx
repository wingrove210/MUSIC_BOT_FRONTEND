import { useState } from 'react';
import './SurveyForm.css';
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
      const botToken = '8151650888:AAFSJqYDHUtrii-7WS8sBDgi0MGtmYosg9k';
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
          parse_mode: "Markdown",
          reply_markup: {
            inline_keyboard: [
              [{ text: "Оплатить 51000", callback_data: "pay_51000" }]
            ]
          }
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

      <label>4. Как вы вспоминаете последний день, проведённый вместе перед разлукой?</label>
      <textarea name="lastDayTogether" value={formData.lastDayTogether} onChange={handleChange}></textarea>

      <label>5. Если бы сейчас вы могли обнять своих близких, что бы сказали им в первую очередь?</label>
      <textarea name="firstWords" value={formData.firstWords} onChange={handleChange}></textarea>

      <h2>🔹 Чувства, разлука и поддержка</h2>
      <label>6. Что для вас самое сложное в разлуке с домом и близкими?</label>
      <textarea name="hardestPart" value={formData.hardestPart} onChange={handleChange}></textarea>

      <label>7. Как вы сохраняете связь с теми, кого любите, несмотря на расстояние?</label>
      <textarea name="stayingConnected" value={formData.stayingConnected} onChange={handleChange}></textarea>

      <label>8. Какие совместные моменты с близкими согревают ваше сердце в трудные минуты?</label>
      <textarea name="cherishedMoments" value={formData.cherishedMoments} onChange={handleChange}></textarea>

      <label>9. Есть ли слова или фразы, сказанные вашими близкими, которые до сих пор поддерживают вас?</label>
      <textarea name="supportiveWords" value={formData.supportiveWords} onChange={handleChange}></textarea>

      <label>10. Что даёт вам силы и надежду, пока вы ждёте встречи с домом?</label>
      <textarea name="sourceOfStrength" value={formData.sourceOfStrength} onChange={handleChange}></textarea>

      <h2>🔹 Символика и значимые воспоминания</h2>
      <label>11. Есть ли особенная вещь или место, которое всегда напоминает вам о ваших близких?</label>
      <textarea name="specialThing" value={formData.specialThing} onChange={handleChange}></textarea>

      <label>12. Какие мелочи из жизни дома вам особенно дороги?</label>
      <textarea name="cherishedThings" value={formData.cherishedThings} onChange={handleChange}></textarea>

      <label>13. Как бы вы описали своих близких тремя словами?</label>
      <textarea name="describeLovedOnes" value={formData.describeLovedOnes} onChange={handleChange}></textarea>

      <h2>🔹 Откровенные и глубокие признания</h2>
      <label>14. Что вы хотели бы сказать своим близким, но пока не успели выразить?</label>
      <textarea name="unspokenWords" value={formData.unspokenWords} onChange={handleChange}></textarea>

      <label>15. Есть ли у вас мечта или общее видение будущего, которое поддерживает вас в разлуке?</label>
      <textarea name="sharedDream" value={formData.sharedDream} onChange={handleChange}></textarea>

      <label>16. Как вы видите момент встречи с близкими после возвращения домой?</label>
      <textarea name="reunionMoment" value={formData.reunionMoment} onChange={handleChange}></textarea>

      <h2>🔹 Музыкальное настроение и стиль</h2>
      <label>17. Какой эмоциональный настрой вы хотите передать через свою песню?</label>
      <textarea name="emotionalTone" value={formData.emotionalTone} onChange={handleChange}></textarea>

      <label>18. В каком музыкальном стиле вы бы хотели исполнить эту песню?</label>
      <textarea name="musicalStyle" value={formData.musicalStyle} onChange={handleChange}></textarea>

      <label>19. Есть ли слова или фразы, без которых ваша песня не будет полной?</label>
      <textarea name="essentialWords" value={formData.essentialWords} onChange={handleChange}></textarea>

      <label>20. Какие эмоции вы хотите подарить своим близким, когда они услышат эту песню?</label>
      <textarea name="desiredEmotions" value={formData.desiredEmotions} onChange={handleChange}></textarea>

      <button type="submit">Отправить</button>
    </form>
  );
}
