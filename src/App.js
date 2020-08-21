import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js/NavBar';
import Routes from './config/routes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="App">
        <header className="App-header">
          <Routes />
        </header>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
