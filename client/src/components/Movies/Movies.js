import React from 'react';
import {useMovielistNamesQuery} from '../../generated/apollo-components';
import ListGroup from 'react-bootstrap/ListGroup'
import {Link} from 'react-router-dom'

const Movies = () => {
    const {data, loading, error} = useMovielistNamesQuery()

    if (loading) return 'loading'
    if (error) return 'error'

    return (
        <ListGroup>
            {data.movies.map(movie => (
                /*
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                    <ListGroup.Item key={movie.id}>{movie.name}</ListGroup.Item>
                </Link>
                */
                <ListGroup.Item key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.name}</Link></ListGroup.Item>
            ))}
        </ListGroup>
    )
};

export default Movies;
