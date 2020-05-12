import React, { Component, Fragment } from "react";

import Burger from "../BurgerBuilde/../../components/Burger/Burger";

class BurgerBuilder extends Component {

    state = {
        ingrediens: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <Burger ingredients={this.state.ingrediens} ></Burger>
                </div>
                <div>
                    controls
                </div>
            </Fragment>
        );
    }
}

export default BurgerBuilder;