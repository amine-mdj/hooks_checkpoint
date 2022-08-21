import { useState } from "react";
import {useNavigate} from "react-router-dom"

const MoviesCard = ({ movies , onclick }) => {
    var point = ""
    const navigate = useNavigate();
    
    return (
        
        <div className="list">
            {movies.map((movie, index) => (
                <div key={index} className="card" onClick={() => navigate(`/description`, {state : {descreption: movie.descreption,trailer:movie.trailer}})} >
                    <img src={movie.url}  alt="" />
                    <h2>{movie.title} <span className="rating">| {movie.rating}  <span className="etoile">✰</span>  </span></h2> 
                    <p className="descreption">{((movie.descreption).slice(0,90))+" ... more " } </p>
                    
                </div>
            )  
            )}
        </div>
    );
}

export default MoviesCard;