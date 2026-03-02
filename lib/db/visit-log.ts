import { prisma } from './client'

export const createVisitLog = async (ip: string, userAgent: string, path: string) => {
  await prisma.visitLog.create({
    data: {
      ip,
      userAgent,
      path,
    },
  })
}

export const getVisitLogs = async () => {
  return await prisma.visitLog.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
}
