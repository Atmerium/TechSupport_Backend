-- CreateTable
CREATE TABLE `Components` (
    `componentId` INTEGER NOT NULL AUTO_INCREMENT,
    `componentName` VARCHAR(191) NOT NULL,
    `componentDescription` VARCHAR(191) NULL,
    `adviceId` INTEGER NULL,

    PRIMARY KEY (`componentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Advices` (
    `adviceId` INTEGER NOT NULL AUTO_INCREMENT,
    `advice` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`adviceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Components` ADD CONSTRAINT `Components_adviceId_fkey` FOREIGN KEY (`adviceId`) REFERENCES `Advices`(`adviceId`) ON DELETE SET NULL ON UPDATE CASCADE;
