import React from 'react'
import "./css.css";
import PropTypes from 'prop-types'

function LeftIconInput(props) {
  return (
    <div className={`input-left-container  ${props?.className}`}>
        <label htmlFor={props?.htmlFor} className="left-icon">
            <i className={props?.leftIcon} />
        </label>
        <input
            type={props?.type}
            id={props?.htmlFor}
            className={`text-input bg-light `}
            autoComplete={"off"}
            placeholder={props?.placeholder}
            name={props?.name}
            value={props?.value}
            onChange={props?.onChange}
        />
        <label htmlFor={props?.htmlFor} className="label bg-light">{props?.label}</label>
    </div>
  )
}
LeftIconInput.propTypes = {
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
export default LeftIconInput