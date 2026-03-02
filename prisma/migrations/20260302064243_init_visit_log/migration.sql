-- CreateTable
CREATE TABLE "VisiLog" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userAgent" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "VisiLog_pkey" PRIMARY KEY ("id")
);
