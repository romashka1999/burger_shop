import React, { Fragment } from 'react';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map( ingKey => { return <li key={ingKey}>{ingKey}: {props.ingredients[ingKey]}</li>});

    return ( 
        <Fragment>
            <h3>Your Order</h3>
            <p> a delicious burder with ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>do u want continue checkout ?</p>
        </Fragment>
     );
}
 
export default orderSummary;