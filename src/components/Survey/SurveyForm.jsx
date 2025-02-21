import { useState } from 'react';
import './SurveyForm.css';
import BackButton from '../ButtonBack';
import Reciepie from '../Reciepie'; // new import
const TelegramWebApp = window.Telegram.WebApp;

export default function SurveyForm() {
  // Возвращаем состояние к исходному: popup открыто сразу
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    formRole: '',         // Кто заполняет форму?
    songFor: '',          // Для кого создаётся песня?
    heroName: '',
    heroOrigin: '',
    heroItem: '',
    job: '',
    equipment: '',
    motivation: '',
    comrades: '',
    moments: '',
    words: '',
    additionalChecks: {
      remembrance: false,
      personalMessage: false,
      specialPhrases: false,
      futureMessage: false
    },
    otherText: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      additionalChecks: {
        ...prev.additionalChecks,
        [name]: checked
      }
    }));
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
• Кто заполняет форму: ${formData.formRole}  
• Для кого создаётся песня: ${formData.songFor}  

*О герое*  
1. Имя и позывное: ${formData.heroName}  
2. Родина: ${formData.heroOrigin}  
3. Особая вещь/символ: ${formData.heroItem}  

*О службе*  
4. Чем занимается на передовой: ${formData.job}  
5. Техника/оружие: ${formData.equipment}  

*О характере, мотивации и команде*  
6. Что даёт силу и мотивацию: ${formData.motivation}  
7. Боевые товарищи: ${formData.comrades}  

