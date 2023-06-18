import { useSearchParams } from "react-router-dom";
import React from "react";
import { Card } from "../components";
import { useFetch } from "../../hooks/useFetch";
export const Search = ({ apiPath }) => {
	const [SearchParams] = useSearchParams();
	const queryTerm = SearchParams.get("q");
	const {
		data: animes,
		loading,
		error,
	} = useFetch(apiPath, queryTerm, { method: "GET" });

	return (
		<main>
			<section className='py-7'>
				<p className='text-3xl text-gray-700 dark:text-white'>
					{animes.lenght === 0
						? `No result found for ${queryTerm}`
						: `Result for ${queryTerm}`}
				</p>
			</section>
			<section className='max-w-9xl mx-auto py-7'>
				<div className='flex justify-start flex-wrap'>
					{loading && <p>Loading...</p>}
					{error && <p>{error.message}</p>}
					{animes &&
						animes.map((anime) => <Card key={anime.mal_id} anime={anime} />)}
				</div>
			</section>
		</main>
	);
};
