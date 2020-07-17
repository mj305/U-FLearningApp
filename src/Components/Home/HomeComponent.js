import React from 'react';

import FooterComponent from '../Footer/FooterComponent'

import './HomeComponent.css';
import './assets/kidsapp.jpg';

const HomeComponent = () => {

    return(
      <>
        <div className="home-page-container">
          <div className="header-page-text" >Elevate!</div>
          <FooterComponent />
        </div>
      
      </>
    )
};

export default HomeComponent