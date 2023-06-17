import {Routes,Route} from 'react-router-dom'
import { AnimeList,MovieDetail,Search,PageNotFound} from '../pages'




export const Allroutes = () => {
  return (
    <div className='dark:bg-slate-800' >
      <Routes>
        <Route path="/" element={<AnimeList/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
        <Route path="/movies/popular" element={<AnimeList/>}/>
        <Route path="/movies/top" element={<AnimeList/>}/>
        <Route path="/movies/upcoming" element={<AnimeList/>}/>
        <Route path="search" element={<Search/>}/>

        <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div >
  )
}
