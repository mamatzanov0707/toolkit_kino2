import React, {useState} from 'react';
import logo from './../../img/ono.jpg'
import './Header.scss'
import {Link, NavLink, useNavigate} from "react-router-dom";
import {MdDarkMode} from 'react-icons/md'
import {CiBrightnessUp} from "react-icons/ci";
import {GoSearch} from "react-icons/go";
import {keyboard} from "@testing-library/user-event/dist/keyboard";



const Header = ({getDark} : any) => {
    const [dark , setDark] = useState(false)
    const [counter , setCounter] = useState(false)

    const nav = useNavigate()
    const [value , setValue] = useState('')
    const blockClick = (e:any) =>{
        if (e.key === 'Enter'){
            nav(`/search/movies/${value}`)
            setValue('')
        }
    }
    return (
        <div id='header' className='top-0 sticky'>
            <div className="container">
                <div className='header'>
                    <div className='header--ing'>
                           <Link to={'/'}>
                               <img width={90} src={logo} alt=""/>
                           </Link>
                           <h3>KINO-ONO</h3>
                        <div className='header--link'>
                            <Link  to={'/'}>
                                <a href="#">Home</a>
                            </Link>
                            <Link to={'/about'}>
                                About
                            </Link>
                            <Link to={'/playing'}>
                                Playing
                            </Link>
                            <Link to={'/basket'}>
                                Basket
                            </Link>
                            <Link to={'/favorites'}>
                                Favorites
                            </Link>
                        </div>
                    </div>
                    <div style={{
                        display: counter ? "block" : "none"
                    }}>
                        <input value={value} style={{
                            width:'240px',
                            padding:'10px 10px',
                            borderRadius:'20px',
                            fontSize:'18px',
                            fontWeight:'600'
                        }} onKeyDown={blockClick} onChange={value => setValue(value.target.value)} type="text" placeholder='Search'/>
                    </div>
                    <button onClick={() => setCounter(!counter)}>
                        <GoSearch className='text-2xl'/>
                    </button>
                    <div onClick={getDark}>
                        <button type="button" onClick={() => setDark(!dark)}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium
                                 rounded-lg text-sm px-1.5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
                                 dark:focus:ring-blue-800">
                            {
                                dark ? <MdDarkMode className='text-2xl' style={{color:'wheat' , cursor:'pointer'}}/> : <CiBrightnessUp className='text-2xl' style={{color:'wheat' , cursor:'pointer'}}/>
                            }
                        </button>
                    </div>
                    <select id="countries"
                            className="bg-gray-50 border border-gray-30 text-gray-900 text-sm rounded-lg
                            focus:ring-blue-100 focus:border-blue-100 block p-2 dark:bg-gray-700
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                             dark:focus:border-blue-500">
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>

                </div>
            </div>
        </div>
    );
};

export default Header;