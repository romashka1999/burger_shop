import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button';

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
            <p><strong>Total Price: </strong> {props.price}</p>
            <Button 
                cliked={props.onPurchaseCancelledHandler}
                buttonType='Danger'>CANCEL</Button>
            <Button 
                cliked={props.onPurchaseCountinueHandler}
                buttonType='Success'>CONTINUE</Button>
        </Fragment>
     );
}
 
export default orderSummary;