import React from 'react';
import Movies from '../Movies/Movies'
import Movie from '../Movie/Movie'
import Actors from '../Actors/Actors'
import Actor from '../Actor/Actor'
import Directors from '../Directors/Directors'
import Director from '../Director/Director'
import Homepage from '../Homepage/Homepage'
import Navigation from '../Navigation/Navigation'

import {Switch, Route, Link} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Navigation />
            <Switch>
                <Route path='/' exact component={Homepage} />
                <Route path='/movies' exact component={Movies} />
                <Route path='/movies/:id' exact component={Movie} />
                <Route path='/directors' exact component={Directors} />
                <Route path='/directors/:id' exact component={Director} />
                <Route path='/actors' exact component={Actors} />
                <Route path='/actors/:id' exact component={Actor} />
            </Switch>
        </div>
    )
};

export default App;
