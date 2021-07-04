import React from 'react';
import moment from 'moment';
import 'moment/locale/es';

export const IndicadorEntrada = ({codigo,nombre,unidad_medida,fecha,valor}) => {
      
    const fechaUnidad = moment(fecha);
    console.log(fechaUnidad);
    return (
        <div>
            <div className="card">
                {
                     codigo &&
                    <div className="card-body">   
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">Indicador obtenido con fecha {fechaUnidad.format('L')}</p>
                        <p className="card-text">
                            El valor de {codigo} es de {valor} {unidad_medida}
                        </p>
                    </div>
                }
            </div>       
        </div>          
    )
}
