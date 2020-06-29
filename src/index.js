const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Mutation = require('./resolvers/Mutations')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Query = require('./resolvers/Query')


const resolvers = {
    Query,
    Mutation,
    User,
    Link
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return{
            ...request,
             prisma 
        }
    }
})

server.start(() => console.log(`Server is running on http://localhost: 4000`))