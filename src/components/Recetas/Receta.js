import React, { useContext, useState } from 'react';

import {DetailsContext} from '../../context/DetailsContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import './Receta.css';



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
        width: 'auto',
        minWidth: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 3, 4),
        borderRadius: 15,
    },
}));



export default function Receta({ receta, par }) {

    const [ modalStyle ] = useState(getModelStyle);
    const [ open, setOpen ] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true)
    }
 
    const handleClose = () => {
        setOpen(false)
    }

    console.log(receta)

    const { idDrink, strDrink, strDrinkThumb } = receta;

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
        <div className='single'>
            <h1>{strDrink}</h1>
            <img src={strDrinkThumb} />
            
            <button
                type='button'
                className={par ? 'vermas' : 'vermass'}
                onClick={() => {
                    guardarIdReceta(idDrink);
                    handleOpen();
                }}
            >
                Recipe
            </button>

            <Modal
                open={open}
                onClose={() => {
                    guardarIdReceta(null);
                    guardarDetails({});
                    handleClose();
                }}
            >

            <div className='modal-container'>
                <div style={modalStyle} className={classes.paper}>

                    <h1>{details.strDrink}</h1>
                
                    <h3>Instructions</h3>
                    <ul>
                        { mostrarIngredientes(details) }
                    </ul>

                    <img src={details.strDrinkThumb} />

                </div>
            </div>
            
            
            </Modal>
        </div>
    )
}
