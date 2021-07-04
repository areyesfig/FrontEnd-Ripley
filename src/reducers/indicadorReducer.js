import { types } from "../types/types";

const initialState = {
   ok:false,
   valores:[]
}

export const indicadorReducer = (state = initialState,action) => {
    switch (action.type) {
        case types.indicador:
            return{
                ...state,
                ...action.payload
            }
      
        default:
            return state;
    }
}