import { useOutletContext } from "react-router-dom"
import { movieCardProps } from "./MovieCard";
import "./home.css"

export default function Cast() {

  const {cast}: movieCardProps = useOutletContext();

  return (
    <ul>{cast.map(person => (
      <li key={person} style={{margin: ".5em 0"}}>{person}</li>
    ))}</ul>
  )
}
