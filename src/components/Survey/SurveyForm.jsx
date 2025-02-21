import { useState } from 'react';
import './SurveyForm.css';
import BackButton from '../ButtonBack';
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
    <>
    <div className='h-15'>
       <BackButton/>
    </div>
    <form className="survey-form px-5 py-5" onSubmit={handleSubmit}>
      <h2>🔹 Личность и связь с близкими</h2>
      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">1. Как вас зовут?</label>
        <input className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter text here" />
      </div>

      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipient">2. Кому вы отправляете эту песню?</label>
        <input className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" type="text" name="recipient" value={formData.recipient} onChange={handleChange} placeholder="Enter text here" />
      </div>

      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="relationship">Расскажите, кто эти люди для вас:</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="relationship" value={formData.relationship} onChange={handleChange} placeholder="Enter text here"></textarea>
      </div>

      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timeApart">3. Как долго вы в разлуке?</label>
        <input className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" type="text" name="timeApart" value={formData.timeApart} onChange={handleChange} placeholder="Enter text here" />
      </div>

      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastDayTogether">4. Как вы вспоминаете последний день, проведённый вместе перед разлукой?</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="lastDayTogether" value={formData.lastDayTogether} onChange={handleChange} placeholder="Enter text here"></textarea>
      </div>

      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstWords">5. Если бы сейчас вы могли обнять своих близких, что бы сказали им в первую очередь?</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="firstWords" value={formData.firstWords} onChange={handleChange} placeholder="Enter text here"></textarea>
      </div>

      <h2>🔹 Чувства, разлука и поддержка</h2>
      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hardestPart">6. Что для вас самое сложное в разлуке с домом и близкими?</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="hardestPart" value={formData.hardestPart} onChange={handleChange} placeholder="Enter text here"></textarea>
      </div>

      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stayingConnected">7. Как вы сохраняете связь с теми, кого любите, несмотря на расстояние?</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="stayingConnected" value={formData.stayingConnected} onChange={handleChange} placeholder="Enter text here"></textarea>
      </div>

      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cherishedMoments">8. Какие совместные моменты с близкими согревают ваше сердце в трудные минуты?</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="cherishedMoments" value={formData.cherishedMoments} onChange={handleChange} placeholder="Enter text here"></textarea>
      </div>

      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="supportiveWords">9. Есть ли слова или фразы, сказанные вашими близкими, которые до сих пор поддерживают вас?</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="supportiveWords" value={formData.supportiveWords} onChange={handleChange} placeholder="Enter text here"></textarea>
      </div>

      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sourceOfStrength">10. Что даёт вам силы и надежду, пока вы ждёте встречи с домом?</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="sourceOfStrength" value={formData.sourceOfStrength} onChange={handleChange} placeholder="Enter text here"></textarea>
      </div>

      <h2>🔹 Символика и значимые воспоминания</h2>
      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specialThing">11. Есть ли особенная вещь или место, которое всегда напоминает вам о ваших близких?</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="specialThing" value={formData.specialThing} onChange={handleChange} placeholder="Enter text here"></textarea>
      </div>

      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cherishedThings">12. Какие мелочи из жизни дома вам особенно дороги?</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="cherishedThings" value={formData.cherishedThings} onChange={handleChange} placeholder="Enter text here"></textarea>
      </div>

      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="describeLovedOnes">13. Как бы вы описали своих близких тремя словами?</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="describeLovedOnes" value={formData.describeLovedOnes} onChange={handleChange} placeholder="Enter text here"></textarea>
      </div>

      <h2>🔹 Откровенные и глубокие признания</h2>
      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unspokenWords">14. Что вы хотели бы сказать своим близким, но пока не успели выразить?</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="unspokenWords" value={formData.unspokenWords} onChange={handleChange} placeholder="Enter text here"></textarea>
      </div>

      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sharedDream">15. Есть ли у вас мечта или общее видение будущего, которое поддерживает вас в разлуке?</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="sharedDream" value={formData.sharedDream} onChange={handleChange} placeholder="Enter text здесь"></textarea>
      </div>

      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reunionMoment">16. Как вы видите момент встречи с близкими после возвращения домой?</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="reunionMoment" value={formData.reunionMoment} onChange={handleChange} placeholder="Enter text here"></textarea>
      </div>

      <h2>🔹 Музыкальное настроение и стиль</h2>
      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emotionalTone">17. Какой эмоциональный настрой вы хотите передать через свою песню?</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="emotionalTone" value={formData.emotionalTone} onChange={handleChange} placeholder="Enter text here"></textarea>
      </div>

      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="musicalStyle">18. В каком музыкальном стиле вы бы хотели исполнить эту песню?</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="musicalStyle" value={formData.musicalStyle} onChange={handleChange} placeholder="Enter text here"></textarea>
      </div>

      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="musicalStyle">19. Есть ли слова или фразы, без которых ваша песня не будет полной?</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="musicalStyle" value={formData.musicalStyle} onChange={handleChange} placeholder="Enter text here"></textarea>
      </div>

      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="musicalStyle">20. Какие эмоции вы хотите подарить своим близким, когда они услышат эту песню?</label>
        <textarea className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" name="musicalStyle" value={formData.musicalStyle} onChange={handleChange} placeholder="Enter text here"></textarea>
      </div>

      <button type="submit">Отправить</button>
    </form>
    </>
  );
}
