import { Link } from "react-router-dom"
import "./home.css"

export type movieCardProps = {
    id: number
    imageUrl: string
    title: string
    year: number
    genre: string[]
    rating: number
    preview: string
    trailer: string
    cast: string[]
    queryParams: string | null
}

export default function MovieCard({id, imageUrl, title, year, queryParams}: movieCardProps) {
  return (
     <div className="movie-card">
       <Link className="movie-card_link" to={`/${id}`} state={{search: `?${queryParams}`}}>
         <img className="movie-card_img" src={imageUrl} alt={`poster of ${title}`} />
         <p className="movie-card_title">{title}</p>
         <p className="movie-card_year">{year}</p>
       </Link>
     </div>
  )
}
