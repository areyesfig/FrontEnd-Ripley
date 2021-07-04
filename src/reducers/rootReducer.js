import { indicadorReducer } from "./indicadorReducer";
import { usuarioReducer } from "./usuarioReducer";

const { combineReducers } = require("redux");

export const rootReducer = combineReducers({
    usuario: usuarioReducer,
    indicador: indicadorReducer,
});