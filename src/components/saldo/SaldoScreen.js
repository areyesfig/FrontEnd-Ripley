import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { consultaSaldo } from '../../actions/saldo';
import './saldo.css';

export const SaldoScreen = () => {

    const dispatch = useDispatch();
    
    const [formValues, setformValues] = useState({
        rut: ''
    });

    const { rut } = formValues;

    const handleInputChange = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        
        if(rut.trim().length < 10){
            return Swal.fire('Error', 'El rut debe contener mas de 10 caracteres','error');
        }

        dispatch(consultaSaldo(rut));
       
    }

    return (

        <div className="container login-container">
            <div className="row">
                <div className="col-md-7 login-form-1">
                        <h3>Ingrese rut a consultar</h3>
                        <hr/>
                        <form
                        onSubmit={handleSubmitForm}>
                                <div className="form-group">
                                    <label>Rut de cliente:</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Ej: 12.222.222-2"
                                        name="rut"
                                        autoComplete="off"
                                        value={ rut }
                                        onChange={ handleInputChange }
                                    />
                                </div>
                                
                                <br />

                                <button
                                    type="submit"
                                    className="btn btn-outline-primary btn-block "
                                >
                                <i className="far fa-save"></i>
                                <span> Consultar Saldo</span>
                                </button>
                        </form>
            </div>
        </div>
    </div>
    )
}
