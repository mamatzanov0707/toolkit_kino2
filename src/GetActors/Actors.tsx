import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {getActorsSuccess} from "../stors/Reducers/Creators";
// @ts-ignore
import Slider from "react-slick";
import logo from './../img/09.jpg'
import {Link} from "react-router-dom";

const Actors = ({actorsId} : any) => {
    const {actors} = useAppSelector(state => state.todoDark)
    const dispatch = useAppDispatch()
    useEffect(() =>{
        dispatch(getActorsSuccess(actorsId))
    },[actorsId])
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
        <div id='actors' style={{
            padding:'30px 0'
        }}>
            <div className="container">
                <div className='actors'>
                  <Slider {...settings}>
                      {
                          actors.map(el =>(
                              <div style={{
                                  margin:'20px'
                              }}>
                                  <Link key={el.id} to={`/movies/page-card/${el.id}`}>
                                      {
                                          el.profile_path ?
                                              <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`} alt=""/> :
                                              <img src={logo} alt=""/>

                                      }
                                  </Link>
                                  <h3 style={{
                                      textAlign:'center',
                                      fontWeight:'500',
                                      fontSize:'16px'
                                  }}>{el.name}</h3>
                              </div>
                          ))
                      }
                  </Slider>
                </div>
            </div>
        </div>
    );
};

export default Actors;