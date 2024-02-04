import { Routes, Route } from "react-router-dom"
import { WatchListContextProvider } from "./contexts/WatchListContext"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Watchlist from "./pages/Watchlist"
import MovieDetail from "./components/home/MovieDetail"
import Preview from "./components/home/Preview"
import Trailer from "./components/home/Trailer"
import Cast from "./components/home/Cast"

function App() {

  return (
      <WatchListContextProvider>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":id"  element={<MovieDetail />}>
             <Route index element={<Preview />} />
             <Route path="trailer" element={<Trailer />} />
             <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="watch-list" element={<Watchlist />} />
        </Route>
       </Routes>
     </WatchListContextProvider>
  )
}

export default App
