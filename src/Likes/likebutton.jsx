import React, { useState, useEffect } from 'react';
import './likebutton.css'



const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    fetchLikes();

    // Set up WebSocket connection
    const socket = new WebSocket('ws://localhost:3000');
    socket.onopen = () => {
      console.log('WebSocket connected');
    };
    socket.onmessage = (message) => {
      const data = JSON.parse(message.data);
      if (data.likeCount !== undefined) {
        setLikeCount(data.likeCount); // Update the like count from WebSocket
      }
    };
    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const fetchLikes = async () => {
    try {
      const response = await fetch('/api/likes');
      const likes = await response.json();
      setLikeCount(likes[0]?.like || 0); // Get the initial like count
    } catch (error) {
      console.error('Error fetching likes:', error);
    }
  };

  const handleLike = async () => {
    if (hasLiked) return;

    try {
      await fetch('/api/likes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ like: 1 }),
      });

      setLikeCount(likeCount + 1);
      setHasLiked(true);
    } catch (error) {
      console.error('Error submitting like:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLike} disabled={hasLiked}>
        {hasLiked ? 'You liked this' : 'Like'}
      </button>
      <p>{likeCount} users have liked this.</p>
    </div>
  );
};

export default LikeButton;
