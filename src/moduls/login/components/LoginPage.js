import React, { useState } from 'react'
import "./LoginPage.css";
import firebase from '@firebase/app-compat';
import LeftIconInput from '../../components/LeftIconInput';
import InputContainer from '../../components/InputContainer';
import RightIconInput from '../../components/RightIconInput';
import IconInput from '../../components/IconInput';
import { Button } from '../../components/Button';

export default function LoginPage() {
  const [formInput, setFormInput] = useState({
    email:"",
    password:"",
    showPassword:true,
    remember:true
  })
  const GoogleLogin = (e) =>{
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(token, user, credential);
        }).catch(console.log);
  }
  const FacebookLogin = (e) =>{
    e.preventDefault();
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
         console.log(token, user, credential);
        }).catch(console.log);
  }
  const TwitterLogin = (e) =>{
    e.preventDefault();
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(token, user, credential);
        }).catch(console.log);
  }
  const onChangeinput = (e) =>{
    setFormInput({
      ...formInput,
      [e.target.name]:e.target.value
    })
  }
  return (
    <div className="account-pages my-5 pt-sm-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="text-center mb-4">
                <a href="index.html" className="auth-logo font-size-20 mb-5 d-block">
                  <h2 className={"text-primary fonts"}> ChatHub</h2>
                </a>

                <h4>Sign in</h4>
                <p className="text-muted mb-4">Sign in to continue to <span className={"fonts"}>chathub</span>.</p>
                
            </div>

            <div className="card">
              <div className="card-body p-4">
                <div className="p-3">
                    <form >
                      <div className="">
                          <label htmlFor={"Email"} className="form-label mb-3">Email</label>
                          <LeftIconInput
                            type={"text"}
                            placeholder={"Enter Email Id"}
                            leftIcon={"mdi mdi-email"}
                            onChange={onChangeinput}
                            className={"mb-3"}
                            name={"email"}
                            htmlFor={"Email"}
                            label={"Email"}
                            value={formInput.email}
                          />
                      </div>
                      <div className="">
                        <label htmlFor={"Password"} className="form-label mb-3">Password</label>
                        <IconInput
                          type={formInput.showPassword?"password":"text"}
                          placeholder={"Enter password"}
                          leftIcon={"mdi mdi-lock"}
                          rightIcon={formInput.showPassword?"mdi mdi-eye-off":"mdi mdi-eye"}
                          onChange={onChangeinput}
                          className={"mb-3"}
                          name={"password"}
                          htmlFor={"Password"}
                          label={"Password"}
                          value={formInput.password}
                          RightIconbtn={formInput.showPassword?"mdi mdi-eye-off":"mdi mdi-eye"}
                          RightClick={()=>setFormInput({...formInput,showPassword:!formInput.showPassword})}
                          rightType={"button"}
                        />
                      </div>
                        <div className="form-check mb-4">
                            <input type="checkbox" className="form-check-input" checked={true} id="remember-check"/>
                            <label className="form-check-label" htmlFor="remember-check">Remember me</label>
                        </div>

                        <div className="d-grid">
                            <Button className="btn btn-primary " type="button">Sign in</Button>
                        </div>

                    </form>
                </div>
              </div>
            </div>

            <div className="mt-5 text-center">
                <p>Don't have an account ? <a href="auth-register.html" className="fw-medium text-primary"> Signup now </a> </p>
                <p>© <script>document.write(new Date().getFullYear())</script>2022 ChatHub. Crafted with <i className="mdi mdi-heart text-danger"></i> by Shrikant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

{/* <RightIconInput
type={"text"}
placeholder={"Enter Email Id"}
leftIcon={"mdi mdi-email"}
onChange={(e)=>console.log(e.target.name)}
className={"mb-3"}
name={"email"}
htmlFor={"Email"}
label={"Email"}
value={"asdjsab"}
/> 
<InputContainer
    className={"mb-3"}
    type={"text"}
    placeholder={"Enter Email Id"}
    leftIcon={"mdi mdi-email"}
    onChange={(e)=>console.log(e.target.name)}
    name={"email"}
    htmlFor={"Email"}
    label={"Email"}
    value={"asdjsab"}
/>

<div className="mb-3">
    <label className="form-label">Email</label>
    <div className={"input-container"}>
      <input
        type={'text'}
        id={"email"}
        className={"text-input bg-light"}
        autoComplete={"off"}
        placeholder={"Enter your email"}
      />
      <label htmlFor={"email"} className="label bg-light">Email</label>
    </div>
</div>
*/}