import React from 'react';

import classes from './BurgerControls.module.css'
import BurgerControl from './BurgerControl/BurgerControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const burgerControls = (props) => {
    return ( 
        <div className={classes.BurgerControls}>
            <p>Total price: {props.totalPrice}</p>
            {
                controls.map( ctrl => {
                    return <BurgerControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    added={() => props.ingridientAdded(ctrl.type)} 
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabledIngredient = {props.disabled[ctrl.type]}/>
                })
            }
            <button 
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>
        </div>
    );
}
 
export default burgerControls;