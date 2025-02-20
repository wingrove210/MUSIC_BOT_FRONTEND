import PropTypes from 'prop-types';
import './index.css';
import { Link } from 'react-router-dom';
export default function Menu({ isOpen }) {
  return (
    <div>
      {isOpen && (
        <div className="menu-content">
          <ul className="menu">
            <li><Link to="/">Главная</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
