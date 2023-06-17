/* import React, { useState, useEffect } from "react";
import { Card } from "../components";
export const AnimeList = () => {
	const [mangas, setManga] = useState([]);
	
	useEffect(() => {
		async function fetchMovies() {
			const response = await fetch(
				"https://api.jikan.moe/v4/manga"
			);
			const data = await response.json();
			setManga(data.data);
		}
		fetchMovies();
	}, []);
	return (
		<main>
			<section className='max-w-7xl mx-auto py-7'>
				<div className='flex justify-start flex wrap'>
					{mangas.map((manga) => (
						<Card key={manga.mal_id} manga={manga} />
					))}
				</div>
			</section>
		</main>
	);
}; */
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "../components";

export const AnimeList = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    async function fetchAnimes(){
      const response = await fetch("https://api.jikan.moe/v4/anime?q=ongoing");
      const data = await response.json();
      setAnimes(data.data);
    }
    fetchAnimes();
  }, [])

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">       
          { animes.map((anime) => (
            <Card key={anime.mal_id} anime={anime} />
          )) }          
        </div>
      </section>
    </main>
  )
}