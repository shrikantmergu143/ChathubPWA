import firebase from "firebase/compat/app";
import "firebase/compat/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyChLBKXurhcgAKCAeFw9Fajl-9l4RNpEa4",
    authDomain: "chathub-web.firebaseapp.com",
    projectId: "chathub-web",
    storageBucket: "chathub-web.appspot.com",
    messagingSenderId: "514989327894",
    appId: "1:514989327894:web:f04ff21ce6794dacecd737",
    measurementId: "G-6LMDD6T6H0"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

export const SubscribToken = async (registrationTokens, token) =>{
  console.log(messaging)
   await messaging.subscribeToTopic(registrationTokens, token)
    .then((response) => {
      // See the MessagingTopicManagementResponse reference documentation
      // for the contents of response.
      console.log('Successfully subscribed to topic:', response);
      return response;
    })
    .catch((error) => {
      console.log('Error subscribing to topic:', error);
    });
}

//const { REACT_APP_VAPID_KEY } = process.env.REACT_APP_VAPID_KEY;
// const publicKey = process.env.REACT_APP_VAPID_KEY;

export const getToken = async () => {
  let currentToken = "";
  try {
    currentToken = await messaging.getToken({
      vapidKey: "BFW0moO0rmXriHDUQQnMjNl6gmPXZjNny3Zb8LxzcrcBQbndk6B_hl3xe4FW7hQFMhYk8F-Xq1DOtYnFCFdDt-8",
    });
    if (currentToken) {
      return currentToken;
    } else {
      return false;
    }
  } catch (error) {
    console.log("An error occurred while retrieving token.", error);
  }
  return currentToken;
};
export const subscribeTokenToTopic = async (token, topic)  => {
  const data =  await fetch(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/${topic}`, {
    method: 'POST',
    headers: new Headers({
      Authorization: `key=AAAAd-fBhhY:APA91bFfLskAmcUq3YJ3CWAGucqm2X5qGtDIbArTSajKXA9K7njUPGzPRAnxADeU219MWN8kUq3NIT_FSZaSCWS3f2O8RKJrx6BS3xJH_zc4cr0TG8r41Td1qMvcSbYfGQCHoPDLc6xC`
    })
  })
    .then((response) => {
      if (response.status < 200 || response.status >= 400) {
        console.log(response.status, response);
      }
      console.log(`"${topic}" is subscribed`);
    })
    .catch((error) => {
      console.error(error.result);
    });
  return data;
}
export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      console.log("Listener", payload);
      resolve(payload);
    });
});
