import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getHomeSuccess} from "../../stors/Reducers/Creators";
import MovieCard from "../page/movieCard";

const Home = () => {
    const {home} = useAppSelector(state => state.todoDark)
    const dispatch = useAppDispatch()
    useEffect(() =>{
        dispatch(getHomeSuccess())
    },[])
    console.log(home)
    return (
        <div id='home'>
           <div className='container'>
               <div className='home'>
                   {
                       home.map(el => <MovieCard el={el}/>)
                   }
               </div>
           </div>
        </div>
    );
};

export default Home;