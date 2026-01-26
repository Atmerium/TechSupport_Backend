import { PrismaClient } from "../generated/prisma/client"
import {faker} from "@faker-js/faker"
import dotenv from 'dotenv'

const prisma = new PrismaClient()

dotenv.config();

console.log("seeding...")



main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
