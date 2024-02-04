import { useWatchList } from "../../contexts/WatchListContext"
import removeIcon from "../../assets/icons/remove-icon.svg"
import "./list.css"

type ListProps = {
  id: number
  imageUrl: string
  title: string
  year: number
}

export default function List({id, imageUrl, title, year}: ListProps) {

   const {listedMovies, removeFromWatchList} = useWatchList();

   const listedMovie = listedMovies.find(movie => movie.id === id);

   if (listedMovie == null) return;

  return (
    <div className="list">
      <img className="list_img" src={imageUrl} alt="" />
      <p className="list_title">{title} ({year})</p>
      <img src={removeIcon} alt="remove-icon" className="remove-icon" onClick={() => removeFromWatchList(id)} />
    </div>
  )
}
