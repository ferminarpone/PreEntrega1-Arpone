import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyCl3N6sXbafd-3BZf1lobjG9Epq3IKyAH0",
   authDomain: "e-commerce-triumph.firebaseapp.com",
   projectId: "e-commerce-triumph",
   storageBucket: "e-commerce-triumph.appspot.com",
   messagingSenderId: "807670599459",
   appId: "1:807670599459:web:381206ff0301bd69288696"
  };

  initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);
