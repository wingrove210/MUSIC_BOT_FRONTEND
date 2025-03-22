import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Video from "../components/Video";
import Catalog from "../components/Catalog";
import Player from "../components/Player";
import '../index.css';
// import Button from "../components/Button";
import Layout from '../components/Layout';
import LoadingScreen from "../components/LoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import { setTracks } from "../redux/tracks/slice";
import { selectTracks } from "../redux/tracks/selectors"

export default function Home() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  // const [currentTrackDetails, setCurrentTrackDetails] = useState({});

  useEffect(() => {
    axios
      .get("https://patriot-music.online/api/tracks")
      .then((response) => {
        dispatch(setTracks(response.data));
        setLoading(false);
      })
      .catch((err) => {
        setError("Ошибка при загрузке товаров");
        setLoading(false);
      });
  }, [dispatch]);
  
  const tracks = useSelector(selectTracks);

  const playTrack = (track) => {
    if (currentTrack) {
      currentTrack.pause();
    }
    const audio = new Audio(`https://patriot-music.online/api/${track.url}`);
    audio.play();
    setCurrentTrack(audio);
    // setCurrentTrackDetails(track);
  };

  useEffect(() => {
    return () => {
      if (currentTrack) {
        currentTrack.pause();
      }
    };
  }, [currentTrack]);

  return (

      <div className="">
        {loading ? (
          // <p>Загрузка товаров...</p>
          <LoadingScreen/>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <Layout>
              <Video />
              <Catalog products={tracks} playTrack={playTrack} />
          </Layout>
        )}
        {/* <Button /> */}
        <Player/>
      </div>
  );
}
