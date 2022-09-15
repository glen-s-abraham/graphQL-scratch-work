import {createModule,gql} from 'graphql-modules';
import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();
export const fileVersionModule = createModule({
    id:"fileVersion-module",
    dirname:__dirname,
    typeDefs:[
        gql`  type FileVersion{
            id:ID!       
            name:String!
            mimeType:String!
            size:Int!
            fileId:String!
            createdAt:String
            updatedAt:String
          }

          extend type Query{
            getAllFileVersions:[FileVersion!]
          }
          `

    ],
    resolvers:{
        Query:{
            getAllFileVersions:()=>prismaClient.fileVersion.findMany(),
        }
    }
})

