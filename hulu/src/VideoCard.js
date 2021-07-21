import React, { forwardRef } from 'react';
import './videoCard.css';
import TextTruncate from 'react-text-truncate';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const base_url = 'https://image.tmdb.org/t/p/original/';

const  VideoCard = forwardRef(({movie},ref) => {
    
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);


    const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundImage: 'linear-gradient(to right,#051421,#042727);',
          border: '2px solid #ffff',
          borderRadius:'20px',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          color:'white',
        },
      }));
    
    const classes = useStyles();
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    function getModalStyle() {
        const top = 50;
        const left = 50;
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
      }
    
    const body = (
        <div style = {modalStyle} className = {classes.paper}>
            <div className = 'movieData'>
                <h2>{movie.title || movie.original_name}</h2>
                <p className = 'movie_stats'>{movie.media_type && `${movie.media_type} :`} Date: {movie.release_date || movie.first_air_data} <ThumbUpIcon/> Rating: {movie.vote_average}</p>
                <img src = {`${base_url}${movie.backdrop_path || movie.poster_path}`} alt = ''/>
                <h2>Movie Overview: </h2>
                <p>{movie.overview}</p>
            </div>
        </div>
    );

    const viewMovie = (e) => {
        e.preventDefault();
        handleOpen();
    }

    return (
        <div ref = {ref} className = 'videoCard'>
            <img onClick = {viewMovie} src = {`${base_url}${movie.backdrop_path || movie.poster_path}`} alt = ''/>
            <Modal
            open={open}
            onClose={handleClose}
            >
            {body}
            </Modal>
            <TextTruncate line = {2} element = "p" truncateText = "..." text = {movie.overview}/>
            <h2>{movie.title || movie.original_name}</h2>
            <p className = 'videoCard_stats'>{movie.media_type && `${movie.media_type} :`} Date: {movie.release_date || movie.first_air_data} <ThumbUpIcon/> Rating: {movie.vote_average}</p>
        </div>
    )
});

export default VideoCard;
