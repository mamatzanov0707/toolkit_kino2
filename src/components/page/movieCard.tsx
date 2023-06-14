import React from 'react';
import {IProduct} from "../../types/interface";
import {NavLink} from "react-router-dom";
import {FiHeart, FiShoppingCart} from "react-icons/fi";
import {useAppDispatch} from "../../hooks/redux";
import {getBasket, getFavorites} from "../../stors/Reducers/Slice";
interface IEl{
    el:IProduct
}

const MovieCard = ({el}:any) => {
    const dispatch = useAppDispatch()
    const Favor = () =>{
        dispatch(getFavorites(el))
    }
    return (
        <div className='home--card'>
            <NavLink key={el.id} to={`/movies/detail-page/${el.id}`}>
                <img width={240} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
            </NavLink>
            <div className='home-titles'>
                <h2 style={{width:'200px'}}>{el.title}</h2>
                <div style={{
                    marginTop:'20px'
                }}>
                    <button onClick={() => dispatch(getBasket(el))} type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                            font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                            focus:outline-none dark:focus:ring-blue-800">
                        <FiShoppingCart className='text-2xl'/>
                    </button>
                    <button onClick={Favor} type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                            font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                            focus:outline-none dark:focus:ring-blue-800">
                        <FiHeart className='text-2xl'/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;