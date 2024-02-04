import { useOutletContext } from "react-router-dom"
import { movieCardProps } from "./MovieCard";
import "./home.css"

export default function Trailer() {

  const {title, trailer}: movieCardProps = useOutletContext();
  return (
    <div>
      <iframe className="movie-detail_trailer" src={trailer} title={title}></iframe>
    </div>
  )
}
