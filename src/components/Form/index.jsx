import "./index.css";
import { Link } from "react-router-dom";
export default function Form() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="form-card1">
        <div className="form-card2">
          <form className="form">
            <p className="form-heading">Ваши контакты</p>

            <div className="form-field">
              <input
                required=""
                placeholder="Имя"
                className="input-field"
                type="text"
              />
            </div>

            <div className="form-field">
              <input
                required=""
                placeholder="Email"
                className="input-field"
                type="email"
              />
            </div>

            <div className="form-field">
              <input
                required=""
                placeholder="Номер телефона"
                className="input-field"
                type="text"
              />
            </div>

            <div className="form-field">
              <input
                required=""
                placeholder="Телеграм"
                className="input-field"
                type="text"
              />
            </div>

            <Link to="/survey" className="sendMessage-btn">Отправить</Link>
          </form>
        </div>
      </div>
    </div>
  );
}