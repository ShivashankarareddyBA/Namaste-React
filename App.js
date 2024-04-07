import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <>
      <div className="header">
        <img className='header-img'  src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt="" />
        <div className="header-menu">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>CART</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Cards=()=>{

  return(
    <>
     <div className="res-card">
      <img className="res-img" src="" alt=""/>
      <h1>Meghana Foods</h1>
      <h3>Biriyani</h3>
      <h4>South,North style</h4>
      <h4>4.5 Starts</h4>
      <h4> Rs.150</h4>


     </div>
    </>
  );
}

const Body = ()=>{
  return(
    <>
    <div className="search">
      <label>Search</label>
      <input type="text" id="text" />
        </div>
        <div className="restoruants">
          <Cards/>
        </div>
    </>
  );

};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
      
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
