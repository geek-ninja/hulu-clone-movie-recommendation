[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)


# hulu-clone-movie-recommendation made using Reactjs

<h2>how to start?</h2>
npm create-react-app hulu
<p>The above command will create the app for you</p>
<p>Now replace the src folder from the repo with your src folder that you have just created</p>
<h2>Install some extra packages</h2>
<p>npm install @material-ui/core</p>
<p>npm install @material-ui/icons</p>
<p>npm i react-dom</p>
<p>npm i react-flip-move</p>
<p>npm i axios</p>
<h2>Then run the server</h2>
<p>npm start </p>

<h2>Project Overview</h2>
  
  ![](1.png)
  
  ![](2.png)
  
<h2>Api used</h2>

https://image.tmdb.org/t/p/original/

```javascript
const base_url = 'https://image.tmdb.org/t/p/original/';
```
<p>Extration of different genre of movies from api</p>

```javascript
const API_KEY = '580908a****************53d16d7e';

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};

```
<p>you can get your api key by registration in the tmdb.org website</p>

https://developers.themoviedb.org/3/getting-started/introduction

<p>Requesting data from api using Axios</p>

```javascript
import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

export default instance;
```

<p>Display component of the app(Result.js)</p>

```javascript
import React, { useState ,useEffect} from 'react';
import './results.css';
import VideoCard from './VideoCard';
import axios from './axios';
import FlipMove from 'react-flip-move';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function Results({selectedOption}) {
    const [movies,setMovies] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(selectedOption);
            console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [selectedOption]);

    var mybutton = document.getElementById('myBtn')
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
    }

    function topFunction(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    return (
        <div className = 'results'>
            <button className = 'myBtn' id = 'myBtn' onClick = {topFunction}><KeyboardArrowUpIcon fontSize = 'large'/></button>
            <FlipMove>
                {movies.map(movie => (
                    <VideoCard  key = {movie.id} movie = {movie}/>
                ))}
            </FlipMove>
        </div>
    )
}

export default Results

```

<h3>You can follow the whole project from this youtube video ...link is given below</h3>
https://www.youtube.com/watch?v=du_FuBTrclo&t=8622s
