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
      <div className='menu-wrapper z-100'>
        <input type="checkbox" id="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
        <label htmlFor="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
      </div>
      <div className='logo-container'>
        <img src={logo} alt="Logo" className='logo'/>
      </div>
      <Menu isOpen={isMenuOpen} />
    </div>
  );
}
