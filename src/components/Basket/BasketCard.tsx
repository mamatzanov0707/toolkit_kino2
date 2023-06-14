import React from 'react';
import {ICard} from "../../types/interface";
import {IoMdTrash} from "react-icons/io";
import {BsFillPatchMinusFill, BsFillPatchPlusFill} from "react-icons/bs";
import {useAppDispatch} from "../../hooks/redux";
import {getBasket, getDelete, getMinus} from "../../stors/Reducers/Slice";

interface IBasket{
    basket:ICard
}

const BasketCard = ({basket}:any) => {
    const dispatch = useAppDispatch()
    const AddPlus = () =>{
        dispatch(getBasket(basket))
    }
    const Delete = () =>{
        dispatch(getDelete(basket))
    }
    const Minus = () =>{
        dispatch(getMinus(basket))
    }

    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img width={90} src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${basket.poster_path}`} alt=""/>
                </th>
                <td className="px-6 py-4">
                    <h3>{basket.title}</h3>
                </td>
                <td className="px-5 py-9 px-6 my-8 flex justify-between w-[120px] text-lg">
                    <button onClick={Minus}><BsFillPatchMinusFill/></button>
                    <p>{basket.quantity}</p>
                    <button onClick={AddPlus}><BsFillPatchPlusFill/></button>
                </td>
                <td className="px-6 py-4">
                    <a href="#"
                       className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <IoMdTrash onClick={Delete} className='text-2xl' style={{color:'red'}}/>
                    </a>
                </td>
            </tr>
        </>
    );
};

export default BasketCard;