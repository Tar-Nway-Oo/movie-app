import "../index.css"

type NotFoundProps = {
   text: string
}
export default function NotFound({text}: NotFoundProps) {
  return (
    <div className="not-found">
      <p className="not-found_text">{text}</p>
    </div>
  )
}
