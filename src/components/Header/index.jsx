import { useState } from 'react';
import logo from '/Logo.png';
import Menu from '../Menu';
import './index.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header-container'>
      <div className='menu-wrapper z-100' onClick={toggleMenu}>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
          <div className="menu-icon-bar top"></div>
          <div className="menu-icon-bar middle"></div>
          <div className="menu-icon-bar bottom"></div>
        </div>
      </div>
      <div className='logo-container'>
        <img src={logo} alt="Logo" className='logo'/>
      </div>
      <Menu isOpen={isMenuOpen} />
    </div>
  );
}
