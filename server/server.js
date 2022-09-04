const { ApolloServer,gql } = require("apollo-server");

const typeDefs = gql`
    type Query{
        greeting:String
    },
`;

const resolvers = {
    Query:{
        greeting:()=>'Hello world'
    }
}

const server = new ApolloServer({
    typeDefs,resolvers
})


server.listen({port:9000})
.then(info=>console.log(`Server running on ${info.url}`))
.catch(err=>console.log(err));


