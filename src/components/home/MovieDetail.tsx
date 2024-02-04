import { useParams, useLocation, NavLink, Link, Outlet } from "react-router-dom"
import { useWatchList } from "../../contexts/WatchListContext";
import movieData from "../../data/movies.json"
import previousIcon from "../../assets/icons/previous-icon.svg"
import starIcon from "../../assets/icons/star-icon.svg"
import "./home.css"

export default function MovieDetail() {

   const param = useParams();
   const selectedId = param.id;
   const selectedMovie = movieData.find(movie => (movie.id).toString() === selectedId);

   const location = useLocation();
   const search = location.state?.search || "";
   const {addToWatchList, listedMovies} = useWatchList();

   if (selectedMovie == null) return;

   const {id, imageUrl, title, year, genre, rating} = selectedMovie;

   const isListed: boolean = listedMovies.find(movie => movie.id === id) != null;
   
   return (
      <div className="movie-detail">
         <div className="movie-detail_top">
           <Link className="previous-link" to={`..${search}`}>
            <img src={previousIcon} alt="previous-icon" className="previous-icon" />
            <span>Back to previous page</span>
           </Link>
           <img className="movie-detail_img" src={imageUrl} alt={`poster of ${title}`} />
           <button className="add-btn" onClick={() => addToWatchList(id)} disabled={isListed}>
            {isListed ? "Added" : "+ Watchlist"}
           </button>
         </div>
         <div>
           <p className="movie-detail_title">{title} ({year})</p>
           <p className="movie-detail_genre">{genre.join(" / ")}</p>
           <div className="movie-detail_rating"><img src={starIcon} alt="star-icon" className="star-icon"/><span>{rating} / 10</span></div>
           <div className="movie-detail_nav-links">
             <NavLink end className={({isActive}) => isActive ? "active-link" : "movie-detail_nav-link"} to={"."}>Preview</NavLink>
             <NavLink className={({isActive}) => isActive ? "active-link" : "movie-detail_nav-link"} to={"trailer"}>Trailer</NavLink>
             <NavLink className={({isActive}) => isActive ? "active-link" : "movie-detail_nav-link"} to={"cast"}>Cast</NavLink>
           </div>
           <Outlet context={selectedMovie} /> 
         </div>
      </div>
   )
}
