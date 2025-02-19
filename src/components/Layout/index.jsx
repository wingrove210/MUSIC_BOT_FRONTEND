import PropTypes from 'prop-types';
import Header from '../Header';
import './index.css';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
