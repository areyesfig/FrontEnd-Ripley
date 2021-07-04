import Swal from "sweetalert2";
import { fetchApi } from "../helpers/fetch"
import { types } from "../types/types";

export const consultaIndicador = () => {
    return async( dispatch ) => {
        
        
        const resp = await fetchApi('indicador' ,'GET');
       
        const body = await resp.json();
        
        if(body.ok){
            dispatch(indicador({
                valores: body.msg
            }))
            
           
        }else{
            Swal.fire('Error', `${body.msg}`,'error');
        }
    }
}

const indicador = ( valores ) => ({
    type: types.indicador,
    payload: valores
});