import React from 'react';
import {useCallActorsQuery} from '../../generated/apollo-components';
import ListGroup from 'react-bootstrap/ListGroup'
import {Link} from 'react-router-dom'

const Actors = () => {
    const {data, loading, error} = useCallActorsQuery()

    if (loading) return 'loading'
    if (error) return 'error'

    return (
        <ListGroup>
            {data.actors.map(actor => (
                <ListGroup.Item key={actor.id}><Link to={`/actors/${actor.id}`}>{actor.name}</Link></ListGroup.Item>
            ))}
        </ListGroup>
        /*
        <div>
            {data.actors.map(actor => (
                <div key={actor.id}>{actor.name}</div>
            ))}
        </div>
        */
    )
};

export default Actors;
