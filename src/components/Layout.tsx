import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { useWatchList } from "../contexts/WatchListContext"
import hamburgerIcon from "../assets/icons/hamburger-icon.svg"
import searchIcon from "../assets/icons/search-icon.svg"
import "../index.css"

export default function Layout() {

   const [search, setSearch] = useState("");
   const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);
   const [isOpenSearchParams, setIsOpenSearchParams] = useState(false);
   const {numberOfListedMovies} = useWatchList();

  return (
    <div>
      <div className="nav-bar">
        <img src={hamburgerIcon} alt="hamburger-icon" className={`hamburger-icon ${isOpenSearchParams ? "open-hamburger" : ""}`} onClick={() => setIsOpenSearchParams(prev => !prev)} />
        <h1 className="nav-bar_heading">Movie App</h1>
        <img src={searchIcon} alt="search-icon" className={`search-icon ${isOpenSearchBar ? "open-search" : ""}`} onClick={() => setIsOpenSearchBar(prev => !prev)} />
        <NavLink className={({isActive}) => isActive ? "active-nav-bar_link" : "nav-bar_link"} to={"/"}>Home</NavLink>
        <NavLink className={({isActive}) => isActive ? "active-nav-bar_link" : "nav-bar_link"} to={"watch-list"}>Watchlist {numberOfListedMovies > 0 && <span className="list-number">{numberOfListedMovies}</span>}</NavLink>
      </div>
      <Outlet context={{search, setSearch, isOpenSearchBar, isOpenSearchParams, setIsOpenSearchParams}} />
    </div>
  )
}
