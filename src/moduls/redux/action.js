import { CHANENG_THEME } from "./actionType"


export function ChangeTheme(payload){
    return((dispatch,getState)=>{
        const DefaultTheme = getState()?.themeState?.themeType;
        let theme;
        if(DefaultTheme){
            if(payload === "light"){
                theme ="dark";
            }else{
                theme ="light";
            }
            dispatch({type:CHANENG_THEME,payload:theme});
        }else{
            dispatch({type:CHANENG_THEME,payload:"dark"});
        }
    })
}