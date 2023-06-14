import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import MovieCard from "../page/movieCard";

const Favorites = () => {
    const {favorites} = useAppSelector(state => state.todoDark)
    return (
        <div id='home'>
           <div className="container">
               <div className='home'>
                   {
                       favorites.map(el => <MovieCard el={el}/>)
                   }
               </div>
           </div>
        </div>
    );
};

export default Favorites;