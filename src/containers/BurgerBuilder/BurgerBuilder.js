import React, { Component, Fragment } from "react";

import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
        totalPrice: 0,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map( ingKey => ingredients[ingKey] )
            .reduce( (accumulator, currentValue) => accumulator + currentValue, 0);
        this.setState({
            purchasable: sum > 0
        });
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
        this.updatePurchaseState(updatedIngredients);
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
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelledHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseCountinueHandler = () => {
        alert('olaa');
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
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelledHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        onPurchaseCancelledHandler ={this.purchaseCancelledHandler}
                        onPurchaseCountinueHandler ={this.purchaseCountinueHandler}/>
                </Modal>
                <div>
                    <Burger ingredients={this.state.ingredients} ></Burger>
                </div>
                <div>
                    <BurgerControls 
                        ingridientAdded={this.addIngrediendtHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        totalPrice={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}/>
                </div>
            </Fragment>
        );
    }
}

export default BurgerBuilder;