import React from 'react'
import "./css.css";
import PropTypes from 'prop-types'
import { IconRipple } from './Button';
import RippleButton from "./RippleButton"
function IconInput(props) {
    const ClickOn = () =>{
        const input_btn = document.querySelector(".input_btn");
        input_btn.onclick = function (e) {
            let ripple = document.createElement("span");
            ripple.classList.add("ripple");
            this.appendChild(ripple);
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            setTimeout(() => {
                ripple.remove();
            }, 300);
    
        };
    }
  return (
    <div className={`input-icon-container ${props?.className}`}>
        {props?.LeftIconbtn?
            <label  className="icon-label lefts_icon iconbtn">
                <button type={props?.rightType} className="input_btn">
                    <i className={props?.RightIconbtn} />
                </button>
            </label>
            :
            <label htmlFor={props?.htmlFor} className="icon-label lefts_icon">
                <i className={props?.leftIcon} />
            </label>
        }
        {props?.RightIconbtn?
            <label onClick={props?.RightClick} className="icon-label rights_icon iconbtn">
                {/* <button type={props?.rightType} className="input_btn">
                    <i className={props?.RightIconbtn} />
                </button> */}
                <IconRipple>
                    <i className={props?.RightIconbtn} />
                    <RippleButton color={"#b7b2ff"} duration={1000} />
                </IconRipple>
            </label>
            :
            <label htmlFor={props?.htmlFor} className="icon-label rights_icon">
                <i className={props?.rightIcon} />
            </label>
        }
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
IconInput.propTypes = {
    name: PropTypes.any,
    type: PropTypes.any,
    htmlFor: PropTypes.any,
    placeholder: PropTypes.any,
    onChange: PropTypes.any,
    value: PropTypes.any,
    label: PropTypes.any,
    leftIcon:PropTypes.any,
    rightIcon:PropTypes.any,
    className:PropTypes.any,
    RightIconbtn:PropTypes.any,
    LeftIconbtn:PropTypes.any,
    rightType:PropTypes.any,
    leftType:PropTypes.any,
}
export default IconInput