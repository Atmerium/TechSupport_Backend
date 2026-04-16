/*
  Warnings:

  - You are about to drop the `advices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `components` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userName]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userEmail]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userName` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `components` DROP FOREIGN KEY `Components_adviceId_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `userName` VARCHAR(191) NOT NULL,
    ADD COLUMN `userRole` VARCHAR(191) NOT NULL DEFAULT 'user';

-- DropTable
DROP TABLE `advices`;

-- DropTable
DROP TABLE `components`;

-- CreateTable
CREATE TABLE `brands` (
    `brandId` INTEGER NOT NULL AUTO_INCREMENT,
    `brandName` VARCHAR(191) NOT NULL,
    `brandDescription` TEXT NULL,
    `partId` INTEGER NULL,
    `brandVisible` BOOLEAN NULL DEFAULT true,

    PRIMARY KEY (`brandId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `token` (
    `token` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `parts` (
    `partId` INTEGER NOT NULL AUTO_INCREMENT,
    `partName` VARCHAR(191) NOT NULL,
    `partDescription` TEXT NULL,
    `partVisible` BOOLEAN NULL DEFAULT true,

    PRIMARY KEY (`partId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `builds` (
    `buildId` INTEGER NOT NULL AUTO_INCREMENT,
    `buildName` VARCHAR(191) NOT NULL,
    `buildDescription` TEXT NULL,
    `buildVisible` BOOLEAN NULL DEFAULT true,
    `buildCategory` INTEGER NOT NULL DEFAULT 1,
    `buildClass` INTEGER NULL DEFAULT 1,

    PRIMARY KEY (`buildId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comments` (
    `commentId` INTEGER NOT NULL AUTO_INCREMENT,
    `commentContent` TEXT NOT NULL,
    `commentVisible` BOOLEAN NULL DEFAULT true,
    `commentDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `buildId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`commentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `users_userName_key` ON `users`(`userName`);

-- CreateIndex
CREATE UNIQUE INDEX `users_userEmail_key` ON `users`(`userEmail`);

-- AddForeignKey
ALTER TABLE `brands` ADD CONSTRAINT `brands_partId_fkey` FOREIGN KEY (`partId`) REFERENCES `parts`(`partId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `token` ADD CONSTRAINT `token_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_buildId_fkey` FOREIGN KEY (`buildId`) REFERENCES `builds`(`buildId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
