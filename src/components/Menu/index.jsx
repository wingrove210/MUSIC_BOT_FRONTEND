import PropTypes from 'prop-types';
import './index.css';
import { Link } from 'react-router-dom';
import MenuBlock from '../MenuBlock';
export default function Menu({ isOpen }) {
  return (
    <div>
      {isOpen && (
        <div className="menu-content">
          <ul className="menu">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/">Тех.Поддержка</Link></li>
            <li><Link to="/">FAQ</Link></li>
            <MenuBlock/>
          </ul>
        </div>
      )}
    </div>
  );
}

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
