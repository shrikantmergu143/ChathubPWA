/* eslint-disable no-undef */
if( 'undefined' === typeof window){
    importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");

    importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

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

    messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };
    return navigator.serviceWorker.ready.then(function(serviceWorker) {
        serviceWorker.showNotification(notificationTitle,notificationOptions);
    });
    });
}