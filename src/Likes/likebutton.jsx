import React, { useState, useEffect } from 'react';
import './likebutton.css'


const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  // Fetch current like count on mount
  useEffect(() => {
    fetchLikes();
  }, []);

  const fetchLikes = async () => {
    try {
      const response = await fetch('/api/likes');
      const likes = await response.json();
      setLikeCount(likes[0]?.like || 0); // Assuming you're storing the total count in 'like'
    } catch (error) {
      console.error('Error fetching likes:', error);
    }
  };

  const handleLike = async () => {
    if (hasLiked) return; // Prevent liking multiple times by the same user

    try {
      // Send a like to the backend
      await fetch('/api/likes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ like: 1 }), // Sending the like to the server
      });

      // Update the like count immediately after the like is submitted
      setLikeCount(likeCount + 1);
      setHasLiked(true); // Mark that the user has liked
    } catch (error) {
      console.error('Error submitting like:', error);
    }
  };

  return (
    <div>
      <button className='like-button' onClick={handleLike} disabled={hasLiked}>
        {hasLiked ? 'You liked this' : 'Like'}
      </button>
      <p className='userCount'>{likeCount} users have liked this.</p>
    </div>
  );
};

export default LikeButton;
