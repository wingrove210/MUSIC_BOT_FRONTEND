import './Card.css';

export default function ExtendedCard() {
  return (
    <div className="card">
      <div className="card__border"></div>
      <div className="card_title__container">
        <span className="card_title">«Расширенный» – 11 990₽</span>
        <p className="card_paragraph">
          ✅ Всё из «Базового»
          <br />
          ✅  Две версии трека (разные стили)
          <br />
          ✅  Выбор мужского или женского голоса
          <br />
          ✅  Форматы MP3 и WAV
          <br />
          ✅  Текст от профессиональных авторов
        </p>
      </div>
      <hr className="line" />
      <p className="card_paragraph">
        👉 Для тех, кто хочет более проработанный и стильный трек.
      </p>
      <button className="button">Заказать</button>
    </div>
  );
}
