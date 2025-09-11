import { useEffect, useState } from "react";
import axios from "axios";
import './index.css';
import TrackBlock from "../TrackBlock";
import Player from "../Player";
import LoadingScreen from "../LoadingScreen";
import ErrorPreloader from "../ErrorPreloader"; // Import the new ErrorPreloader component
import EmptyItems from "../EmptyItems";
import Button from "../Button";
export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentTrackDetails, setCurrentTrackDetails] = useState({});
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    axios.get("https://patriotmusic.site/api/tracks")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true); // Set error to true
        setLoading(false);
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingScreen(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const playTrack = (track) => {
    if (currentTrack) {
      currentTrack.pause();
    }
    const audio = new Audio(`${track.url}`);
    audio.play();
    setCurrentTrack(audio);
    setCurrentTrackDetails(track);
  };

  const playPreviousTrack = () => {
    if (currentTrackDetails) {
      const currentIndex = products.findIndex(product => product.id === currentTrackDetails.id);
      if (currentIndex > 0) {
        playTrack(products[currentIndex - 1]);
      }
    }
  };

  const playNextTrack = () => {
    if (currentTrackDetails) {
      const currentIndex = products.findIndex(product => product.id === currentTrackDetails.id);
      if (currentIndex < products.length - 1) {
        playTrack(products[currentIndex + 1]);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (currentTrack) {
        currentTrack.pause();
      }
    };
  }, [currentTrack]);

  if (showLoadingScreen || (loading && products.length === 0)) return <LoadingScreen />;
  if (error) return <ErrorPreloader />;
  if(products.length === 0) console.log('No products found');
  return (
    <div className="recommended-songs">
      <h1 className="text-2xl all_songs_text">Примеры наших работ :</h1>
      <div className="song-container">
        {products.length === 0 ? (
          <EmptyItems />
        ) : (
          products.map((product) => (
            <div key={product.id}>
              <div className="section-container">
                <TrackBlock
                  product={product}
                  onClick={() => playTrack(product)}
                  isPlaying={currentTrackDetails && currentTrackDetails.id === product.id}
                />
              </div>
              {/* {(index + 1) % 2 === 0 && index !== products.length - 1 && (
                <div className="track-divider" />
              )} */}
            </div>
          ))
        )}
      </div>
      <Button />
      <div className="w-full flex justify-center">
        <span className="h-[2px] w-full bg-white opacity-50 flex left-0 mt-20"></span>
      </div>
      {currentTrackDetails && (
        <Player
          track={currentTrackDetails}
          audio={currentTrack}
          onPrevious={playPreviousTrack}
          onNext={playNextTrack}
        />
      )}
    </div>
  );
}
