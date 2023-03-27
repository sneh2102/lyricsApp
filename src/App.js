import './App.css';
import React from 'react';
import Navbar from './components/layouts/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Index from './components/layouts/Index';
import { Provider } from './Context';
import Lyrics from './components/tracks/Lyrics';
function App() {
  return (
    <>
    <Provider>
    <BrowserRouter>
    <React.Fragment>
     <Navbar/>
     <div className="container">
      <Routes>
        <Route exact path="/" element={<Index/>}/>
        <Route path="/lyrics/track/:id" element={<Lyrics/>}/>
      </Routes>
     </div>
    </React.Fragment>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
