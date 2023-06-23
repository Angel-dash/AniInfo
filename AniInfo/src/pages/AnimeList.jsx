import { Card } from "../components";
import { useFetch } from "../../hooks/useFetch";

export const AnimeList = ({ apiPath }) => {
	const { data: animes, loading, error } = useFetch(apiPath, { method: "GET" });

	return (
		<main>
			<section className='max-w-9xl mx-auto py-7'>
				<div className='flex justify-start flex-wrap other:justify-evenly'>
					{loading && <p>Loading...</p>}
					{error && <p>{error.message}</p>}
					{animes &&
						animes.map((anime) => <Card key={anime.mal_id} anime={anime} />)}
				</div>
			</section>
		</main>
	);
};
