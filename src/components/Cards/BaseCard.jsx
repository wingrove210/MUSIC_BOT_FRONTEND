import { Link } from 'react-router-dom';
import './Card.css';

export default function BaseCard() {
  return (
    <div className="card">
      <div className="card__border"></div>
      <div className="card_title__container">
        <span className="card_title">«Базовый» – 5 990₽</span>
        <p className="card_paragraph">
          ✅ Музыка и вокал по вашему запросу
          <br />
          ✅ Текст по вашим ответам
          <br />
          ✅ Базовая обработка звука
          <br />
          ✅ Готовый MP3-файл
          <br />
          ✅ Короткий трек (куплет + припев)
        </p>
      </div>
      <hr className="line" />
      <p className="card_paragraph">
        👉 Для тех, кто хочет простой, но душевный музыкальный подарок.
      </p>
      <Link to="/survey" className="button">Заказать</Link>
    </div>
  );
}
