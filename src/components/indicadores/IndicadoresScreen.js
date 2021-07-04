import React from 'react'
import { useSelector } from 'react-redux'
import { IndicadorEntrada } from './IndicadorEntrada';


export const IndicadoresScreen = () => {

    const {valores} = useSelector(state => state.indicador);

    return (
        <div>
                    {
                        valores.map(valor => ( 
                            <IndicadorEntrada 
                            key = {valor.codigo}
                            {...valor}
                            />
                        ))
                        
                    }
        </div>
       
    )
}
