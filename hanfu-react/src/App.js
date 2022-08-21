import logo from './logo.svg';
import './App.css';
import React from 'react';
import Homepage from './Homepage';
import HanfuDetails from './HanfuDetails';
import { Cartpage_page } from './CartPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>

      <BrowserRouter>
      {/* 用于match地址栏内gitpod.io/后面的内容 */}
        <Routes >

          <Route path="/" element={<Homepage />} />
          {/* ^^^ the path '/' means there is no address in the address bar, then show <Homepage> */}
          <Route path="/cart_route" element={<Cartpage_page />} />
          {/* ^^^ if '/cart_route' appear the address bar, then show <Homepage> */}
          <Route path="/hanfudetails" element={<HanfuDetails />} />

        </Routes >
      </BrowserRouter>
    </React.Fragment>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <p>edit this to change hanfu first page</p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  );
}

export default App;
