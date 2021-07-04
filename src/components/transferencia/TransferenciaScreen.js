import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { transferencia } from '../../actions/transferencia';
import './transferencia.css';

export const TransferenciaScreen = () => {

    const dispatch = useDispatch();

    const [FormValues, setFormValues] = useState({
        ctaOrigen:'',
        ctaDestino:'',
        monto:0
    });

    const {ctaOrigen,ctaDestino,monto} = FormValues;

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...FormValues,
            [target.name]: target.value
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        
        if(ctaOrigen === ""){
            return Swal.fire('Error', 'campo cuenta origen no puede estar vacio','error');
        }
        if(ctaDestino === ""){
            return Swal.fire('Error', 'campo cuenta destino no puede estar vacio','error');
        }
        if(monto === "" || monto === 0){
            return Swal.fire('Error', 'debe transferir monto superior a 0','error');
        }
        if(ctaOrigen.trim().length < 5 || ctaOrigen.trim().length > 5){
            return Swal.fire('Error', 'El nº de cuenta origen debe tener 5 digitos','error');
        }
        if(ctaDestino.trim().length < 5 || ctaDestino.trim().length > 5){
            return Swal.fire('Error', 'El nº de cuenta destino debe tener 5 digitos','error');
        }
        
        dispatch(transferencia(ctaOrigen,ctaDestino,monto));
        

    }


    return (
        <div className="container login-container">
        <div className="row">
            <div className="col-md-7 login-form-1">
                    <h3>Transferencias bancarias</h3>
                    <hr/>
                    <form
                    onSubmit={handleSubmitForm}>
                            <div className="form-group">
                                <label>Numero de cuenta origen:</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Ej: 22222"
                                    name="ctaOrigen"
                                    autoComplete="off"
                                    value={ ctaOrigen }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Numero de cuenta destino:</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Ej: 11111"
                                    name="ctaDestino"
                                    autoComplete="off"
                                    value={ ctaDestino }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Monto a transferir</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Ej: 10000"
                                    name="monto"
                                    autoComplete="off"
                                    value={ monto }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <br />
                            <button
                                type="submit"
                                className="btn btn-outline-primary btn-block "
                            >
                            <i className="far fa-save"></i>
                            <span> Transferir monto</span>
                            </button>
                    </form>
        </div>
    </div>
</div>
    )
}
