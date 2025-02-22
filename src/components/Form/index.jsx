import "./index.css";
import { useDispatch } from "react-redux";
import { updateForm } from "../../redux/form/slice";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    dispatch(updateForm(data));
    navigate("/pricing");
  };

  return (
    <div className="flex justify-center items-center h-[100vh] absolute z-500 w-full top-0 left-0 ">
      <div className="form-card1">
        <div className="form-card2">
          <form className="form" onSubmit={handleSubmit}>
            <p className="form-heading">Ваши контакты</p>
            <div className="form-field">
              <input
                required=""
                placeholder="Имя"
                className="input-field"
                type="text"
                name="name"
              />
            </div>
            <div className="form-field">
              <input
                required=""
                placeholder="Email"
                className="input-field"
                type="email"
                name="email"
              />
            </div>
            <div className="form-field">
              <input
                required=""
                placeholder="Номер телефона"
                className="input-field"
                type="text"
                name="phone"
              />
            </div>
            <div className="form-field">
              <input
                required=""
                placeholder="Телеграм"
                className="input-field"
                type="text"
                name="telegram"
              />
            </div>
            <button type="submit" className="sendMessage-btn">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}