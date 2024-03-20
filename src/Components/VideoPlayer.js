import React from 'react';

function VideoPlayer() {
  return (
    <div className="videoContainer">
      <h2>Video Player</h2>
      <video autoPlay muted loop >
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;