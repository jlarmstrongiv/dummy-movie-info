import Mutation from './Mutation'
import Query from './Query'
import Movie, {topNMovies} from './Movie'
import Director from './Director'
import Actor from './Actor'
//import { topNMovies } from './Movie'


const types = [Mutation, Query, Movie, Director, Actor, topNMovies];

export default types;