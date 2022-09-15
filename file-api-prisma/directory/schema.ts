import {createModule,gql} from 'graphql-modules';
import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();
export const directoryModule = createModule({
    id:"directory-module",
    dirname:__dirname,
    typeDefs:[
        gql`  type Directory{
            id:ID!       
            name:String!
            parentId:String
            createdAt:String
            updatedAt:String
            files:[File!]
            directories:[Directory!]
          }

          extend type Query{
            getAllDirectories:[Directory]
          }
          `

    ],
    resolvers:{
        Query:{
            getAllDirectories:()=>prismaClient.directory.findMany(),
        }
    }
})

