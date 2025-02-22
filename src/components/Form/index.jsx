import "./index.css";
import { useDispatch } from "react-redux";
import { updateForm } from "../../redux/form/slice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Add state for error popup
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate the form: if invalid, display error popup
    if (!event.target.checkValidity()) {
      setShowError(true);
      return;
    }
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Dispatch the form update (Redux)
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
      {/* Error popup */}
      {showError && (
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
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <p>Пожалуйста, заполните все поля.</p>
            <button onClick={() => setShowError(false)}>Закрыть</button>
          </div>
        </div>
      )}
     </div>
  );
}