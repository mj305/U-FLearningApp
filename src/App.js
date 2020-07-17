import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AboutComponent from './Components/About/AboutComponent';
import BookSliderComponent from './Components/BookSlider/BookSliderComponent'
import FooterComponent from './Components/Footer/FooterComponent';
import HomeComponent from './Components/Home/HomeComponent';
import MediaCard from './Components/BooksCollection/BooksCollectionComponent';
import PrimarySearchAppBar from './Components/NavBar/NavBarComponent';

import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <PrimarySearchAppBar />
        <Switch>
           <Route exact path="/" component={HomeComponent} />
           <Route exact path="/bookscollection" component={MediaCard} />
           <Route exact path="/bookslider" component={BookSliderComponent} />
           <Route exact path="/about" component={AboutComponent} />
        </Switch>
       <FooterComponent /> 
     </Router>
    </div>
  );
}

export default App;
