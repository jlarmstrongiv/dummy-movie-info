import {prismaObjectType} from 'nexus-prisma'

const Mutation = prismaObjectType({
    name: 'Mutation',
    definition(t) {
        // t.prismaFields(['*'])
        t.prismaFields(['createMovie'])
    }
});

export default Mutation;