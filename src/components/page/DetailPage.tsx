import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useParams} from "react-router-dom";
import {getPagesSuccess} from "../../stors/Reducers/Creators";
import {VscBookmark, VscHeart, VscListUnordered, VscTriangleRight} from "react-icons/vsc";
import {GoStar} from "react-icons/go";
import Actors from "../../GetActors/Actors";
import actors from "../../GetActors/Actors";
import Video from "../../GetActors/video";

const DetailPage = () => {
    const {page} = useAppSelector(state => state.todoDark)
    const {detailId} = useParams()
    const dispatch = useAppDispatch()
    useEffect(() =>{
        dispatch(getPagesSuccess(detailId))
    },[detailId])
    const  {title, poster_path, release_date, runtime,overview,vote_average} = page
    console.log(page)
    return (
        <>
            <div id='page' style={{
                background: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${poster_path}')no-repeat center/cover`
            }}>
                <div className="container">
                    <div className='page'>
                        <img className='' width={'27%'} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt=""/>
                        <div className='page-tile'>
                            <h2>{title}</h2>
                            <div className='page--foo'>
                                <div className='page--too'>
                                    <h3>{Math.floor(vote_average * 10)}%</h3>
                                </div>
                                <div className='page-icon'>
                                    <a className='page--icons text-2xl' href="#"><VscListUnordered/></a>
                                    <a className='page--icons text-2xl' href="#"><VscHeart/></a>
                                    <a className='page--icons text-2xl' href="#"><VscBookmark/></a>
                                    <a className='page--icons text-2xl' href="#"><GoStar/></a>
                                    <a className='page--icons text-2xl' href="https://youtu.be/qnHwpQJluL4"><VscTriangleRight/></a>
                                    <h6 style={{
                                        color:'red',
                                        fontSize:'18px',
                                        fontWeight:'500'
                                    }}>Play Trailer</h6>
                                </div>
                            </div>
                            <h3>{release_date}</h3>
                            <p>{Math.floor(runtime / 60)} h {runtime % 60} min</p>
                            <p>{overview}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Actors actorsId={detailId}/>
            <Video detailId={detailId}/>
        </>
    );
};

export default DetailPage;