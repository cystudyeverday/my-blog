/*
  Warnings:

  - You are about to drop the `VisiLog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "VisiLog";

-- CreateTable
CREATE TABLE "VisitLog" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userAgent" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "VisitLog_pkey" PRIMARY KEY ("id")
);
