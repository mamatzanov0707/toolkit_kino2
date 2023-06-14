import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {getVideoSuccess} from "../stors/Reducers/Creators";
import Slider from "react-slick";

const Video = ({detailId} : any) => {
    const {video} = useAppSelector(state => state.todoDark)
    const dispatch = useAppDispatch()
    useEffect(() =>{
        dispatch(getVideoSuccess(detailId))
    },[detailId])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 7,
        autoplay: true,
        autoplaySpeed: 1300,
        pauseOnHover: true
    };
    return (
        <div id='video' style={{
            padding:'30px 0'
        }}>
            <div className="container">
                <Slider {...settings}>
                    {
                        video.map(el =>(
                            <div>
                                <iframe width="280" height="280" src={`https://www.youtube.com/embed/${el.key}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Video;