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
