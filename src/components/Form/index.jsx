import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../redux/form/slice";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // new import

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // new hook for navigation
  const userData = useSelector((state) => state.form);
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
    
    // Prepare message for admin bot
    const adminToken = '7683789001:AAGw-K5_wWnvmHPvtC6fRX-Cm7H45B-Gmf0';
    const adminChatId = 1372814991; // only you should see this message
    const adminBotLink = 't.me/patriot_adminbot';
    const adminMessage = `
Новая заявка с контактов:
Имя: ${data.name}
Email: ${data.email}
Номер телефона: ${data.phone}
Телеграм: ${data.telegram}
Перейдите по ссылке для подробностей: ${adminBotLink}
    `;
    
    // Send message to the admin bot
    try {
      await fetch(`https://api.telegram.org/bot${adminToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: adminChatId,
          text: adminMessage,
          parse_mode: "Markdown",
        }),
      });
    } catch (error) {
      console.error("Ошибка отправки в админ-бот:", error);
      // Optionally, show an error to the user or log it
    }
    
    // Proceed to next stage after successful submission
    navigate("/pricing");
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] absolute z-500 w-full top-0 left-0 ">
        <div className="form-card1">
          <div className="form-card2">
            {/* Removed Link wrapper; form submission now solely handled by onSubmit */}
            <form className="form" onSubmit={handleSubmit}>
              <p className="form-heading">Ваши контакты</p>
              <div className="form-field">
                <input
                  required
                  placeholder="Имя"
                  className="input-field"
                  type="text"
                  name="name"
                  defaultValue={userData.name}
                />
              </div>
              <div className="form-field">
                <input
                  required
                  placeholder="Email"
                  className="input-field"
                  type="email"
                  name="email"
                  defaultValue={userData.email}
                />
              </div>
              <div className="form-field">
                <input
                  required
                  placeholder="Номер телефона"
                  className="input-field"
                  type="text"
                  name="phone"
                  defaultValue={userData.phone}
                />
              </div>
              <div className="form-field">
                <input
                  required
                  placeholder="Телеграм"
                  className="input-field"
                  type="text"
                  name="telegram"
                  defaultValue={userData.telegram}
                />
              </div>
              <button type="submit" className="sendMessage-btn">
                Отправить
              </button>
            </form>
          </div>
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
    </>
  );
}