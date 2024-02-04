import { createContext, useContext, ReactNode } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

type WatchListContextProviderProps = {
   children: ReactNode
}

type watchListContext = {
   listedMovies: listedMovies[]
   numberOfListedMovies: number
   addToWatchList: (id: number) => void
   removeFromWatchList: (id: number) => void
}

type listedMovies = {
   id: number
   isListed: boolean
}

const watchListContext = createContext({} as watchListContext);

export function useWatchList() {
   return useContext(watchListContext);
}

export function WatchListContextProvider({children}: WatchListContextProviderProps) {

  const [listedMovies, setListedMovies] = useLocalStorage<listedMovies[]>("movie-list", []);

  const numberOfListedMovies = listedMovies.length;

  function addToWatchList(id: number) {
     setListedMovies(prevArray => {
       if (prevArray.find(movie => movie.id === id) == null) {
         return [...prevArray, {id, isListed: true}]
       } else {
         return prevArray
       }
     })
  }

  function removeFromWatchList(id: number) {
   setListedMovies(prevArray => {
     return prevArray.filter(movie => movie.id !== id)
  })
  }

  return (
    <watchListContext.Provider value={{listedMovies, numberOfListedMovies, addToWatchList, removeFromWatchList}}>
      {children}
    </watchListContext.Provider>
  )
}
