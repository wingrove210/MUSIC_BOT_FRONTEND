import PropTypes from 'prop-types';
import './index.css';

function formatDuration(duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function TrackBlock({ product, onClick, isPlaying }) {
  return (
    <div className={`song ${isPlaying ? 'playing' : ''}`} onClick={onClick}>
      <div className="song-img">
        <img src={product.image} alt={product.name} className="h-12 w-full bg-black" />
        <div className="overlay">
          <i className="fa-solid fa-play"></i>
        </div>
      </div>
      <div className="song-title">
        <h2>{product.name}</h2>
        <p>{product.artist} | {product.artist === 'Базовый' ? '5000₽' : product.artist === 'Расширенный' ? '10000₽' : 'По договоренности'}</p>
      </div>
      <span>{formatDuration(product.duration)}</span>
    </div>
  );
}

TrackBlock.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    album: PropTypes.string,
    genre: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
  isPlaying: PropTypes.bool,
};

export default TrackBlock;
