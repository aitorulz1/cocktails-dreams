import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const DetailsContext = createContext();

const DetailsProvider = (props) => {

    const [ idreceta, guardarIdReceta ] = useState(null);

    const [ details, guardarDetails ] = useState({})

    useEffect(() => {
        const obtenerReceta = async() => {
            if(!idreceta) return;
            const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

            const resultado = await axios.get(url);
            console.log(resultado.data.drinks[0])
            guardarDetails(resultado.data.drinks[0])

        }
        obtenerReceta();
    }, [idreceta])

    return(
        <DetailsContext.Provider
            value={{
                details,
                guardarIdReceta
            }}
        >
            {props.children}
        </DetailsContext.Provider>
    )
}

export default DetailsProvider;