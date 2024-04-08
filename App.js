import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <>
      <div className="header">
        <img className='header-img'  src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" alt="" />
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

const Cards=(props)=>{

  return(
    <>
     <div className="res-card">
      <img className="res-img" src="https://png.pngtree.com/png-clipart/20230522/original/pngtree-chicken-biryani-front-view-png-image_9167532.png" alt=""/>
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
      <button>Search</button>
        </div>
        <div className="restoruants">
          <Cards/>
          <Cards resName="KFC"/>
          <Cards/>
          <Cards/>
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
