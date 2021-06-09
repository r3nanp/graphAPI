import { prisma } from '@shared/prisma/connect'

export const resolvers = {
  Query: {
    products: () => {
      return prisma.product.findMany()
    },
    product: (id: number) => {
      return prisma.product.findUnique({
        where: {
          id,
        },
      })
    },
  },
}
