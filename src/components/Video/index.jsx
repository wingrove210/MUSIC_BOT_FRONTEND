import { useEffect, useState } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import './index.css';

function Video() {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    // Fetch the video URL from the API
    fetch('http://127.0.0.1:8000/videos/1')
      .then(response => response.json())
      .then(data => {
        setVideoUrl(data.url);
      })
      .catch(error => console.error('Error fetching video URL:', error));

    const player = new Plyr('#player', {
      autoplay: true
    });

    // Expose
    window.player = player;

    // Bind event listener
    function on(selector, type, callback) {
      const element = document.querySelector(selector);
      if (element) {
        element.addEventListener(type, callback, false);
      }
    }

    // Play
    on('.js-play', 'click', () => {
      player.play();
    });

    // Pause
    on('.js-pause', 'click', () => {
      player.pause();
    });

    // Stop
    on('.js-stop', 'click', () => {
      player.stop();
    });

    // Rewind
    on('.js-rewind', 'click', () => {
      player.rewind();
    });

    // Forward
    on('.js-forward', 'click', () => {
      player.forward();
    });
  }, []);

  return (
    <div className="container">
      {/* {videoUrl ? ( */}
        <video controls crossOrigin="anonymous" playsInline poster="/poster.png" id="player">
          <source src={videoUrl} type="video/mp4" size="576" />
          {/* <source src="/IMG_8015.MP4" type="video/mp4" size="576" /> */}
          <track kind="captions" label="English" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt" default />
          <track kind="captions" label="Français" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt" />
        </video>
      {/* // ) : (
      //   <p>Loading video...</p>
      // )} */}
    </div>
  );
}

export default Video;