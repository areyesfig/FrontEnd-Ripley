import Swal from "sweetalert2";
import { fetchApi } from "../helpers/fetch"
import { types } from "../types/types";

export const transferencia = (cuentaOrigen,cuentaDestino,monto) => {
    return async( dispatch ) => {
        
        
        const resp = await fetchApi('transferencia', {cuentaOrigen,cuentaDestino,monto}, 'POST');
       
        const body = await resp.json();
        
        if(body.ok){
            dispatch(transferirMonto({
                msg: body.msg
            }))
            Swal.fire('Notificación', `${body.msg}`,'success');
           
        }else{
            Swal.fire('Error', `${body.msg}`,'error');
        }
    }
}

const transferirMonto = ( msg ) => ({
    type: types.transferencia,
    payload: msg
});