import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../../context/CategoriasContext';
import { RecetasContext } from '../../context/RecetasContext';

export default function Formulario() {


    const [ busqueda, guardarBusqueda ] = useState({
        nombre:'',
        categoria:''
    })

    const [ error, guardarError ] = useState(false)

    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas } = useContext(RecetasContext);

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
            guardarError(true);
            return;
        }

        guardarError(false);

        buscarRecetas(busqueda)
    }

    return (
        <div>
            <form
                onSubmit={onSubmit}
            >

                <input
                    className='nombre'
                    type='text'
                    name='nombre'
                    placeholder='Buscar bebidas'
                    onChange={onChange}
                />
               
                <select
                    className='categorias'
                    name='categoria'
                    onChange={onChange}
                >
                    <option value=''>-- Select By Category --</option>
                    {categorias.map(categoria => (
                        <option 
                            key={categoria.strCategory} 
                            value={categoria.strCategory}>
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
