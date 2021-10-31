import React, { forwardRef, useImperativeHandle, useState } from 'react'

import classes from '../styles/popup.module.scss'

const Popup = (props, ref) => {
    const [ visibility, setVisibility ] = useState(false)
    
    const togglePopup = () => {
        document.body.style.overflow = visibility ? 'initial' : 'hidden'

        setVisibility(!visibility)
    }

    useImperativeHandle(ref, () => ({ togglePopup }))

    if(!visibility){
        return null
    }

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <main>
                    { props.children }
                </main>
            </div>

            <button onClick={togglePopup}>X</button>
        </div>
    )
}

export default forwardRef(Popup)