import React, { useEffect, useContext } from 'react';
import Receta from './Receta';

import { RecetasContext } from '../../context/RecetasContext';

import './ListadoRecetas.css';


export default function ListadoRecetas() {

    const { recetas } = useContext(RecetasContext)

    if(!recetas) return null;

    function par () {

        for(let i = 0; i < recetas.length; i++){
            if(recetas[i]%2 === 0){
                return true
            }
        }
    }
    
    console.log(par)
    

    return (
        <div className="listado-container">
            {recetas.map(receta => (
        
                <Receta
                    key={receta.idDrink}
                    receta={receta}
                    par={par}
                />
            ))}
        </div>
    )
}
