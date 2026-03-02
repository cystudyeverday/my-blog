import { prisma } from './client'

export const createPrompt = async (prompt: string) => {
  return await prisma.promptLog.create({
    data: {
      prompt,
    },
  });
}

export const getPromptLogs = async () => {
  return await prisma.promptLog.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
}