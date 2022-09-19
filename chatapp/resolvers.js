import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    greeting: () => "Holy Cow",
  },
  Mutation: {
    signUpUser: async (_, { input }) => {
      const password = await bcrypt.hash(input.password, 10);
      return prisma.user.create({
        data: {
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          password: password,
        },
      });
    },
  },
};

export default resolvers;
