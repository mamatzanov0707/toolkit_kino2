import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getPlayingSuccess} from "../../stors/Reducers/Creators";
import MovieCard from "../page/movieCard";

const Playing = () => {
    const {playing} = useAppSelector(state => state.todoDark)
    const dispatch = useAppDispatch()
    useEffect(() =>{
        dispatch(getPlayingSuccess())
    },[])
    return (
        <div id='home'>
           <div className="container">
               <div className='home'>
                   {
                       playing.map(el => <MovieCard el={el}/>)
                   }
               </div>
           </div>
        </div>
    );
};

export default Playing;