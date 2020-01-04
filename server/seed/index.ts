import {prisma} from '../generated/prisma-client'
import faker from 'faker'

(async () => {
    // create data
    let movies = [...Array(3)].map(movie => {
        return {
            name: faker.lorem.words(),
            description: faker.lorem.paragraph(),
            posterURL: faker.lorem.sentence(),
            director: faker.name.lastName(),
            actors: [...Array(6)].map(actor => {
                return {
                    name: faker.name.firstName()
                }
            })
        }
    })

    // read data
    for (const movie of movies) {
        const dbMovie = await prisma.createMovie({
            name: movie.name,
            description: movie.description,
            posterURL: movie.posterURL,
            director: {
                create: {
                    name: movie.director,
                }
            }
        })
        for (const actor of movie.actors) {
            const dbActor = await prisma.createActor({
                name: actor.name,
                movieAlbum: {
                    connect: {
                        id: dbMovie.id
                    }
                }
            })
        }
    }

    // console.log(JSON.stringify(movies, null, 6))
})()