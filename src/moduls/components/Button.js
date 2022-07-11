import React from "react";
import RippleButton from "./RippleButton";
import { ButtonStyled, IconRippleButton } from "./Styles";
export const  IconRipple = ({ children }) => {
  return <IconRippleButton type={"button"}>{children}</IconRippleButton>;
}
export const Button = (props) =>{
  return <ButtonStyled type={props.type} className={props.className}>

    {props.children}
    <RippleButton color={"#b7b2ff"} duration={1200} />
    </ButtonStyled>;
}