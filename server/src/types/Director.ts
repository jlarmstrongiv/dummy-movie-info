import {prismaObjectType} from 'nexus-prisma'

const Director = prismaObjectType({
    name: 'Director',
    definition(t) {
        t.prismaFields(['*'])
    }
});

export default Director;