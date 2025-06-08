import './index.css';
import logo from '/Logo.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const tg = window.Telegram ? window.Telegram.WebApp : null;
export default function BackButton() {
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
          navigate('/pricing');
        });
      }
    }
    return () => {
      if (tg?.BackButton) tg.BackButton.onClick(() => {});
    };
  }, [navigate]);
  return (
    <div className='flex items-center justify-between h-[70px] mt-[25px]'>
      <div className='flex-grow text-center'>
        <img src={logo} alt="Logo" className='inline-block' style={{ height: '80px', width: 'auto' }}/>
      </div>
    </div>
  );
}
