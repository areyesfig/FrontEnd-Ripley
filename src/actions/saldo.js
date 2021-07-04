import Swal from "sweetalert2";
import { fetchApi } from "../helpers/fetch"
import { types } from "../types/types";


export const consultaSaldo = (rut) => {
    return async( dispatch ) => {

        const resp = await fetchApi('saldo', {rut}, 'POST');
        const body = await resp.json();
        
        if(body.ok){
            dispatch(saldo({
                msg: body.msg
            }))
            Swal.fire('Notificación', `${body.msg}`,'success');
            dispatch( limpiaSaldo());
        }else {
            Swal.fire('Error', `${body.msg}`,'error');
        }
    }
}

const saldo = ( msg ) => ({
    type: types.consultaSaldo,
    payload: msg
});

export const limpiaConsulta = () => {
    return (dispatch) => {
        dispatch( limpiaSaldo());
    }
}

const limpiaSaldo = () => ({type: types.limpiaConsultaSaldo})