*Личное послание в песню*  
8. Моменты из жизни героя: ${formData.moments}  
9. Важные слова или цитаты: ${formData.words}  
10. Дополнительно: 
   Воспоминания о службе: ${formData.additionalChecks.remembrance ? '✓' : '✗'}
   Личное обращение: ${formData.additionalChecks.personalMessage ? '✓' : '✗'}
   Особые фразы: ${formData.additionalChecks.specialPhrases ? '✓' : '✗'}
   Послание в будущее: ${formData.additionalChecks.futureMessage ? '✓' : '✗'}
   Другое: ${formData.otherText}
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
              [{ text: "Оплатить 51000₽", url: "https://t.me/PATRIOT_MNGR" }]
            ]
          }
        })
      });

      const result = await response.json();
      if (result.ok) {
        // Показать popup вместо закрытия WebApp.
        setShowPopup(true);
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
      <div className={showPopup ? "blur-background" : ""}>
        <div className='h-15'>
          <BackButton/>
        </div>
        <form className="px-5 py-10" onSubmit={handleSubmit}>
          {/* Updated custom radio group for formRole */}
          <div className="w-full px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)]">
            <legend className="text-lg font-semibold mb-3 select-none text-black">1.1 Кто заполняет форму?</legend>
            <label
              htmlFor="option1"
              className={`font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg select-none ${formData.formRole === "Я солдат, хочу песню о себе" ? "text-blue-500 bg-blue-50 ring-blue-300 ring-1" : ""}`}
              onClick={() => setFormData({ ...formData, formRole: "Я солдат, хочу песню о себе" })}
            >
              <div className="w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${formData.formRole === "Я солдат, хочу песню о себе" ? "text-blue-500" : "text-gray-300"}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Я солдат, хочу песню о себе
            </label>
            <label
              htmlFor="option2"
              className={`font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg select-none ${formData.formRole === "Я близкий человека (жена, мать, отец, друг)" ? "text-blue-500 bg-blue-50 ring-blue-300 ring-1" : ""}`}
              onClick={() => setFormData({ ...formData, formRole: "Я близкий человека (жена, мать, отец, друг)" })}
            >
              <div className="w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${formData.formRole === "Я близкий человека (жена, мать, отец, друг)" ? "text-blue-500" : "text-gray-300"}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Я близкий человека (жена, мать, отец, друг)
            </label>
            <label
              htmlFor="option3"
              className={`font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg select-none ${formData.formRole === "Я сослуживец" ? "text-blue-500 bg-blue-50 ring-blue-300 ring-1" : ""}`}
              onClick={() => setFormData({ ...formData, formRole: "Я сослуживец" })}
            >
              <div className="w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${formData.formRole === "Я сослуживец" ? "text-blue-500" : "text-gray-300"}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Я сослуживец
            </label>
          </div>


          <div className="w-full mb-5 px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)] mt-5">
            <legend className="text-lg font-semibold mb-3 select-none text-black">2.2 Для кого создаётся песня?</legend>
            <label
              htmlFor="option1_song"
              className={`font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg select-none ${formData.songFor === "Для солдата на передовой" ? "text-blue-500 bg-blue-50 ring-blue-300 ring-1" : ""}`}
              onClick={() => setFormData({ ...formData, songFor: "Для солдата на передовой" })}
            >
              <div className="w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${formData.songFor === "Для солдата на передовой" ? "text-blue-500" : "text-gray-300"}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              Для солдата на передовой
            </label>
            <label
              htmlFor="option2_song"
              className={`font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg select-none ${formData.songFor === "От солдата близким" ? "text-blue-500 bg-blue-50 ring-blue-300 ring-1" : ""}`}
              onClick={() => setFormData({ ...formData, songFor: "От солдата близким" })}
            >
              <div className="w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${formData.songFor === "От солдата близким" ? "text-blue-500" : "text-gray-300"}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              От солдата близким
            </label>
            <label
              htmlFor="option3_song"
              className={`font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg select-none ${formData.songFor === "Чтобы увековечить свою историю" ? "text-blue-500 bg-blue-50 ring-blue-300 ring-1" : ""}`}
              onClick={() => setFormData({ ...formData, songFor: "Чтобы увековечить свою историю" })}
            >
              <div className="w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${formData.songFor === "Чтобы увековечить свою историю" ? "text-blue-500" : "text-gray-300"}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              Чтобы увековечить свою историю
            </label>
          </div>

          <h2 className='text-2xl text-center'>О герое</h2>
          <div>
            <div className="w-full p-5 bg-white rounded-lg font-mono mt-5 mb-5">
            <label>1. Как его зовут? Какое у него позывное?</label>
              <input
                type="text"
                name="heroName"
                value={formData.heroName}
                onChange={handleChange}
                placeholder="Например: Алексей, «Барс»"
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                id="heroName-input"
              />
            </div>
          </div>
          <div>
            <div className="w-full p-5 bg-white rounded-lg font-mono">
              <label>2. Откуда он родом?</label>
              <textarea
                name="heroOrigin"
                value={formData.heroOrigin}
                onChange={handleChange}
                placeholder="Например: Город Курган, вырос на берегу Тобола"
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                id="heroOrigin-textarea"
              />
            </div>
          </div>
          <div>
            <div className="w-full p-5 bg-white rounded-lg font-mono mt-5 mb-5">
            <label>3. Есть ли у него особая вещь, символ или талисман? Почему это важно?</label>
              <textarea
                name="heroItem"
                value={formData.heroItem}
                onChange={handleChange}
                placeholder="Например: Кулон с именем дочери"
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                id="heroItem-textarea"
              />
            </div>
          </div>

          <h2 className='text-2xl text-center'>О службе</h2>
          <div>
            <div className="w-full p-5 bg-white rounded-lg font-mono mt-5 mb-5">
            <label>4. Чем он занимается на передовой?</label>
              <textarea
                name="job"
                value={formData.job}
                onChange={handleChange}
                placeholder="Например: Разведчик в группе наблюдения"
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                id="job-textarea"
              />
            </div>
          </div>
          <div>
            <div className="w-full p-5 bg-white rounded-lg font-mono  mt-5 mb-5">
              <label>5. С какой техникой или оружием он работает?</label>
              <textarea
                name="equipment"
                value={formData.equipment}
                onChange={handleChange}
                placeholder="Например: Снайпер с винтовкой СВД"
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                id="equipment-textarea"
              />
            </div>
          </div>

          <h2 className='text-2xl text-center'>О характере, мотивации и команде</h2>
          <div>
            <div className="w-full p-5 bg-white rounded-lg font-mono mt-5 mb-5">
            <label>6. Что даёт ему силу и мотивацию? Какие качества ценит?</label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Например: Вера в победу и поддержка родных"
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                id="motivation-textarea"
              />
            </div>
          </div>
          <div>
            <div className="w-full p-5 bg-white rounded-lg font-mono mt-5 mb-5">
            <label>7. Кто его боевые товарищи?</label>
              <textarea
                name="comrades"
                value={formData.comrades}
                onChange={handleChange}
                placeholder="Например: Традиции и ритуалы в сплочённой команде"
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                id="comrades-textarea"
              />
            </div>
          </div>

          <h2 className='text-2xl text-center'>Личное послание в песню</h2>
          <div>
            <div className="w-full p-5 bg-white rounded-lg font-mono mt-5 mb-5">
            <label>8. Какие моменты из жизни героя должны прозвучать?</label>
              <textarea
                name="moments"
                value={formData.moments}
                onChange={handleChange}
                placeholder="Например: Первые дни на службе, победы и трудности"
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                id="moments-textarea"
              />
            </div>
          </div>
          <div>
            <div className="w-full p-5 bg-white rounded-lg font-mono mt-5 mb-5">
            <label>9. Какие слова, цитаты или обещания важно включить?</label>
              <textarea
                name="words"
                value={formData.words}
                onChange={handleChange}
                placeholder="Например: «Брат за брата, никто не забыт!»"
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                id="words-textarea"
              />
            </div>
          </div>
          <div>
            <label className='white_label'>10. Что ещё нужно передать? (Выберите и/или добавьте своё)</label>
            <div>
              <label className='white_label'>
                <input type="checkbox" name="remembrance" checked={formData.additionalChecks.remembrance} onChange={handleCheckboxChange} />
                Воспоминания о службе
              </label>
            </div>
            <div>
              <label className='white_label'>
                <input type="checkbox" name="personalMessage" checked={formData.additionalChecks.personalMessage} onChange={handleCheckboxChange} />
                Личное обращение (к семье, друзьям, товарищам)
              </label>
            </div>
            <div>
              <label className='white_label'>
                <input type="checkbox" name="specialPhrases" checked={formData.additionalChecks.specialPhrases} onChange={handleCheckboxChange} />
                Особые фразы, цитаты
              </label>
            </div>
            <div>
              <label className='white_label'>
                <input type="checkbox" name="futureMessage" checked={formData.additionalChecks.futureMessage} onChange={handleCheckboxChange} />
                Послание в будущее
              </label>
            </div>
            <div>
              <label className='white_label'>📝 Другое:</label>
              <div className="w-full p-5 bg-white rounded-lg font-mono">
                <input
                  type="text"
                  name="otherText"
                  value={formData.otherText}
                  onChange={handleChange}
                  placeholder="Ваш текст"
                  className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  id="otherText-input"
                />
              </div>
            </div>
          </div>

          <button type="submit" className='w-full bg-green-900 py-3 mt-3 rounded-2xl'>Отправить</button>
        </form>
      </div>
      {showPopup && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999
          }}
        >
          <div 
            style={{
              // background: "#fff",
              // padding: "20px",
              borderRadius: "8px",
              position: "relative"
            }}
          >
            <Reciepie/>
          </div>
        </div>
      )}
    </>
  );
}
