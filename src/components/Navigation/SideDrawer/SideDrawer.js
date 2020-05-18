import React from 'react';

import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationsItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
    return (  
        <div className={classes.SideDrawer}>
            <Logo height={80}/>
            <nav>
                <NavigationsItems />
            </nav>
        </div>
    );
}
 
export default sideDrawer;