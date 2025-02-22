import PropTypes from 'prop-types';
import './index.css';
import { Link } from 'react-router-dom';
import MenuBlock from '../MenuBlock';
export default function Menu({ isOpen }) {
  return (
    <div className={`menu-content ${isOpen ? 'open' : ''}`}>
      <ul className="menu">
        <li><Link to="/">Главная</Link></li>
        <li><a href="https://t.me/PATRIOT_MNGR">Тех.Поддержка</a></li>
        <li><a href="https://t.me/PATRIOT_MNGR">FAQ</a></li>
        <MenuBlock/>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
