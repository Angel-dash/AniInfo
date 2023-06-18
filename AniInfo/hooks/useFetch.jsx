import { useEffect, useState } from "react";
export const useFetch = (apiPath, queryTerm = "") => {
	const [data, setData] = useState([]);
	const url = `https://api.jikan.moe/v4/${apiPath}?q={queryTerm}`;
	useEffect(() => {
		async function fetchAnimes() {
			const response = await fetch(url);
			const json = await response.json();
			setData(json.data); //Fetching data form the api SO data.data
		}
		fetchAnimes();
	}, [url]);
	return { data };
};
