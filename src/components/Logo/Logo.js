import React from 'react';

import classes from './Logo.module.css';
import burgerLogo from '../../assets/images/rc_shot.png';

const logo = (props) => {
    return (  
        <div className={classes.Logo} style={{height: `${props.height}%`}}>
            <img src={burgerLogo}/>
        </div>
    );
}
 
export default logo;