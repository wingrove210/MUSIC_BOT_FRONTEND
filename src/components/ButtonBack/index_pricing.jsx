import './index.css';
import logo from '/Logo.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const tg = window.Telegram ? window.Telegram.WebApp : null;

export default function BackButton_Pricing() {
  const navigate = useNavigate();
    useEffect(() => {
    if (tg) {
      tg.expand();
      tg.ready();
      if (tg.BackButton) {
        tg.BackButton.show();
        tg.BackButton.onClick(() => {
          if (tg.MainButton) tg.MainButton.hide();
          tg.BackButton?.hide();
          navigate(-1);
        });
      }
    }
    // Очистка обработчика при размонтировании
    return () => {
      if (tg?.BackButton) tg.BackButton.onClick(() => {});
    };
  }, [navigate]);
  return (
    <div className='flex items-center justify-between h-[70px] mt-[25px]'>
      {/* <div className='flex items-center'>
        <Link to="/" className="button_back">
          <div className="button_back-box">
            <span className="button_back-elem">
              <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
              </svg>
            </span>
            <span className="button_back-elem">
              <svg viewBox="0 0 46 40">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
              </svg>
            </span>
          </div>
        </Link>
      </div> */}
      <div className='flex-grow text-center'>
        <img src={logo} alt="Logo" className='inline-block' style={{ height: '80px', width: 'auto' }}/>
      </div>
    </div>
  );
}
