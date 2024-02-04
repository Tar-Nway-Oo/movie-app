import { useSearchParams, useOutletContext } from "react-router-dom"
import { OutletContext } from "../../pages/Home"
import movieData from "../../data/movies.json"
import "./home.css"

type FilterButtonProps = {
   genre: string  | null
   genreParams: string | null
}

export default function FilterButton({genre, genreParams}: FilterButtonProps) {

   const [_, setSearchParams] = useSearchParams();

   const {setIsOpenSearchParams}:  OutletContext= useOutletContext();

   const genreText = genre ? genre[0].toUpperCase() + genre.slice(1) : "All";

   const numberOfMovies = genre ? (movieData.filter(movie => lowerCaseArray(movie.genre).includes(genre))).length : null;

   function lowerCaseArray(array: string[]) {
      return array.map(string => {
        return string.toLowerCase();
      });
   }

   function handleGenreFilter(type: string | null) {
      setSearchParams(prevParams => {
       if (type === null) {
         prevParams.delete("genre")
        } else {
          prevParams.set("genre", type)
        }
         return prevParams
      })
      setIsOpenSearchParams(false)
   }

  return (
    <button className={`filter-btn ${genreParams === genre ? "selected-btn" : ""}`} onClick={() => handleGenreFilter(genre)}>{genreText} {numberOfMovies && <span className="movie-number">{numberOfMovies}</span>}</button>
  )
}
