/*
  Warnings:

  - Added the required column `type` to the `expense` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "expense" ADD COLUMN     "type" TEXT NOT NULL;
