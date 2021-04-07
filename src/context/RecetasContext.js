import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [ recetas, guardarRecetas ] = useState([]);
    const [ busqueda, buscarRecetas ] = useState({
        ingrediente: '',
        categoria: ''
    });

    const { ingrediente, categoria } = busqueda;

    useEffect(() => {
        const obtenerRecetas = async() => {
            const url= `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`;
            const recetas = await axios.get(url)
            guardarRecetas(recetas.data.drinks)
        }
        obtenerRecetas();
    }, [busqueda])

            return(
                <RecetasContext.Provider
                    value={{
                        buscarRecetas                    }}
                >
                    {props.children}
                </RecetasContext.Provider>
            );

        }

export default RecetasProvider;
