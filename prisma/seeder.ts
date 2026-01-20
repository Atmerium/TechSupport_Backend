import { PrismaClient } from "../generated/prisma/client"
import dotenv from 'dotenv'
const prisma = new PrismaClient()

dotenv.config();

async function main() {
  
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
