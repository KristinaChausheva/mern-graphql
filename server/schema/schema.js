const { projects, clients } = require("../sampleData")

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql")

// Client Type
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
})

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // projects: {
    //   type: new GraphQLList(ProjectType),
    //   resolve(parent, args) {
    //     return Project.find()
    //   },
    // },
    // project: {
    //   type: ProjectType,
    //   args: { id: { type: GraphQLID } },
    //   resolve(parent, args) {
    //     return Project.findById(args.id)
    //   },
    // },
    // clients: {
    //   type: new GraphQLList(ClientType),
    //   resolve(parent, args) {
    //     return Client.find()
    //   },
    // },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return clients.find((clinet) => client.id === args.id)
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})
