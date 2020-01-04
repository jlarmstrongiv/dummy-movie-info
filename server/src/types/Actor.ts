import {prismaObjectType} from 'nexus-prisma'

const Actor = prismaObjectType({
    name: 'Actor',
    definition(t) {
        t.prismaFields(['*'])
    }
});

export default Actor;