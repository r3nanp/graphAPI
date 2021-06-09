import { prisma } from '@shared/prisma/connect'

interface ProductParams {
  id: string
}

type CreateProduct = {
  data: {
    id: string
    title: string
    price: number
    quantity: number
  }
}

async function getProducts() {
  const product = await prisma.product.findMany()

  return product
}

async function getProduct({ id }: ProductParams) {
  const products = await prisma.product.findUnique({
    where: {
      id
    },
  })
  return products
}

async function createProduct({ data }: CreateProduct) {
  const products = await prisma.product.create({
    data,
  })

  return products
}

export const resolvers = {
  Query: {
    products: getProducts,
    product: getProduct,
  },
  Mutation: {
    createProduct,
  },
}
