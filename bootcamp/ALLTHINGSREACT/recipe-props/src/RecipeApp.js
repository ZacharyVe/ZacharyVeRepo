import React, { Component } from 'react';
import logo from './logo.svg';
import './RecipeApp.css';
import Navbar from './Navbar';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList />
      </div>
    );
  }
};

export default RecipeApp;
