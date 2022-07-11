import { onMessageListener,getToken, subscribeTokenToTopic, SubscribToken } from './moduls/firebase/firebaseInit';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "./moduls/landing/components/LandingPage";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import store, { persistor } from "./store";
import './App.css';
import LoginPage from "./moduls/login/components/LoginPage";
//import Firebase,{auth} from "./config/Firebase";
import chatIcon from "./chatIcon.svg"
import Homepage from "./moduls/home/components/Homepage";
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    Notification.requestPermission().then((premission)=>{
      if(premission==="granted"){
        callGetToken();
      }
    })
  },[]);
  const callGetToken = async ()=>{
    const token = await getToken();
    const data = localStorage.getItem("access_token");
    if(token !== data){
      localStorage.setItem("access_token", token);
      const responce = await SubscribToken(token, "Subscrib");
      console.log("tpken",responce);
    }
  }
 useEffect(()=>{
  onMessageListener().then((payload) => {
    showNotification(payload);
  })
 },[]);
  function showNotification(payload) {

    var  title =payload?.data?.title;
    var options ={
      body: payload?.data.body,
      icon:chatIcon,
      image:chatIcon,
      title:payload.data.title,
      click_action: payload?.data?.click_action,
      title:payload.data.title,
      data:{
          time: new Date(Date.now()).toString(),
      }
    };
    navigator?.serviceWorker?.ready.then(function(serviceWorker) {
      serviceWorker?.showNotification(title,options);
      // const notification = new Notification(title, options);
      // notification.icon =  chatIcon;
    });
  }
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
             
              <Route path="/" element={<LandingPage />}>
                <Route exact index element={<Homepage />} />
                <Route exact path={"login"} element={<LoginPage />} />
                <Route exact path={"chat/:id"} element={<Homepage />} />
              </Route>
              
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App;
