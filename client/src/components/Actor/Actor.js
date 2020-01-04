import React from 'react'
import {useParams} from 'react-router-dom'
import {useCallOneActorQuery} from '../../generated/apollo-components'

const Actor = () => {
    const {id} = useParams()

    const { data, loading, error } = useCallOneActorQuery({
        variables: {
           id,
        },
      });

      if (loading) return 'loading'
      if (error) return 'error'
      

    return (
        <div>{data.actor.name}</div>
    )
}

export default Actor