import React from "react";
import image1 from "../assets/gallery/image1.jpg";
import image2 from "../assets/gallery/image2.jpg";
import image3 from "../assets/gallery/image3.jpg";
import image4 from "../assets/gallery/image4.jpg";
import Tilt from "react-parallax-tilt";

function TestGallery() {
  return (
    <div>
      <div className=" grid grid-cols-3 gap-4">
        <Tilt>
          <img src={image1} alt="image-1" />
        </Tilt>
        <Tilt>
          <img src={image2} alt="image-2" />
        </Tilt>
        <Tilt>
          <img src={image3} alt="image-3" />
        </Tilt>
        <Tilt>
          <img src={image4} alt="image-4" />
        </Tilt>
      </div>
    </div>
  );
}

export default TestGallery;
