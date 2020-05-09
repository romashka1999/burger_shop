import React from 'react';

import classes from './BurgerIngredient.module.css'

const burgerIngredient = (props) => {
    let ingredient = null;
    switch (props.type) {
        case 'bread-bottom':
                ingredient = <div className={classes.BreadBottom}></div>
            break;
        default:
            ingredient = null;
    }

    return ingredient;
};

export default burgerIngredient;

