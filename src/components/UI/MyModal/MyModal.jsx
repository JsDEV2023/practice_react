import React from 'react';
import style from './MyModal.module.css';

export const MyModal = ({children, visible, setVisible}) => {

    const styleModal = [style.modal]

    if (visible) {
        styleModal.push(style.active)
    }
    

    return(
        <div className={styleModal.join(' ')} onClick={() => setVisible(false)}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}