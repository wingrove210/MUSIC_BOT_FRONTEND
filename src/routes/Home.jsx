import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Video from "../components/Video";
import Catalog from "../components/Catalog";
import Player from "../components/Player";
import "../index.css";
// import Button from "../components/Button";
import Layout from "../components/Layout";
import FeedBack from "../components/FeedBack";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  // const [currentTrackDetails, setCurrentTrackDetails] = useState({});

  useEffect(() => {
    axios
      .get("https://patriotmusic.site/api/tracks")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Ошибка при загрузке товаров");
        setLoading(false);
        console.log(err);
      });
  }, []);

  const playTrack = (track) => {
    if (currentTrack) {
      currentTrack.pause();
    }
    const audio = new Audio(`https://patriotmusic.site/api/${track.url}`);
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
        <p></p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <Layout>
          <Video />
          <Catalog products={products} playTrack={playTrack} />
          <FeedBack/>
          <Player />
        </Layout>
      )}
      {/* <Button /> */}
    </div>
  );
}
