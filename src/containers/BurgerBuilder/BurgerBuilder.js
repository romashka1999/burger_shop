import React, { Component, Fragment } from "react";

import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";


const INGREDIENT_PRICES = {
    salad: 50,
    cheese: 40,
    meat: 140,
    bacon: 70
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0
    }

    addIngrediendtHandler = (type) => {
        const oldIngredientCnt = this.state.ingredients[type];
        const updatedCnt = oldIngredientCnt + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCnt;
        const priceAddition =  INGREDIENT_PRICES[type];
        const oldTotalPrice = this.state.totalPrice;
        const newTotalPrice = oldTotalPrice + priceAddition;
        this.setState({ingredients: updatedIngredients, totalPrice: newTotalPrice});
    }

    removeIngredientHandler = (type) => {
        const oldIngredientCnt = this.state.ingredients[type];
        if(oldIngredientCnt === 0) {
            return;
        }
        const updatedCnt = oldIngredientCnt - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCnt;
        const priceDeduction =  INGREDIENT_PRICES[type];
        const oldTotalPrice = this.state.totalPrice;
        const newTotalPrice = oldTotalPrice - priceDeduction;
        this.setState({ingredients: updatedIngredients, totalPrice: newTotalPrice});
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Fragment>
                <div>
                    <Burger ingredients={this.state.ingredients} ></Burger>
                </div>
                <div>
                    <BurgerControls 
                    ingridientAdded={this.addIngrediendtHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}/>
                </div>
            </Fragment>
        );
    }
}

export default BurgerBuilder;