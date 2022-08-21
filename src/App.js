import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import MoviesCard from './components/MoviesCard';
import MoviesList from './components/MoviesList';
import Description from './components/description';



function App() {
  
  return (
    < >
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<MoviesList />} />
    <Route path="/description" element={<Description />} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
