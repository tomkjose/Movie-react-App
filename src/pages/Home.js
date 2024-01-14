import { CarouselHome } from "../component/CarouselHome";
import Loading from "../component/Loading";
import MovieCard from "../component/MovieCard";
import "../styles/home.css";

function Home({ movies }) {
  console.log("movies", movies);
  return (
    <div className="home">
      <CarouselHome />
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie._id} movie={movie} />)
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Home;
