import React, { useState } from 'react';

function VideoDisplay({ selectedVideo }) {
  return (
    <div className="video-display">
      <h2>{selectedVideo.title}</h2>
      <video src={selectedVideo.url} controls width="500" height="300" />
    </div>
  );
}

function VideoMenu({ videos, onSelectVideo }) {
  return (
    <div className="video-menu">
      <ul>
        {videos.map((video) => (
          <li key={video.id} onClick={() => onSelectVideo(video)}>
            {video.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
  };

  const videos = [
    {
      id: 1,
      title: 'Video 1',
      url: 'https://example.com/video1.mp4',
    },
    {
      id: 2,
      title: 'Video 2',
      url: 'https://example.com/video2.mp4',
    },
    {
      id: 3,
      title: 'Video 3',
      url: 'https://example.com/video3.mp4',
    },
  ];

  return (
    <div className="app">
      <h1>Video Player</h1>
      <div className="video-container">
        <VideoDisplay selectedVideo={selectedVideo} />
        <VideoMenu videos={videos} onSelectVideo={handleSelectVideo} />
      </div>
    </div>
  );
}

export default App;
