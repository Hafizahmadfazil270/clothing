import React from "react";
import './custom-button.styles.scss';

const CunstomButton=({children, ...otherProps})=>(
    <button className="custom-button" {...otherProps}> 
        {children}
    </button>
)
export default CunstomButton;