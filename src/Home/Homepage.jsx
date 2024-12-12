import React from "react";
import './Homepage.css'
import img1 from "../images/Home_Page/Home_img1.jpg";
import img2 from "../images/Home_Page/Home_img2.jpg";
import img3 from "../images/Home_Page/Home_img3.jpg";
import img4 from "../images/Home_Page/Home_img4.jpg";
import img5 from "../images/Home_Page/Home_img5.jpg";
import img6 from "../images/Home_Page/Home_img6.jpg";
import img7 from "../images/Home_Page/Home_img7.jpg";

function Home() {
  return (
    <main>
      <h1>Welcome to Seventy Shades</h1>
      <div>
        <img src={img1} alt="img1" className="img1" />
        <img src={img2} alt="img2" className="img2" />
        <img src={img3} alt="img3" className="img3" />
        <img src={img4} alt="img4" className="img4" />
        <img src={img5} alt="img5" className="img5" />
        <img src={img6} alt="img6" className="img6" />
        <img src={img7} alt="img7" className="img7" />
      </div>
      <h2>Top Liked Outfits</h2>
      <div><a href="https://github.com/KdotJo/SeventyShades">Github</a></div>
    </main>
  );
}

export default Home;
