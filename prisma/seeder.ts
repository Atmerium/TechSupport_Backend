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

    await prisma.components.create({
      data: {
        componentName: faker.commerce.productName(),
        componentDescription: faker.commerce.productDescription(),
        componentVisible: false
      }
    })

    await prisma.advices.create({
      data: {
        adviceContent: faker.lorem.text(),
        adviceVisible: false
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
