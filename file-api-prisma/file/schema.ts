import {createModule,gql} from 'graphql-modules';
import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();
export const fileModule = createModule({
    id:"file-module",
    dirname:__dirname,
    typeDefs:[
        gql`  type File{
            id:ID!       
            name:String!   
            directoryId:String!
            createdAt:String      
            updatedAt:String      
            versions:[FileVersion]
          }

          extend type Query{
            getAllFiles:[File!]
          }
          `

    ],
    resolvers:{
        Query:{
            getAllFiles:()=>prismaClient.file.findMany(),
        }
    }
})

