import { useState } from "react";

const MoviesCard = ({ movies }) => {
    var point = ""
    return (
        
        <div className="list">
            {movies.map((movie) => (
                <div className="card">
                    <img src={movie.url} alt="" />
                    <h2>{movie.title} <span className="rating">| {movie.rating}  <span className="etoile">✰</span>  </span></h2> 
                    <p className="descreption">{((movie.descreption).slice(0,90))+" ... more " } </p>
                    
                </div>
            )  
            )}
        </div>
    );
}

export default MoviesCard;