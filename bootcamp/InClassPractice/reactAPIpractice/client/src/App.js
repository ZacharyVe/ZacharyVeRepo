import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    const movies = [
      {id:0,
       poster_src: "https://www.themoviedb.org/t/p/w440_and_h660_face/qTZIgXrBKURBK1KrsT7fe3qwtl9.jpg",
       title: "Legacies", 
       overview: "some losers have a legacy"
      },
      {id:1,
       poster_src: "https://www.themoviedb.org/t/p/w440_and_h660_face/2C9vyK6leWDb2ds65R7uIwSmh8V.jpg",
       title: "The Passion of the Crist", 
       overview: "Jesus Wins"
      }
    ];
    var movieRows = [];
    movies.forEach((movie) => {
      const movieRow =  <div key={movie.id}>
                          <img alt="poster" src={movie.poster_src}></img>
                          {movie.title}
                        </div>
      movieRows.push(movieRow)
    })
    this.state= {
      rows: []
    };
  }
  performSearch(searchTerm) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=0cd5507186770f4305f0f702a51c58fc&query=${searchTerm}`
    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(searchResults => {
      let movies = searchResults.results;
      var movieRows = [];
      movies.forEach((movie) => {
        const movieRow =  <div key={movie.id}>
                            <img alt="poster" src={movie.poster_src}></img>
                            {movie.title}
                          </div>
        movieRows.push(movieRow)
      })
      this.setState ({ rows: movieRows})
    })
    .catch(error => {
      console.log('error comming from API:  ', error)
    })
  }
  searchChangeHandler = (event) => {
    this.performSearch(event.target.value);
    console.log('i am event', event);
    console.log('i am event.target', event.target);
    console.log('i am event.target.value', event.target.value);
  }
  render() {
    return (
      <div>
        <h1>Movie Search</h1>
        <input  id="inputField" 
                placeholder="enter your movie" 
                onChange={this.searchChangeHandler}>
        </input>
        {this.state.rows}
      </div>
    );
  }
  
}

export default App;
