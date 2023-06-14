import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Playing from "./components/Playing/Playing";
import About from "./components/About/About";
import Search from "./components/Search/Search";
import DetailPage from "./components/page/DetailPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoviesPageCard from "./MoviesActors/MoviesPageCard";
import Basket from "./components/Basket/Basket";
import Favorites from "./components/Favorites/Favorites";

function App() {
    const [dark , setDark] = useState(false)
    const getDark = () =>{
        setDark(!dark)
    }
  return (
    <div className="App" style={{
        background: dark ? 'black' : '',
        color : dark ? 'wheat': ''
    }}>
        <Header getDark={getDark}/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/playing'} element={<Playing/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/basket'} element={<Basket/>}/>
            <Route path={'/favorites'} element={<Favorites/>}/>
            <Route path={'/search/movies/:moviesId'} element={<Search/>}/>
            <Route path={'/movies/detail-page/:detailId'} element={<DetailPage/>}/>
            <Route path={'/movies/page-card/:PageId'} element={<MoviesPageCard/>}/>
        </Routes>
    </div>
  );
}

export default App;
