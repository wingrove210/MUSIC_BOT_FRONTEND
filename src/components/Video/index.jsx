import { useEffect } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import './index.css';

function Video() {
  useEffect(() => {
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
      <video controls crossOrigin="anonymous" playsInline poster="/poster.png" id="player">
        <source src="/IMG_8015.MP4" type="video/mp4" size="576" />
        <track kind="captions" label="English" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt" default />
        <track kind="captions" label="Français" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt" />
      </video>
    </div>
  );
}

export default Video;