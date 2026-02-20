import {faker} from "@faker-js/faker"
import dotenv from 'dotenv'
import { PrismaClient }  from "../generated/prisma/client";

dotenv.config();

const prisma = new PrismaClient()

console.log("seeding...")

const main = async () => {
  for (let i = 0; i < 5; i++) {
    await prisma.parts.create({
      data: {
        partName: faker.lorem.slug(),
        partVisible: false
      }
    })
  }

  for (let i = 0; i < 5; i++) {
         await prisma.brands.create({
        data: {
          brandName: faker.commerce.productName(),
          brandDescription: faker.commerce.productDescription(),
          partId: faker.number.int({
          min:1,
          max: 15
        }),
        brandVisible: false
      }
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
