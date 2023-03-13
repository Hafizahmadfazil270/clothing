import './form-input.styles.scss'
import React from 'react'
const FormInput = ({handleChange,label,...otherProps})=>(
    <div className="group">
        <input onChange={handleChange} className="form-input" {...otherProps}/>
        {
            label ? 
            (<label className={`${otherProps.value.length?'shrink':''} form-input-label`}>{label}</label>):null
        }
    </div>
)
export default FormInput;