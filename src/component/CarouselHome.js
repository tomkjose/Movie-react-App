import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function CarouselHome() {
  return (
    <Carousel className="rounded-xl h-80 overflow-hidden hidden  md:flex	">
      <div className="relative h-full w-full">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhb9wwCQGEZlYsdp4wWJROL5dRdxO1CGtuf4AhELJxUbXTxooME3YDjsusxM7k1jGh6cenFpgb6cP2mvmKhpekmtsA5yKWt5oKuQactDcZE87jCCD0XSArSaL23jFVYRUwxSnJ78RYM4efEneKKrfQrOU2G8weYNcLLPlvVMiaqvVSS9ZYI0vPDeJjbVCPJ/s1203/Screenshot%202023-09-10%20124646.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Oppenheimer
            </Typography>

            <div className="flex justify-center gap-2">
              <Button size="lg" color="red">
                <Link to="/movie/64fd7522f6cf357230714efe"> Explore</Link>
              </Button>
              <Button size="lg" color="red" variant="outlined">
                <a
                  href="https://www.youtube.com/watch?v=uYPbbksJxIg&ab_channel=UniversalPictures"
                  target="_blank"
                >
                  Trailer
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgb-xYWr3uQYH7XrvkTEZlXphTQqpW8Hqmb2F802wnWw3fivrdysd7_nSEkbk_JsGqoaelkRzR26kS2MbOJPOAYu-VquDQcPK3DWns5AgCdtfZv3yOWrI68OFGoBKSY7eWJ0-qsEhIWWWhNpWTwg8HOSdLsDOqP92p4OYk5mqZaTvsQkUny9YVwsgyKwwa/s1257/Screenshot%202023-09-10%20135904.png"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Breaking Bad
            </Typography>

            <div className="flex gap-2">
              <Button size="lg" color="red">
                <Link to="/movie/64fd80f0e880b76167147d8b"> Explore</Link>
              </Button>
              <Button size="lg" color="red" variant="outlined">
                <a
                  href="https://www.youtube.com/watch?v=HhesaQXLuRY&ab_channel=TrailerBlend"
                  target="_blank"
                >
                  Trailer
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNZnFu3TAULXIa3CubHHBEF1sRQ7jNWKaPABzfKnZsKItJCRC74PuqZPsfJjDqDcLBnyBMr8Rg47XMIHewpBikVww7BxwikOv2GbaNe-uKf-Aw4EfjwDeSFDYh1Mhpf9T-G_XwcuyFKjwVtN9dgnv5nysAV-2V7jfMqQvd-N8DIVc31gm4KdSN0mn_T9CE/s1471/Screenshot%202023-09-10%20133438.png"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-3xl lg:text-4xl"
            >
              Spider-Man: Across the Spider-Verse
            </Typography>

            <div className="flex gap-2">
              <Button size="lg" color="red">
                <Link to="/movie/64fd7990f6cf357230714f07"> Explore</Link>
              </Button>
              <Button size="lg" color="red" variant="outlined">
                <a
                  href="https://www.youtube.com/watch?v=shW9i6k8cB0&ab_channel=SonyPicturesEntertainment"
                  target="_blank"
                >
                  Trailer
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
