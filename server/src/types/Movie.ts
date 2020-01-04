import {prismaObjectType, prismaExtendType} from 'nexus-prisma'
import { intArg } from 'nexus/dist';

const Movie = prismaObjectType({
    name: 'Movie',
    definition(t) {
        // t.prismaFields(['*'])
        t.prismaFields({filter: [
            'updatedAt',
            'createdAt',
        ]})
        // customize a computed field
        t.field('filter', {
            type: 'String',
            resolve( {name} ) {
                return 'Do you like this song: ${name}? ${name.toUpperCase()}'
            }
        })
    }
});

// customize a computed query
export const topNMovies = prismaExtendType({
    type: 'Query',
    definition(t) {
        t.field('topNMovies', {
            ... t.prismaType.movies, // declare the return type
            args: {
                rating: intArg({
                    default: 5, 
                    description: 'Movie rating',
                    nullable: true,
                })
            },
            resolve(parent, {rating}, ctx) {
                return ctx.prisma.movies({where: {rating_gt: 3}})
            }    
        })
    }
})

export default Movie;