import { CarouselHome } from "../component/CarouselHome";
import MovieCard from "../component/MovieCard";
import "../styles/home.css";

function Home({ movies }) {
  return (
    <div className="home">
      <CarouselHome />
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
