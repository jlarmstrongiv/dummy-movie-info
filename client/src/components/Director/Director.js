import React from 'react'
import {useParams} from 'react-router-dom'
import {useCallOneDirectorQuery} from '../../generated/apollo-components'

const Director = () => {
    const {id} = useParams()

    const { data, loading, error } =  useCallOneDirectorQuery ({
        variables: {
           id,
        },
      });

      if (loading) return 'loading'
      if (error) return 'error'
      

    return (
        <div>{data.director.name}</div>
    )
}

export default Director