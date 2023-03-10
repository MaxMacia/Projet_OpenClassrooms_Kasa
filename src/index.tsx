import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './utils/styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Accomodation from './pages/Accomodation';
import About from './pages/About';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/Projet_OpenClassrooms_Kasa' element={<Home />} />
        <Route path='/Projet_OpenClassrooms_Kasa/:id' element={<Accomodation />} />
        <Route path='/Projet_OpenClassrooms_Kasa/about' element={<About />} />
        <Route path='/Projet_OpenClassrooms_Kasa/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
