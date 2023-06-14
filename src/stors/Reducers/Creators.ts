import {AppDispatch} from "../store";
import axios from "axios";
import {APIKEY} from "../../APIKEY/APIKEY";
import {getAbout, getActors, getActorsCard, getCard, getHome, getPage, getPlaying, getSearch, getVideo} from "./Slice";

export const getHomeSuccess = () => async (dispatch :AppDispatch) =>{
    const url = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=ru-RU&page=en-US$page=3`)
    const {data} = url
    dispatch(getHome(data.results))
}

export const getPlayingSuccess = () => async (dispatch : AppDispatch) => {
    const url = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=ru-RU&page=en-US$page=5`)
    const {data} = url
    dispatch(getPlaying(data.results))
}

export const getAboutSuccess = () => async (dispatch :AppDispatch) =>{
    const url = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=ru-RU&page=en-US$page=7`)
    const {data} = url
    dispatch(getAbout(data.results))
}
export const getSearchSuccess = (name:any) => async (dispatch : AppDispatch) =>{
    const url = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${name}`)
    const {data} = await url
    dispatch(getSearch(data.results))
}

export const getPagesSuccess = (id : any) => async (dispatch : AppDispatch) => {
    const url = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`)
    const {data} = await url
    dispatch(getActors(data))
}

export const getActorsSuccess = (id : any) => async (dispatch : AppDispatch) => {
    const url = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=en-US`)
    const {data} = await url
    dispatch(getPage(data.cast))
}

export const getVideoSuccess = (id: string) => async (dispatch : AppDispatch) => {
    const video = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=en-US`)
    const {data} = await video
    dispatch(getVideo(data.results))
}

export const getCardSuccess = (id:any) => async (dispatch : AppDispatch) => {
    const card = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${APIKEY}&language=en-US`)
    const {data} = await card
    dispatch(getCard(data))
}

export const getActorsCardSuccess = (id : any) => async (dispatch : AppDispatch) => {
    const url = await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${APIKEY}&language=en-US`)
    const {data} = await url
    dispatch(getActorsCard(data.cast))
}