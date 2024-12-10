import Navbar from "../../Components/Navbar";
import { useRef } from "react";
import "./Slider.css"
import HI1 from "../../images/Image_Slider/Spring_Warm/Spring_Warm1.jpg"
import HI2 from "../../images/Image_Slider/Spring_Warm/Spring_Warm2.jpg"
import HI3 from "../../images/Image_Slider/Spring_Warm/Spring_Warm3.jpg"



function SpringWarm() {
    const images = [HI1, HI2, HI3];

  let imageContainerRef = useRef(null);

  const prev = () => (imageContainerRef.current.scrollLeft -= 600);

  const next = () => (imageContainerRef.current.scrollLeft += 600);
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <h1>Spring Warm Color Palette</h1>
      <h1>Outfits of the Day</h1>
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
    </>
  );
}



export default SpringWarm