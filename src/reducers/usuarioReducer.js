import { types } from "../types/types";

const initialState = {
   ok:false,
   msg:null
}

export const usuarioReducer = (state = initialState,action) => {
    switch (action.type) {
        case types.consultaSaldo:
            return{
                ...state,
                ...action.payload
            }

        case types.limpiaConsultaSaldo:
            return{
                ...state,
                msg:null
            }
        default:
            return state;
    }
}