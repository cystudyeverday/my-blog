import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

function createClient() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  return new PrismaClient({ adapter })
}

const client = global.prisma ?? createClient()
if (process.env.NODE_ENV === 'development') global.prisma = client

export const prisma = client;
