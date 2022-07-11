import styled from "styled-components";

export const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${props => props.color};
    animation-name: ripple;
    animation-duration: ${props => props.duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

export const ButtonStyled = styled.button`
    overflow: hidden;
    outline: none;
    position: relative;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    background-color: var(--bs-sidebar-menu-item-active-color);
    border-color: var(--bs-sidebar-menu-item-active-color);
    padding: 0.5rem 1rem;
    font-size: .9375rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;
export const IconRippleButton = styled.button`
    overflow: hidden;
    outline: none;
    position: relative;
    cursor: pointer;
    color: #a8b0cf;
    font-size: 20px;
    border-radius: 50%;
    background: #34404b;
    border: 1px solid #34404b;
    text-align: center;
    height:100%;
    width:100%;
`;