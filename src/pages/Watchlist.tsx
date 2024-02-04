import { useWatchList } from "../contexts/WatchListContext"
import List from "../components/watch-list/List"
import movieData from "../data/movies.json"
import NotFound from "../components/NotFound";
import "../components/watch-list/list.css"

export default function Watchlist() {

  const {numberOfListedMovies} = useWatchList();

  return (
    <div>{numberOfListedMovies > 0 ?
      <div className="list-container">
        {movieData.map(movie => (
          <List key={movie.id} {...movie} />
        ))}
      </div> :
         <NotFound text="The List Is Empty !" />
    }</div>
    
  )
}
