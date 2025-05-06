import { useEffect, useState } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import './index.css';

function Video() {
  const [videoUrl, setVideoUrl] = useState('');

  // Fetch video URL on mount.
  useEffect(() => {
    fetch('https://patriot-music.online/api/videos/2')
      .then(response => response.json())
      .then(data => {
        setVideoUrl(data.url);
      })
      .catch(error => console.error('Error fetching video URL:', error));
  }, []);

  // Initialize Plyr once the video URL is available.
  useEffect(() => {
    if (!videoUrl) return;
    const player = new Plyr('#player', { autoplay: false });
    window.player = player;
    // Bind event listeners.
    function on(selector, type, callback) {
      const element = document.querySelector(selector);
      if (element) {
        element.addEventListener(type, callback, false);
      }
    }
    on('.js-play', 'click', () => { player.play(); });
    on('.js-pause', 'click', () => { player.pause(); });
    on('.js-stop', 'click', () => { player.stop(); });
    on('.js-rewind', 'click', () => { player.rewind(); });
    on('.js-forward', 'click', () => { player.forward(); });
  }, [videoUrl]);

  return (
    <div className="container-video">
      <video controls crossOrigin="anonymous" playsInline poster="/poster.png" id="player">
        <source src={videoUrl} type="video/mp4" size="576"/>
      </video>
    </div>
  );
}

export default Video;