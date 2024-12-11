import React from "react";
import "../../Season-tones.css"
import { useRef } from "react";
import HI1 from "../../../images/Slider/Fall_Warm/Fall_Warm1.jpg";
import HI2 from "../../../images/Slider/Fall_Warm/Fall_Warm2.jpg";
import HI3 from "../../../images/Slider/Fall_Warm/Fall_Warm3.jpg";

function FallWT() {
  let imageContainerRef = useRef(null);
  const images = [HI1, HI2, HI3];
  const prev = () => (imageContainerRef.current.scrollLeft -= 600);
  const next = () => (imageContainerRef.current.scrollLeft += 600);

  return (
    <main>
      <h1> Fall Warm Tone </h1>
      <h2 className="fct"> Outfit of the Day </h2>
      <div className="page-container">
        <div className="content">
          <div className="prev" onClick={prev}></div>
          <div className="slide-panel" ref={imageContainerRef}>
            {images.map((image) => {
              return <img className="Slider-image" src={image} />;
            })}
          </div>
          <div className="next" onClick={next}></div>
        </div>
      </div>
    </main>
  );
}

export default FallWT;
