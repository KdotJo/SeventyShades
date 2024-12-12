import React, { useState } from "react";

import './likebutton.css';

function Likes () {
    const [like, setLike] = useState([])
    const [likeactive, setlikeactive] = useState(false)

    React.useEffect(() => {
        fetch('/api/springwarmtone')
          .then((response) => response.json())
          .then((like) => {
            setLike(like);
          });
      }, []);

      React.useEffect(() => {
        fetch('/api/springcoldtone')
          .then((response) => response.json())
          .then((like) => {
            setLike(like);
          });
      }, []);

      React.useEffect(() => {
        fetch('/api/summerwarmtone')
          .then((response) => response.json())
          .then((like) => {
            setLike(like);
          });
      }, []);

      React.useEffect(() => {
        fetch('/api/summercoldtone')
          .then((response) => response.json())
          .then((like) => {
            setLike(like);
          });
      }, []);

      React.useEffect(() => {
        fetch('/api/fallwarmtone')
          .then((response) => response.json())
          .then((like) => {
            setLike(like);
          });
      }, []);

      React.useEffect(() => {
        fetch('/api/fallcoldtone')
          .then((response) => response.json())
          .then((like) => {
            setLike(like);
          });
      }, []);

      React.useEffect(() => {
        fetch('/api/winterwarmtone')
          .then((response) => response.json())
          .then((like) => {
            setLike(like);
          });
      }, []);

      React.useEffect(() => {
        fetch('/api/wintercoldtone')
          .then((response) => response.json())
          .then((like) => {
            setLike(like);
          });
      }, []);

    function likef() {
        if(likeactive){
            setlikeactive(false)
            setLike(like-1)
        }else {
            setlikeactive(true)
            setLike(like+1)
        }
    }  

    return (
        <main className="likebutton-main">
            <div className="likebutton-div">
                <button className='likebutton'onClick={likef}>❤️{like}</button>
            </div>
        </main>
    )
}

export default Likes