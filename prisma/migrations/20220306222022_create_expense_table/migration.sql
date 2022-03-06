-- CreateTable
CREATE TABLE "expense" (
    "id" TEXT NOT NULL,
    "tittle" TEXT NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "expense_pkey" PRIMARY KEY ("id")
);
