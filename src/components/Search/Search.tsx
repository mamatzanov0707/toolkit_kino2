import React, {useEffect} from 'react';
import {GoSearch} from "react-icons/go";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Link, useParams} from "react-router-dom";
import {getSearchSuccess} from "../../stors/Reducers/Creators";

const Search = () => {
    const {search} = useAppSelector(state => state.todoDark)
    const dispatch = useAppDispatch()
    const {moviesId} = useParams()
    useEffect(() =>{
        dispatch(getSearchSuccess(moviesId))
    },[moviesId])
    return (
       <div id='home'>
           <div className="container">
               <div className='home'>
                   {
                       search.map(el =>(
                           <div style={{
                               border:'12px solid red',
                               borderRadius:'10px',
                               alignItems:'center',
                               margin:'20px',
                               background:'red'
                           }}>
                               <Link key={el.id} to={`/movies/detail-page/${el.id}`}>
                                   <img width={230} src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                               </Link>
                               <h3 style={{width:'200px',fontWeight:'700', textAlign:'center' , padding:'10px 0'}}>{el.title}</h3>
                           </div>
                       ))
                   }
               </div>
           </div>
       </div>
    );
};

export default Search;