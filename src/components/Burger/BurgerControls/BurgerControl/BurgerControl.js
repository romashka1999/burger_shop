import React from 'react';

import classes from './BurgerControl.module.css'

const burgerControl = () => {
    return (  
        <div className={classes.BurgerControl}>
            <div>{props.label}</div>
            <button>-</button>
            <button>+</button>
        </div>
    );
}
 
export default burgerControl;