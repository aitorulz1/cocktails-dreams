import React, { useEffect, useContext } from 'react';
import Receta from './Receta';

import { RecetasContext } from '../../context/RecetasContext';


export default function ListadoRecetas() {

    const { recetas } = useContext(RecetasContext)

    if(!recetas) return null;

    return (
        <div>
            {recetas.map(receta => (
                <Receta
                    key={receta.idDrink}
                    receta={receta}
                />
            ))}
        </div>
    )
}
