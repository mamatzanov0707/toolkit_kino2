import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {getActorsCardSuccess} from "../stors/Reducers/Creators";
import Slider from "react-slick";
import logo from './../img/09.jpg'
import {NavLink} from "react-router-dom";

const ActorsCard = ({PageId} : any) => {
    const {actorsCard} = useAppSelector(state => state.todoDark)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getActorsCardSuccess(PageId))
    },[PageId])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 7,
        autoplay: true,
        autoplaySpeed: 1300,
        pauseOnHover: true
    };
    return (
        <div id='too'>
            <div className="container">
               <Slider {...settings}>
                   {
                       actorsCard.map(el =>(
                           <div>
                            <NavLink key={el.id} to={`/movies/detail-page/${el.id}`}>
                                {
                                    el.poster_path ?
                                        <img style={{borderRadius:'10px'}} src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2${el.poster_path}`} alt=""/>:
                                        <img src={logo} alt=""/>
                                }
                                <h3 style={{
                                    textAlign:'center',
                                    fontWeight:'600',
                                }}>{el.title}</h3>
                            </NavLink>
                           </div>
                       ))
                   }
               </Slider>
            </div>
        </div>
    );
};

export default ActorsCard;