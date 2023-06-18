import { Routes, Route } from "react-router-dom";
import { AnimeList, MovieDetail, Search, PageNotFound } from "../pages";

export const Allroutes = () => {
	return (
		<div className='dark:bg-slate-800'>
			<Routes>
				<Route path='/' element={<AnimeList apiPath='top/manga' />} />
				<Route path='/movie/:id' element={<MovieDetail />} />
				<Route
					path='/movies/popular'
					element={<AnimeList apiPath='seasons/now' />}
				/>
				<Route path='/movies/top' element={<AnimeList apiPath='top/anime' />} />
				<Route
					path='/movies/upcoming'
					element={<AnimeList apiPath='seasons/upcoming' />}
				/>
				<Route path='/search' element={<Search apiPath='anime' />} />

				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</div>
	);
};
