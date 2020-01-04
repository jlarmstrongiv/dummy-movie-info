import gql from 'graphql-tag';

export const MOVIE_LISTS = gql`
query movielistNames{
    movies {
      id
      name
      description
      actors {
        id
        name
      }
    }    
}
`

export const CALL_ACTORS = gql`
query callActors{
  actors {
    id
    name
  }
}
`

export const CALL_ONE_MOVIE = gql`
query callOneMovie($id: ID!){
  movie (where: {
    id: $id
  }) {
    name
    id
    actors {
      name
    }
  }
}
`

export const CALL_DIRECTORS = gql`
  query callDirectors {
  directors {
    id
    name
  }
}
`

export const CALL_ONE_DIRECTOR = gql`
query callOneDirector ($id: ID!) {
  director (where: {
    id: $id
  }) {
    id
    name
  }
}
`

export const CALL_ONE_ACTOR = gql`
query callOneActor($id: ID!) {
  actor (where: {
    id: $id
  }) {
    id
    name
  }
}
`