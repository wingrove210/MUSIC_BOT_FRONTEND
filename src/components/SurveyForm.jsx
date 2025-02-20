import { useState } from 'react';
// import './SurveyForm.css';


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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to the server
    fetch('http://127.0.0.1:8000/survey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Send formData to the bot using Telegram Web App
        const botToken = '8151650888:AAFSJqYDHUtrii-7WS8sBDgi0MGtmYosg9k';
        const chatId = '1372814991';
        const message = JSON.stringify(formData, null, 2);
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message
          })
        })
          .then(response => response.json())
          .then(data => {
            console.log('Bot Success:', data);
            // Close the application
            window.close();
          })
          .catch(error => {
            console.error('Bot Error:', error);
          });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <form className="survey-form white-text" onSubmit={handleSubmit}>
      <h2>🔹 Личность и связь с близкими</h2>
      <label>
        1. Как вас зовут?
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        2. Кому вы отправляете эту песню?
        <input type="text" name="recipient" value={formData.recipient} onChange={handleChange} />
      </label>
      <label>
        Расскажите, кто эти люди для вас и какое место они занимают в вашем сердце.
        <textarea name="relationship" value={formData.relationship} onChange={handleChange}></textarea>
      </label>
      <label>
        3. Как долго вы уже находитесь вдали от своих близких?
        <input type="text" name="timeApart" value={formData.timeApart} onChange={handleChange} />
      </label>
      <label>
        4. Как вы вспоминаете последний день, проведённый вместе перед разлукой?
        <textarea name="lastDayTogether" value={formData.lastDayTogether} onChange={handleChange}></textarea>
      </label>
      <label>
        5. Если бы сейчас вы могли обнять своих близких, что бы сказали им в первую очередь?
        <textarea name="firstWords" value={formData.firstWords} onChange={handleChange}></textarea>
      </label>

      <h2>🔹 Чувства, разлука и поддержка</h2>
      <label>
        6. Что для вас самое сложное в разлуке с домом и близкими?
        <textarea name="hardestPart" value={formData.hardestPart} onChange={handleChange}></textarea>
      </label>
      <label>
        7. Как вы сохраняете связь с теми, кого любите, несмотря на расстояние?
        <textarea name="stayingConnected" value={formData.stayingConnected} onChange={handleChange}></textarea>
      </label>
      <label>
        8. Какие совместные моменты с близкими согревают ваше сердце в трудные минуты?
        <textarea name="cherishedMoments" value={formData.cherishedMoments} onChange={handleChange}></textarea>
      </label>
      <label>
        9. Есть ли слова или фразы, сказанные вашими близкими, которые до сих пор поддерживают вас?
        <textarea name="supportiveWords" value={formData.supportiveWords} onChange={handleChange}></textarea>
      </label>
      <label>
        10. Что даёт вам силы и надежду, пока вы ждёте встречи с домом?
        <textarea name="sourceOfStrength" value={formData.sourceOfStrength} onChange={handleChange}></textarea>
      </label>

      <h2>🔹 Символика и значимые воспоминания</h2>
      <label>
        11. Есть ли особенная вещь или место, которое всегда напоминает вам о ваших близких?
        <textarea name="specialThing" value={formData.specialThing} onChange={handleChange}></textarea>
      </label>
      <label>
        12. Какие мелочи из жизни дома вам особенно дороги?
        <textarea name="cherishedThings" value={formData.cherishedThings} onChange={handleChange}></textarea>
      </label>
      <label>
        13. Как бы вы описали своих близких тремя словами?
        <textarea name="describeLovedOnes" value={formData.describeLovedOnes} onChange={handleChange}></textarea>
      </label>

      <h2>🔹 Откровенные и глубокие признания</h2>
      <label>
        14. Что вы хотели бы сказать своим близким, но пока не успели выразить?
        <textarea name="unspokenWords" value={formData.unspokenWords} onChange={handleChange}></textarea>
      </label>
      <label>
        15. Есть ли у вас мечта или общее видение будущего, которое поддерживает вас в разлуке?
        <textarea name="sharedDream" value={formData.sharedDream} onChange={handleChange}></textarea>
      </label>
      <label>
        16. Как вы видите момент встречи с близкими после возвращения домой?
        <textarea name="reunionMoment" value={formData.reunionMoment} onChange={handleChange}></textarea>
      </label>

      <h2>🔹 Музыкальное настроение и стиль</h2>
      <label>
        17. Какой эмоциональный настрой вы хотите передать через свою песню?
        <textarea name="emotionalTone" value={formData.emotionalTone} onChange={handleChange}></textarea>
      </label>
      <label>
        18. В каком музыкальном стиле вы бы хотели исполнить эту песню?
        <textarea name="musicalStyle" value={formData.musicalStyle} onChange={handleChange}></textarea>
      </label>
      <label>
        19. Есть ли слова или фразы, без которых ваша песня не будет полной?
        <textarea name="essentialWords" value={formData.essentialWords} onChange={handleChange}></textarea>
      </label>
      <label>
        20. Какие эмоции вы хотите подарить своим близким, когда они услышат эту песню?
        <textarea name="desiredEmotions" value={formData.desiredEmotions} onChange={handleChange}></textarea>
      </label>

      <button type="submit">Отправить</button>
    </form>
  );
}
