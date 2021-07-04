import React, { useEffect } from 'react';
import { IndicadoresScreen } from '../components/indicadores/IndicadoresScreen';
import { SaldoScreen } from '../components/saldo/SaldoScreen';
import { TransferenciaScreen } from '../components/transferencia/TransferenciaScreen';
import {Navbar} from '../components/ui/Navbar';
import { inicioScreen } from '../components/inicio/inicioScreen';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { consultaIndicador } from '../actions/indicador';


export const AppRouter = () => {

    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(consultaIndicador());
 
     }, [dispatch])

    return (
        <Router>
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={inicioScreen} />
                    <Route exact path="/saldo" component={SaldoScreen} />
                    <Route exact path="/transferencia" component={TransferenciaScreen} />
                    <Route exact path="/indicadores" component={IndicadoresScreen} />
                </Switch>
            </div>
        </Router>
    )
}
