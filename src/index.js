import React from 'react';
import ReactDOM from 'react-dom';
 import './index.css';

import Menu from './Menu/Menu';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';


ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Banner />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


