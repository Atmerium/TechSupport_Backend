-- AlterTable
ALTER TABLE `advices` ADD COLUMN `adviceVisible` BOOLEAN NULL DEFAULT true;

-- AlterTable
ALTER TABLE `components` ADD COLUMN `componentVisible` BOOLEAN NULL DEFAULT true;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `userVisible` BOOLEAN NULL DEFAULT true;
