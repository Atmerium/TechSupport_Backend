/*
  Warnings:

  - You are about to drop the column `advice` on the `advices` table. All the data in the column will be lost.
  - Added the required column `adviceContent` to the `Advices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `advices` DROP COLUMN `advice`,
    ADD COLUMN `adviceContent` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Users` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `userEmail` VARCHAR(191) NOT NULL,
    `userPassword` VARCHAR(191) NOT NULL,
    `userRememberMe` BOOLEAN NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
