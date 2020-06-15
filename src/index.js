const { GraphQLServer } = require('graphql-yoga')


let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: "Fullstack tutorial for GraphQL"
}]
let idCount =  links.length

const resolvers = {
    Query: {
        info: () => 'This is the API of a Hackernews Clone',
        feed: () => links,
        link: (parent, args) => {
            return links.find((x) => x.id === args.id)
        }
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url
            }
            links.push(link)
            return link
        },
        updateLink: (parent, args) => {
            let link = links.find((x) => x.id === args.id)
            if(!link){
                return null
            }else{
                link.description = args.description
                link.url = args.url
                return link
            }
            
        },
        deleteLink: (parent, args) => {
            
            let idx = links.findIndex((x) => x.id === args.id)
            if(idx == -1){
                return null
            }else{
                let removed = links.splice(idx, 1)
                console.log(removed);
            }
        }
    }

}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})

server.start(() => console.log(`Server is running on http://localhost: 4000`))