import React, { useContext } from 'react';

import {DetailsContext} from '../../context/DetailsContext';

import Modal from '@material-ui/core/styles';
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

    const {idDrink, strDrink, strDrinkThumb } = receta;

    const { guardarIdReceta } = useContext(DetailsContext);

    return (
        <div>
            <h1>{strDrink}</h1>
            <img src={strDrinkThumb} />
            <button
                type='button'
                className='vermas'
                onClick={() => guardarIdReceta(idDrink)}
            >
                Ver Receta
            </button>
        </div>
    )
}
