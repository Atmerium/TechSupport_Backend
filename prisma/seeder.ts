import {faker} from "@faker-js/faker"
import dotenv from 'dotenv'
import { PrismaClient }  from "../generated/prisma/client";

dotenv.config();

const prisma = new PrismaClient()

console.log("seeding...")

const main = async () => {
  for (let i = 0; i < 15; i++) {
    await prisma.users.create({
      data: {
        userEmail: faker.internet.email(),
        userPassword: faker.internet.password(),
        userRememberMe: faker.datatype.boolean(),
        userVisible: false
      }
    })

    await prisma.categories.create({
      data: {
        categoryName: faker.lorem.slug(),
        categoryVisible: false
      }
    })
  }

  for (let i = 0; i < 15; i++) {
         await prisma.components.create({
        data: {
          componentBrand: faker.commerce.productName(),
          componentDescription: faker.commerce.productDescription(),
          categoryId: faker.number.int({
          min:1,
          max: 15
        }),
        componentVisible: false
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
