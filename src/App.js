//import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages';
import CookieConsent from "react-cookie-consent";

//import Home from './pages/index';


function App() {
  return (
    <Router>

      <Routes>
        <Route exact path='/' element={<Home/>} ></Route>
        <Route></Route>
      </Routes>

      <CookieConsent
  location="bottom"
  buttonText="  Accept "
  cookieName="cookieConsentForm"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
  onAccept={(acceptedByScrolling) => {
    if (acceptedByScrolling) {
      // triggered if user scrolls past threshold
      alert("Accept was triggered by user scrolling");
    } 
    // else {
    //   alert("Accept was triggered by clicking the Accept button");
    // }
  }}
>
We and our partners collect cookies, access and use non-sensitive information from your device with your permission to enhance the content and experience on this website. To learn more about cookies, partners, and how we use your data, to review your options or these operations for each partner, visit the <span style={{ fontSize: "14px" }}><a href='https://www.privacypolicygenerator.info/live.php?token=thOvKkcSSYlpzMYn3DDGCokLUszPQ2de'>Privacy Policy</a></span>.{" "}
  {/* <span style={{ fontSize: "14px" }}>This bit of text is smaller :O</span> */}
</CookieConsent>

    </Router>
  );
}

export default App;
