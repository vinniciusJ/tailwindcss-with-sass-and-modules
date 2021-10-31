import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Popup = (props, ref) => {
    const [ visibility, setVisibility ] = useState(false)
    
    const togglePopup = () => setVisibility(!visibility)

    useImperativeHandle(ref, () => ({ togglePopup }))

    if(!visibility){
        return null
    }

    return (
        <div>
            <header>
                <h1>{ props.title }</h1>
                <button onClick={togglePopup}>X</button>
            </header>
            <main>
                { props.children }
            </main>
        </div>
    )
}

export default forwardRef(Popup)