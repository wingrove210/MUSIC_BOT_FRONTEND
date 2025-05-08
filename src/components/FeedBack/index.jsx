import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import slide1 from '/photo_2025-05-06_15-02-31.jpg'
import slide2 from '/photo_2025-05-06_15-03-24.jpg'
import slide3 from '/photo_2025-05-06_15-03-31.jpg'
import slide4 from '/photo_2025-05-06_15-03-37.jpg'
import slide5 from '/photo_2025-05-06_15-03-41.jpg'
import slide6 from '/photo_2025-05-06_15-13-28.jpg'
const reviews = [
  {
    img: `${slide1}`,
    text: "Заказал песню к годовщине нашего возвращения из зоны СВО . Вы попали в самую суть: не пафос, а братство, тишина перед боем, голос матери в телефонной трубке... Ребята слушают и молчат. Спасибо, что помните о настоящих героях.",
    author: "Андрей «Гром» Иванов, г. Ростов-на-Дону"
  },
  {
    img: `${slide3}`,
    text: "Спасибо за «Белых журавлей»... Заказала песню сыну, а вы вписали туда его стихи из армейского блокнота. Теперь это наша семейная молитва. Когда играет — кажется, он рядом. Низкий поклон за память.",
    author: "Светлана Николаевна, г. Пермь"
  },
  {
    img: `${slide2}`,
    text: "В Севастополе на Сапун-горе 9 мая тысячи людей пели ваш «Марш освободителей» под аккордеон. Вы видели это в соцсетях? Ваша музыка объединила ветеранов, детей и бойцов СВО — это и есть сила искусства! Теперь просим сделать ремикс для TikTok-челленджа!",
    author: "Артём Зорин, волонтёр движения «Наш Крым»"
  },
  {
    img: `${slide4}`,
    text: "Мой сын ушёл в армию в 2022-м. Вашу песню «Возвращайся» слушаем вместе по видеосвязи: я — в Новосибирске, он — где-то под Луганском. Говорит: «Ма, это про нас». Спасибо, что даёте надежду...",
    author: "Татьяна Шумейко, «Материнская платформа Сибири»"
  },
  {
    img: `${slide5}`,
    text: "Слушали вашу балладу «Возвращение» с женой в ночь, когда провожали Сашку в зону СВО. Вы написали: «Я вернусь, мать, как прадед из Берлина» — и эти слова стали нашей молитвой. Теперь сын шлёт голосовые сообщения: «Пап, ставь эту песню, когда вернусь». Ждём...",
    author: "Сергей и Марина Лопаткины, рабочий посёлок Черлак"
  },
  {
    img: `${slide6}`,
    text: "Дед-фронтовик, я — афганец, сын — участник СВО. Ваш трек «От Бреста до Донецка» собрал нас за одним столом 9 мая. Дед сказал: «Да, так и было...», а сын добавил: «Так и есть». Вы соединили нашу историю в одну нить. Теперь это наш семейный гимн",
    author: "Семья Богдановых, потомки 234-й дивизии"
  }
];

export default function FeedBack() {
  const settings = {
    accessibility: false,
    centerMode: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 1, centerMode: false }
      }
    ]
  };

  return (
    <div className="container">
      <Slider {...settings} className="reviews-slider">
        {reviews.map((review, idx) => (
          <div className="reviews-slider__item" key={idx}>
            <a className="reviews-slider__photo-wrapper" href="#">
              <img src={review.img} alt="" className="reviews-slider__photo" />
            </a>
            <div className="reviews-slider__text">
              <div className="reviews-slider__message">
                <p>{review.text}</p>
              </div>
              <div className="reviews-slider__author-name">{review.author}</div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="w-full flex justify-center">
          <a href="https://t.me/patriotComments" className="sendMessage-btn">Оставить отзыв</a>
      </div>
    </div>
  );
}
