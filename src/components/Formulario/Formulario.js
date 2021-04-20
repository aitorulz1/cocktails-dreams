import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../../context/CategoriasContext';
import { RecetasContext } from '../../context/RecetasContext';

import './Formulario.css';

export default function Formulario({ showButton }) {


    const [ busqueda, guardarBusqueda ] = useState({
        nombre:'',
        categoria:''
    })

    const [ error, guardarError ] = useState(false)

    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

    const { nombre, categoria } = busqueda;

    const onChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        if(nombre.trim() === '' || categoria.trim() === '') {
            guardarError(true)
            setTimeout(() => {
                guardarError(false);
            }, 3000)
            return;
        }

        showButton(true)

        guardarError(false);

        guardarConsultar(true)

        buscarRecetas(busqueda)
    }

    

    return (
        <div className="form-container">


            <form
                onSubmit={onSubmit}
            >

            {error ? <div className="warning">You need to set a Combination</div> : null}
            
                <input
                    className='nombre'
                    type='text'
                    name='nombre'
                    placeholder='Any Alcoholic Drink'
                    onChange={onChange}
                />
               
                <select
                    className='categorias'
                    name='categoria'
                    onChange={onChange}
                >
                    <option value=''>-- Select By Category --</option>
                    {categorias.map(categoria => (
                        <option   key={categoria.strCategory}  value={categoria.strCategory}>
                            {categoria.strCategory}
                        </option>
                    ))}
                </select>

                <input
                    className='boton-buscar'
                    value='Search'
                    type='submit'
                />

            </form>
        </div>

    
    )
}
