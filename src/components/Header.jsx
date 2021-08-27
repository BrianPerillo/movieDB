import React, {Fragment} from 'react'

import { getMovieByName } from '../services/getMoviesFunctions';

const Header = ({setMovies, setTrajoDatos}) => {

    const handleOnChange = async (e) => {

        const value = e.target.value;
        const res = await getMovieByName(value)
        setMovies(res.data.results)
        setTrajoDatos(true)
        
    }

    return ( 

        <header style={{padding:'15px', backgroundColor:'gray'}}>
            <nav className="row d-flex justify-content-center">
                <div className="col-3">
                    <h1>Nombre Web</h1>
                </div>
                <div className="col-3" style={{display:'flex'}}>
                    <form style={{alignSelf:'center', width:'100%'}}>
                        <input className="form-control" type="text" placeholder="Buscar por nombre..." onChange={handleOnChange} />
                    </form>
                </div>
                <div className="col-3">
                  
                </div>
            </nav>
        </header>

     );

}
 
export default Header;
