import React from 'react';
import style from './MyButton.module.css';

export const MyButton = (props) => {
    return(
        <button {...props} className={style.myBtn}>
            {props.children}
        </button>
    )
}