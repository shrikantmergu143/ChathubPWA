import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import { connect } from "react-redux";
import "./LandingPage.css"
function LandingPage(props) {
  var filename = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
  useEffect(()=>{
    if(props.theme){
      document?.getElementById("body_theme")?.setAttribute("data-layout-mode",props.theme)
    }else{
      document?.getElementById("body_theme")?.setAttribute("data-layout-mode","light")
    }
  },[props?.theme,filename])
  return (
    <aside className={`landing_page ${props?.theme}`} 
      //theme-demo={"dark"}
    >
        <Outlet/>
    </aside>
  )
}
const MapStateToProps = (store)=>({
    theme:store?.themeState?.themeType
})
export default connect(MapStateToProps)(LandingPage)