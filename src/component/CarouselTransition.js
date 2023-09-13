import React from "react";

function CarouselTransition({ image }) {
  return (
    <div className="gallery-image">
      {image.map((i, index) => {
        return <img src={i} alt={index} className="gallery-thumbnail" />;
      })}
    </div>
  );
}

export default CarouselTransition;
