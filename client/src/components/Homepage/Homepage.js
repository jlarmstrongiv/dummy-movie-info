import React from 'react';
import Movies from '../Movies/Movies'
import Movie from '../Movie/Movie'
import Actors from '../Actors/Actors'
import Actor from '../Actor/Actor'
import Directors from '../Directors/Directors'
import Director from '../Director/Director'

import {Switch, Route, Link} from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            <h1>Top-N Movies</h1>
            <img src={`https://source.unsplash.com/600x300/?puppy`}></img>
            <br />
            <Link to='/movies'>Movies</Link>
            <br />
            <Link to='/directors'>Directors</Link>
            <br />
            <Link to='/actors'>Actors</Link>
            <br />
            <a href="http://trailerstudy.herokuapp.com/3405" target="_blank">Trailer Study Example</a>
        </div>
    )
};

export default Homepage;
