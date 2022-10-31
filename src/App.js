import logo from './logo.svg';
import './App.css';
import Banner from './react/Banner';
import Login from './react/login';
import { useState } from 'react';
function App() {
  const [login,setLogin] =useState(false);
  const loginHandler = (userloggedin) => {
    setLogin(userloggedin);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   
      </header>
      {
        !login && <Login isLogin={loginHandler}/>
      }
      {
        login && <Banner/>
      }
      
    </div>
  );
}

export default App;
