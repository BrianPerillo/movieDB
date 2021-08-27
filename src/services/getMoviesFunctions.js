import axios from 'axios';

export const getMovieByID = async (id) => {

    const movies = await axios.get(process.env.REACT_APP_MOVIE_DB_BY_ID + id + '?' + process.env.REACT_APP_MOVIE_DB_APIK_KEY)
    
    return movies

}

export const getMovieByName = async (value) => {

    const movies = await axios.get(process.env.REACT_APP_MOVIE_DB_BY_NAME + value + '&' + process.env.REACT_APP_MOVIE_DB_APIK_KEY)
    
    return movies

}