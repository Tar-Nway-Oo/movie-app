import { Dispatch , SetStateAction} from "react"
import { useOutletContext, useSearchParams } from "react-router-dom"
import MovieCard from "../components/home/MovieCard"
import NotFound from "../components/NotFound"
import FilterButton from "../components/home/FilterButton"
import movieData from "../data/movies.json"
import genres from "../data/genres.json"
import "../components/home/home.css"

export type OutletContext = {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  isOpenSearchBar: boolean
  isOpenSearchParams: boolean
  setIsOpenSearchParams: Dispatch<SetStateAction<boolean>>
}

export default function Home() {

  const {search, setSearch, isOpenSearchBar, isOpenSearchParams}: OutletContext = useOutletContext();
  const [searchParams, _] = useSearchParams();

  const queryParams = searchParams.toString();
  const genreParams = searchParams.get("genre");

  const genreFilteredMovies = genreParams ? movieData.filter(movie => movie.genre.map(g => g.toLowerCase()).includes(genreParams)) : movieData;

  const filteredMovies = search ? genreFilteredMovies.filter(movie => (movie.title.toLowerCase()).includes(search.toLowerCase())) : genreFilteredMovies;

  return (
    <div className="home-page">
         <div className={`filter-btn-group ${isOpenSearchParams ? "open-filter-btn-group": ""}`}>
            {genres.map(genre => (
              <FilterButton key={genre} genre={genre} genreParams={genreParams} />
            ))}
         </div>
         <input className={`search-input ${isOpenSearchBar ? "open-search-input" : ""}`} type="text" placeholder="search by title" value={search} onChange={(e) => setSearch(e.target.value)} />
        { filteredMovies.length > 0 ?
          <div className="movie-card-container">
            {filteredMovies.map(movie => (
              <MovieCard key={movie.id} {...movie} queryParams={queryParams} />
            ))}
         </div> :
         <NotFound text="No Match Found !" />
        }
    </div>
  )
}
