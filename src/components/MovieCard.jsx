import '../assets/css/cardStyle.css'

import React, {Fragment} from "react";

import $ from 'jquery';

const MovieCard = ({movie, index}) => {
  
    const handleOnMouseEnter = () => {
	
	// Lift 
        $('.product-card-'+index).addClass('animate');
        $('div.carouselNext, div.carouselPrev').addClass('visible');			
      
        // $('#product-card').removeClass('animate');			
        // $('div.carouselNext, div.carouselPrev').removeClass('visible');

          console.log('hola');
    }

    const handleOnMouseLeave = () => {

        $('.product-card-'+index).removeClass('animate');			
        $('div.carouselNext, div.carouselPrev').removeClass('visible');		

        console.log('chau');
      
    }

    return ( 

            <div id='movie-card' className='col-3 col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-3'>
                <div id="make-3D-space">
                    <div id="product-card" className={'product-card-' + index} onMouseEnter={()=>handleOnMouseEnter()} onMouseLeave={()=>handleOnMouseLeave()}>
                        <div id="product-front">
                            <div class="shadow"></div>
                            <div style={{height:300}}>
                                <img src={process.env.REACT_APP_MOVIE_DB_IMAGE + movie.poster_path} style={{width:'100%',objectFit:'contain'}} alt="" />
                            </div>
                            <div class="image_overlay"></div>
                            <div id="view_details">View details</div>
                            <div class="stats">        	
                                <div class="stats-container">
                                    {/* <span class="product_price">$39</span> */}
                                    <span class="product_name">{movie.original_title}</span>    
                                    <p>Men's running shirt</p>                                            
                                    
                                    <div class="product-options">
                                    <strong>SIZES</strong>
                                    <span>XS, S, M, L, XL, XXL</span>
                                    <strong>COLORS</strong>
                                    <div class="colors">
                                        <div class="c-blue"><span></span></div>
                                        <div class="c-red"><span></span></div>
                                        <div class="c-white"><span></span></div>
                                        <div class="c-green"><span></span></div>
                                    </div>
                                </div>                       
                                </div>                         
                            </div>
                        </div>
                        <div id="product-back">
                            <div class="shadow"></div>
                            <div id="carousel">
                                <ul>
                                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large.png" alt="" /></li>
                                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large2.png" alt="" /></li>
                                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large3.png" alt="" /></li>
                                </ul>
                                <div class="arrows-perspective">
                                    <div class="carouselPrev">
                                        <div class="y"></div>
                                        <div class="x"></div>
                                    </div>
                                    <div class="carouselNext">
                                        <div class="y"></div>
                                        <div class="x"></div>
                                    </div>
                                </div>
                            </div>
                            <div id="flip-back">
                                <div id="cy"></div>
                                <div id="cx"></div>
                            </div>
                        </div>	  
                    </div>	
                </div>	
            </div>
     );

}
 
export default MovieCard;