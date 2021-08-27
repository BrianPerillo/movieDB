import './assets/css/cardStyle.css'
import './assets/js/cardAnimation.js'

import React, { Fragment, useEffect, useState } from 'react';
import { getMovieByID, getMovieByName } from './services/getMoviesFunctions';

import $ from 'jquery';
import Header from './components/Header'
import ListadoMovies from './components/ListadoMovies';

function App() {

  const [movies, setMovies] = useState(null)
  const [trajoDatos, setTrajoDatos] = useState(false)    

  
  useEffect(() => {



  }, [movies])

  return (

    <Fragment>

      <Header setMovies={setMovies} setTrajoDatos={setTrajoDatos}>
       
      </Header>

      <div className='container'>

      { 

        trajoDatos ? 
        
          <div className="row" style={{justifyContent:'center', display:'flex'}}>

            <ListadoMovies movies={movies}/>

          </div>
        
        :

          <p>Loading...</p>
        
      }

      </div>

    </Fragment>

  );
}

export default App;
