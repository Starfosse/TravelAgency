/*
  Warnings:

  - You are about to drop the column `category_id` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Product_Category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Product_category_id_idx";

-- DropIndex
DROP INDEX "Product_category_id_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "category_id";

-- DropTable
DROP TABLE "Product_Category";
