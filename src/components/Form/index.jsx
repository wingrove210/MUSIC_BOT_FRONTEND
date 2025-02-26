import "./index.css";
import { useDispatch } from "react-redux";
import { updateForm } from "../../redux/form/slice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      setShowError(true);
      return;
    }
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Send personal contact data separately to the admin bot
      const adminBotToken = '7683789001:AAGw-K5_wWnvmHPvtC6fRX-Cm7H45B-Gmf0';
      const adminChatId = 1372814991; // The designated admin chat ID
      const message = `Новая анкета контактов:
Имя: ${data.name}
Email: ${data.email}
Телефон: ${data.phone}
Телеграм: ${data.telegram}`;
      
      await fetch(`https://api.telegram.org/bot${adminBotToken}/sendMessage`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: adminChatId,
          text: message,
          parse_mode: "Markdown",
        }),
      });
      
      // Update Redux state if needed
      dispatch(updateForm(data));
      // Redirect user to the pricing page for the next step (survey)
      navigate("/pricing");
    } catch (error) {
      console.error("Ошибка отправки контактов:", error);
      setShowError(true);
    }
  };

  return (
      <div className="form-card1">
        <div className="form-card2">
          <form className="form" onSubmit={handleSubmit}>
            <p className="form-heading">Ваши контакты</p>
            <div className="form-field">
              <input
                required
                placeholder="Имя"
                className="input-field"
                type="text"
                name="name"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Пожалуйста, заполните поле 'Имя'")
                }
                onInput={(e) => e.target.setCustomValidity('')}
              />
            </div>
            <div className="form-field">
              <input
                required
                placeholder="Email"
                className="input-field"
                type="email"
                name="email"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Пожалуйста, заполните поле 'Email'")
                }
                onInput={(e) => e.target.setCustomValidity('')}
              />
            </div>
            <div className="form-field">
              <input
                required
                placeholder="Номер телефона"
                className="input-field"
                type="text"
                name="phone"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Пожалуйста, заполните поле 'Номер телефона'")
                }
                onInput={(e) => e.target.setCustomValidity('')}
              />
            </div>
            <div className="form-field">
              <input
                required
                placeholder="Телеграм"
                className="input-field"
                type="text"
                name="telegram"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Пожалуйста, заполните поле 'Телеграм'")
                }
                onInput={(e) => e.target.setCustomValidity('')}
              />
            </div>
            <button type="submit" className="sendMessage-btn">Отправить</button>
          </form>
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