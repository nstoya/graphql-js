const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')


const resolvers = {
    Query: {
        info: () => 'This is the API of a Hackernews Clone',
        feed: (root, args, context, info) => {
            return context.prisma.links()
        },
        link: (root, args, context, info) => {
            return context.prisma.links().find((x) => x.id === args.id)
        }
    },
    Mutation: {
        post: (root, args, context) => {
            return context.prisma.createLink ({ 
                description: args.description,
                url: args.url
            })
        },
        updateLink: (root, args, context) => {
            return context.prisma.updateLink({
                id: args.id, 
                description: args.description, 
                url: args.url})
            
        },
        deleteLink: (root, args, context) => {
            return context.prisma.deleteLink(args.id)
        }
    }

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