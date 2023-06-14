import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {getCardSuccess} from "../stors/Reducers/Creators";
import {useParams} from "react-router-dom";
import ActorsCard from "./ActorsCard";

const MoviesPageCard = () => {
    const {card} = useAppSelector(state => state.todoDark)
    const dispatch = useAppDispatch()
    const {PageId} = useParams()
    const [product , setProduct] = useState(200)
    const play = (text:any) =>{
        if (product === 200){
            setProduct(text.length)
        }else {
            setProduct(200)
        }
    }
    useEffect(() =>{
        dispatch(getCardSuccess(PageId))
    },[PageId])
    const {profile_path , biography , birthday ,deathday , name} = card
    return (
        <>
            <div id='card'>
                <div className="container">
                    <div className='card'>
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`} alt=""/>
                        <div className='card--title'>
                            <p>{name}</p>
                            <h2>{birthday}</h2>
                            <h4>{deathday}</h4>
                            <h5>Биография</h5>
                            <h3>{biography && biography.slice(0,product)}</h3>
                            {biography && biography.length > 200 && <span
                                onClick={() => play(biography)}
                                style={{cursor:'pointer'}}
                            >{product === 200 ? 'читать дальше...' : 'закрыт...'}
                        </span>}
                        </div>
                    </div>
                </div>
            </div>
            <ActorsCard PageId={PageId}/>
        </>
    );
};

export default MoviesPageCard;