import React from 'react'
import "./css.css";
import PropTypes from 'prop-types'

function InputContainer(props) {
  return (
    <div className={`input-container ${props?.className}`}>
        <input
            type={props?.type}
            id={props?.htmlFor}
            className={`text-input bg-light `}
            autoComplete={"off"}
            placeholder={props?.placeholder}
            name={props?.name}
            onChange={props?.onChange}
            value={props?.value}
        />
        <label htmlFor={props?.htmlFor} className="label bg-light">{props?.label}</label>
    </div>
  )
}
InputContainer.propTypes = {
    name: PropTypes.any,
    type: PropTypes.any,
    htmlFor: PropTypes.any,
    placeholder: PropTypes.any,
    onChange: PropTypes.any,
    value: PropTypes.any,
    label: PropTypes.any,
    leftIcon:PropTypes.any,
    className:PropTypes.any
}
export default InputContainer