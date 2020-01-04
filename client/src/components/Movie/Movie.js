import React from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useCallOneMovieQuery} from '../../generated/apollo-components'
import ListGroup from 'react-bootstrap/ListGroup'

const Movie = () => {
    const {id} = useParams()

    const { data, loading, error } = useCallOneMovieQuery({
        variables: {
           id,
        },
      });

    if (loading) return 'loading'
    if (error) return 'error'

    //console.log(data)  // can see output with F12 in the browser
    const { name, description, actors } = data.movie

    return (
        
        <div>
            <Link to="/movies">Back to Top-N Movies</Link>
            <br />
            {name}
            <br />
            <img src={`https://source.unsplash.com/800x400/?${name}`}/>
            <br />
            {description}
            <br />
            <ListGroup>
                {actors.map(actor => (
                    <ListGroup.Item key={actor.id}>{actor.name}</ListGroup.Item>
                ))}
            </ListGroup>
        </div>
        
        )
    }
    //<div>{data.movie.name}</div>
    
export default Movie