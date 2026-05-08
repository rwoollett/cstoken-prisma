/*
  Warnings:

  - You are about to drop the column `parentIp` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the `RequestParent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_parentIp_fkey";

-- DropIndex
DROP INDEX "Client_parentIp_key";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "parentIp";

-- DropTable
DROP TABLE "RequestParent";
