import { Carousel } from "@material-tailwind/react";

export function CarouselTransition({ image = [] }) {
  if (!Array.isArray(image) || image.length === 0) {
    return (
      // You can render a placeholder or error message here
      <div>No images available</div>
    );
  }

  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      {image.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`image ${index + 1}`}
          className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  );
}
