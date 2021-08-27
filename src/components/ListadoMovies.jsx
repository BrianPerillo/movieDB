import React, {Fragment} from "react";

import MovieCard from './MovieCard';

const ListadoMovies = ({movies}) => {

    console.log(movies);

    return ( 

        movies.map((movie, index)=>

            <MovieCard movie={movie} index={index} />

        )
  

     );

}
 
export default ListadoMovies;