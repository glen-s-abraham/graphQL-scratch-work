// eslint-disable-next-line
require("dotenv").config()
import express from "express"
import {graphqlHTTP} from "express-graphql"
import { PrismaClient } from "@prisma/client"
import {createApplication,createModule,gql} from 'graphql-modules';
import {directoryModule} from './directory/schema';
import {fileModule} from './file/schema';
import {fileVersionModule} from './fileVersion/schema';

const prisma = new PrismaClient();

const mainModule = createModule({
  id:'main-module',
  dirname:__dirname,
  typeDefs:[
    gql`
      type Query{
        greeting:String!
      }
    `
  ],
  resolvers:{
    Query:{
      greeting:()=>"graphql"
    }
  }
})

const api = createApplication({
  modules:[mainModule,directoryModule,fileModule,fileVersionModule]
})


const app = express()
const port = 3000
app.use("/graphql",graphqlHTTP({schema:api.schema,customExecuteFn:api.createExecution(),graphiql:process.env.NODE_ENV === 'development'}))

app.listen(port, () => {
  console.log(`Application running on port ${port}.`)
})
