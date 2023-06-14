import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IMovie {
    home:any[]
    playing:any[]
    about:any[]
    search:any[]
    page:Partial<any>
    actors:any[]
    video: any[]
    card:Partial<any>
    actorsCard:any[]
    basket:any[]
    favorites:any[]
}

const initialState:IMovie = {
    home:[],
    playing:[],
    about:[],
    search:[],
    page:{},
    actors:[],
    video:[],
    card:{},
    actorsCard:[],
    basket:[],
    favorites:[]
}

export const todoDark = createSlice({
    name: 'dark',
    initialState,
    reducers: {
        getHome(state , action : PayloadAction<any[]>){
            state.home = action.payload
        },
        getPlaying(state , action:PayloadAction<any[]>){
            state.playing = action.payload
        },
        getAbout(state , action : PayloadAction<any[]>){
            state.about = action.payload
        },
        getSearch(state , action :PayloadAction<any[]>){
            state.search = action.payload
        },
        getActors(state , action:PayloadAction<any>){
            state.page = action.payload
        },
        getPage(state , action:PayloadAction<any[]>){
            state.actors = action.payload
        },
        getVideo(state , action :PayloadAction<any>){
            state.video  = action.payload
        },
        getCard(state , action: PayloadAction<any[]>){
            state.card = action.payload
        },
        getActorsCard(state , action :PayloadAction<any[]>){
            state.actorsCard = action.payload
        },
        getBasket(state , action:PayloadAction<any>){
            const FundBasket = state.basket.find(el => el.id === action.payload.id)
            if (FundBasket){
                state.basket = state.basket.map(el => el.id === FundBasket.id ? {...el,quantity : el.quantity + 1} : el)
            }else {
                state.basket = [... state.basket , {...action.payload , quantity : 1}]
            }
        },
        getDelete(state , action :PayloadAction<any>){
            state.basket = state.basket.filter(el => el.id !== action.payload.id)
        },
        getMinus(state , action:PayloadAction<any>){
            state.basket = state.basket.map(el =>{
                if (el.id === action.payload.id){
                    if (el.quantity > 1){
                        return {...el,quantity : el.quantity -1}
                    }else return el
                }else return el
            })
        },
        getFavorites(state , action :PayloadAction<any>){
            const FundFavor = state.favorites.find(el => el.id === action.payload.id)
            if (FundFavor){
                state.favorites = state.favorites.filter(el => el.id !== FundFavor.id )
            }else {
                state.favorites = [...state.favorites, {...action.payload , }]
            }
        },
        getDeletes(state , action : PayloadAction<any>){
            state.favorites = state.favorites.filter(el => el.id !== action.payload.id)
        }
    }
})
export default todoDark.reducer
export const {getHome , getPlaying , getAbout , getSearch ,
    getActors , getPage , getVideo , getCard , getActorsCard
    , getBasket , getDelete , getMinus , getFavorites , getDeletes} = todoDark.actions