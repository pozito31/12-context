import React, { useContext } from 'react';
import { PruebaContext } from '../context/PruebaContext';

export const Inicio = () => {

    const compartida = useContext(PruebaContext);

    return (
        <div>
            <h1>Inicio</h1>
            <p>Página de inicio</p>
            <p>Valor compartido: <pre>{JSON.stringify(compartida)}</pre></p>
        </div>
    );
}
