import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../redux/form/slice";
import { Link } from "react-router-dom";

export default function Form() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.form);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    dispatch(updateForm(data));
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
                defaultValue={userData.name}
              />
            </div>
            <div className="form-field">
              <input
                required=""
                placeholder="Email"
                className="input-field"
                type="email"
                name="email"
                defaultValue={userData.email}
              />
            </div>
            <div className="form-field">
              <input
                required=""
                placeholder="Номер телефона"
                className="input-field"
                type="text"
                name="phone"
                defaultValue={userData.phone}
              />
            </div>
            <div className="form-field">
              <input
                required=""
                placeholder="Телеграм"
                className="input-field"
                type="text"
                name="telegram"
                defaultValue={userData.telegram}
              />
            </div>
            <Link to="/pricing" className="sendMessage-btn"><button type="submit" className="">Отправить</button></Link>
            
          </form>
        </div>
      </div>
    </div>
  );
}