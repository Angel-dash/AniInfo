import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { Button } from "../components";

export const PageNotFound = () => {
	return (
		<main>
			<section className='flex flex-col justify-center px-1'>
				<div className='flex flex-col items-center my-1'>
					<p className='text-7xl text-gray-700 font-bold my-5 dark:text-white'>
						404, Oops!
					</p>
					<div className='max-w-xs '>
						<img
							className='rounded'
							src={PageNotFoundImage}
							alt='404 Page Not Found'
						/>
					</div>
				</div>
				<div className='flex justify-center py-4'>
					<Link to='/'>
						<Button>Back To Cinemate</Button>
					</Link>
				</div>
			</section>
		</main>
	);
};
