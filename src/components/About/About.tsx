import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getAboutSuccess} from "../../stors/Reducers/Creators";
import MovieCard from "../page/movieCard";

const About = () => {
    const {about} = useAppSelector(state => state.todoDark)
    const dispatch = useAppDispatch()
    useEffect(() =>{
        dispatch(getAboutSuccess())
    })
    return (
        <div id='home'>
            <div className="container">
              <div className='home'>
                  {
                      about.map(el => <MovieCard el={el}/>)
                  }
              </div>
            </div>
        </div>
    );
};

export default About;