import React from 'react';
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { Provider } from './context'
import AddContact from './components/AddContact';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
