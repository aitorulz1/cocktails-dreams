import React, { useContext, useState } from 'react';

import {DetailsContext} from '../../context/DetailsContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';



function getModelStyle() {
    const top= 50;
    const left= 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    }
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 3, 4),
    },
}));



export default function Receta({receta}) {

    const [ modalStyle ] = useState(getModelStyle);
    const [ open, setOpen ] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true)
    }
 
    const handleClose = () => {
        setOpen(false)
    }

    const {idDrink, strDrink, strDrinkThumb } = receta;

    const { details, guardarIdReceta, guardarDetails } = useContext(DetailsContext);


    // Muestra los ingredientes y cantidades
    const mostrarIngredientes = details => {

            let ingredientes = [];

            for ( let i = 1; i < 16; i++ ) {
                if ( details[ `strIngredient${i}` ] ) {
                    ingredientes.push(
                        <li> { details[`strIngredient${i}`] }  { details[`strMeasure${i}`] }</li>
                    )
            }
        }
        return ingredientes;
    }

    return (
        <div>
            <h1>{strDrink}</h1>
            <img src={strDrinkThumb} />
            <button
                type='button'
                className='vermas'
                onClick={() => {
                    guardarIdReceta(idDrink);
                    handleOpen();
                }}
            >
                Ver Receta
            </button>

            <Modal
                open={open}
                onClose={() => {
                    guardarIdReceta(null);
                    guardarDetails({});
                    handleClose();
                }}
            >

            
                <div style={modalStyle} className={classes.paper}>

                    <h1>{details.strDrink}</h1>
                
                    <h3>Instructions</h3>
                    <ul>
                        { mostrarIngredientes(details) }
                    </ul>

                    <img src={details.strDrinkThumb} />

                </div>
            
            
            </Modal>
        </div>
    )
}
