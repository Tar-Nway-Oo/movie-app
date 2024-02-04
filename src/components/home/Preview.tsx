import { useOutletContext } from "react-router-dom"
import { movieCardProps } from "./MovieCard";
import "./home.css"

export default function Preview() {

  const {preview}: movieCardProps = useOutletContext();

  return (
    <p className="movie-detail_preview"><span style={{marginLeft: "10px"}}></span>{preview}</p>
  )
}
