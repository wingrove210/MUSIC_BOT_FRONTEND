import PropTypes from 'prop-types';
import './index.css';

export default function Menu({ isOpen }) {
  return (
    <div>
      {isOpen && (
        <div className="menu-content">
          <ul className="menu">
            <li><a href="#">Login</a></li>
            <li><a href="#">Create account</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
