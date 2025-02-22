import "./index.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Reciepie({ price }) { // updated to receive price prop
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-5">
      <div className="receipt">
        <p className="shop-name">Набор Базовый</p>
        <p className="info">
          Ваш заказ принят, скоро мы с вами свяжемся!
          <br />
          Дата: 12/27/2025
          <br />
          Время: 03:15 PM
        </p>

        <table>
          <thead>
            <tr>
              <th>Преимущества</th>
              <th>№</th>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Музыка и вокал по вашему запросу</td>
              <td>1</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>Текст по вашим ответам</td>
              <td>2</td>
              <td>$10.00</td>
            </tr>
            <tr>
              <td>Базовая обработка звука</td>
              <td>3</td>
              <td>$15.00</td>
            </tr>
            <tr>
              <td>Готовый MP3-файл</td>
              <td>4</td>
              <td>$15.00</td>
            </tr>
            <tr>
              <td>Короткий трек (куплет + припев)</td>
              <td>5</td>
              <td>$15.00</td>
            </tr>
          </tbody>
        </table>

        <div className="total">
          <p>Итого:</p>
          <p>{price}₽</p> {/* Updated to display dynamic tariff price */}
        </div>

        <p className="thanks">Спасибо за заявку мы свяжемся с вами</p>
      </div>
      <a className="w-full h-10 bg-green-900 text-center flex justify-center items-center rounded-2xl" href="https://t.me/PATRIOT_MNGR">Оплатить</a>
      <Link to="/" className="w-full h-10 bg-green-900 text-center flex justify-center items-center rounded-2xl">
        Назад
      </Link>

    </div>
  );
}

Reciepie.propTypes = {
  price: PropTypes.number
};
