import './App.scss';
import React from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Offer from "./components/offer/offer";
import JoinPage from "./components/joinPage/joinPage";
import Blog from "./components/blog/blog";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <Home/>
        <Offer/>
      <JoinPage/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
