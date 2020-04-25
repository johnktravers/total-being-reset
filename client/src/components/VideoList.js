import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/videos')
      .then(res => setVideos(res.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <ul>
        {
          videos.map(video => <li key={video.id}>{video.title}</li>)
        }
      </ul>
    </div>
  )
}

export default VideoList;
