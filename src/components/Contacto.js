import React, { useContext } from 'react';
import { PruebaContext } from '../context/PruebaContext';

export const Contacto = () => {

    const datosDesdeElContexto = useContext(PruebaContext);

    return (
        <div>
            <h1>Contacto</h1>
            <p>Página de contacto</p>
            <p>Valor compartido: <pre>{JSON.stringify(datosDesdeElContexto)}</pre></p>
        </div>
    );
}
