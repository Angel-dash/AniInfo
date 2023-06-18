/* import React from 'react'
import{Link} from 'react-router-dom'
export const Card = ({manga}) => {
    const{mal_id, title_english, synopsis,images}=manga;
    const { image_url } = images.jpg;
   
  return (
   
      
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
          <Link to={`/movie/${mal_id}`}>
              <img className="rounded-t-lg" src={image_url} alt="" />
              
          </Link>
          <div className="p-5">
            <Link to={`/movie/${mal_id}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title_english}</h5>
            </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{synopsis}</p>
            
          </div>
      </div>
    

  )
} */
import { Link } from "react-router-dom";


export const Card = ({anime}) => {
    const{mal_id, title_english, synopsis,images}=anime;
    const { image_url } = images.jpg;
 

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to={`/movie/${mal_id}`}>
            <img className="rounded-t-lg" src={image_url} alt="poster of anime" />
        </Link>
        <div className="p-5">
            <Link to={`/movie/${mal_id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title_english}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{synopsis}</p>
        </div>
    </div>
  )
}