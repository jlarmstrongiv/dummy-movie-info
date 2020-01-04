import React from 'react';
import {useCallDirectorsQuery} from '../../generated/apollo-components';
import ListGroup from 'react-bootstrap/ListGroup'
import {Link} from 'react-router-dom'

const Directors = () => {
    console.log('LOADED')

    const {data, loading, error} = useCallDirectorsQuery()

    if (loading) return 'loading'
    if (error) return 'error'

    console.log(data)

    return (
        <ListGroup>
            {data.directors.map(director => (
                <ListGroup.Item key={director.id}><Link to={`/directors/${director.id}`}>{director.name}</Link></ListGroup.Item>
            ))}
        </ListGroup>
    )
};

export default Directors;




















// before 42
