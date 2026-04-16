-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 16, 2026 at 08:17 AM
-- Server version: 8.4.3
-- PHP Version: 8.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tech_support_db`
--
CREATE DATABASE IF NOT EXISTS `tech_support_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `tech_support_db`;

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `brandId` int NOT NULL,
  `brandName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brandDescription` text COLLATE utf8mb4_unicode_ci,
  `partId` int DEFAULT NULL,
  `brandVisible` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`brandId`, `brandName`, `brandDescription`, `partId`, `brandVisible`) VALUES
(1, 'Intel', 'Az Intel a \"Core i\" sorozattal határozza meg a piaci szinteket (i3, i5, i7, i9). A \"K\" a tuningot, az \"F\" a grafika hiányát jelzi.', 1, 1),
(2, 'AMD', 'A Ryzen széria gyártója. Az \"X3D\" modellek extra gyorsítótárral a legjobb gamer chipek, a \"G\" pedig az erős integrált grafikát jelöli.', 1, 1),
(3, 'ASUS', 'ROG (prémium), TUF Gaming (strapabíró) és Prime (irodai/általános) szériák gyártója.', 2, 1),
(4, 'MSI', 'A MEG (csúcs), MPG (gamer dizájn) és MAG/Tomahawk (ár-érték bajnok) alaplapok készítője.', 2, 1),
(5, 'Gigabyte', 'Az Aorus gamer vonalról és a tartós hűtőbordákkal szerelt alaplapjairól ismert.', 2, 1),
(6, 'NVIDIA', 'Az RTX széria és a DLSS technológia úttörője. A \"Ti\" és \"Super\" jelzések az erősebb változatokat takarják.', 3, 1),
(7, 'AMD Radeon', 'Kiváló nyers erejű kártyák (RX széria), amelyek gyakran több VRAM-ot kínálnak kedvezőbb áron.', 3, 1),
(8, 'Kingston', 'A Fury Beast a megbízható standard, a Fury Renegade a magas sebességű prémium vonal.', 4, 1),
(9, 'Corsair', 'A Vengeance a legnépszerűbb középkategória, a Dominator Platinum pedig a luxus kivitel.', 4, 1),
(10, 'G.Skill', 'A Trident Z sorozat a tuningosok kedvence, extrém sebességű és alacsony késleltetésű modulokkal.', 4, 1),
(11, 'Samsung', 'Piacvezető NVMe SSD-k (980/990 Pro). Saját vezérlőik és chipjeik kiemelkedő stabilitást biztosítanak.', 5, 1),
(12, 'Western Digital', 'Színkódos megoldások: Blue (általános), Black (gamer/gyors), Red (NAS szerver).', 5, 1),
(13, 'Seasonic', 'A tápok egyik legelismertebb gyártója, legendás megbízhatósággal és hosszú garanciával.', 6, 1),
(14, 'be quiet!', 'Német precizitás, ahol a halk működés (Silent Wings ventilátorok) és a stabilitás az elsődleges.', 6, 1),
(15, 'Fractal Design', 'Minimalista skandináv dizájn (North, Meshify, Define szériák), kiváló anyaghasználattal.', 7, 1),
(16, 'NZXT', 'Letisztult kocka forma (H-széria), integrált vezérlőkkel és látványos üvegfelületekkel.', 7, 1),
(17, 'Noctua', 'Osztrák prémium hűtők. A világ leghalkabb és legtartósabb ventilátorait készítik.', 8, 1),
(18, 'Arctic', 'A legjobb ár-érték arányú hűtések (Liquid Freezer) és hővezető paszták (MX-széria) gyártója.', 8, 1);

-- --------------------------------------------------------

--
-- Table structure for table `builds`
--

CREATE TABLE `builds` (
  `buildId` int NOT NULL,
  `buildName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `buildDescription` text COLLATE utf8mb4_unicode_ci,
  `buildVisible` tinyint(1) DEFAULT '1',
  `buildCategory` int NOT NULL DEFAULT '1',
  `buildClass` int DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `commentId` int NOT NULL,
  `commentContent` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `commentVisible` tinyint(1) DEFAULT '1',
  `commentDate` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `buildId` int NOT NULL,
  `userId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `parts`
--

CREATE TABLE `parts` (
  `partId` int NOT NULL,
  `partName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `partDescription` text COLLATE utf8mb4_unicode_ci,
  `partVisible` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `parts`
--

INSERT INTO `parts` (`partId`, `partName`, `partDescription`, `partVisible`) VALUES
(1, 'Processzor (CPU)', 'A számítógép központi feldolgozó egysége, az \"agy\", amely az összes számítási feladatot és utasítást vezérli.', 1),
(2, 'Alaplap (Motherboard)', 'A rendszer fő áramköre, amely minden alkatrészt összeköt és árammal lát el.', 1),
(3, 'Videokártya (GPU)', 'A grafikai számításokért és a képi megjelenítésért felelős egység.', 1),
(4, 'Memória (RAM)', 'Ideiglenes tároló a futó programok számára. A sebesség (MHz) és kapacitás (GB) határozza meg a rendszer válaszidejét.', 1),
(5, 'Háttértár (SSD/HDD)', 'Az adatok tartós tárolója. Az NVMe SSD-k a modern rendszerek alapkövei a sebességük miatt.', 1),
(6, 'Tápegység (PSU)', 'A gép stabil áramellátásáért felel. A hatékonyságot a 80 Plus minősítések jelzik.', 1),
(7, 'Számítógépház', 'Az alkatrészek vázszerkezete, amely a védelmet és a megfelelő légáramlást (Airflow) biztosítja.', 1),
(8, 'Hűtőrendszer', 'A processzor és a ház hűtéséért felelős egységek (Léghűtés vagy Vízhűtés).', 1);

-- --------------------------------------------------------

--
-- Table structure for table `token`
--

CREATE TABLE `token` (
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int NOT NULL,
  `userEmail` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userPassword` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userRememberMe` tinyint(1) NOT NULL DEFAULT '0',
  `userVisible` tinyint(1) DEFAULT '1',
  `userName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userRole` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('032aeab0-677d-41e6-bc4d-95ac55c41057', '84a7190ac2379f52fe72f5c42915ed84743d56a5fabfc5cb58cefbbfa7f85a09', '2026-04-16 08:16:11.606', '20260105110102_users_create_database', NULL, NULL, '2026-04-16 08:16:11.587', 1),
('8261926a-5c2c-4ca1-a1bb-c66c2a885f5b', 'bfbb7c08612fe889327b5f0038567231a627c68883fb809d1932f56d15a68499', '2026-04-16 08:16:18.334', '20260416081618_final_create_table', NULL, NULL, '2026-04-16 08:16:18.113', 1),
('bbc5f6be-8acf-4005-beb5-6ff249003c10', 'e00c52fec27bb914c6868ea9a6dde414e88c24f40f74687466523c58b7487006', '2026-04-16 08:16:11.615', '20260108103317_components_create_database', NULL, NULL, '2026-04-16 08:16:11.607', 1),
('ce772adf-b460-486d-800c-11971bb0725c', '6fe662fdb77be74307c59ed6497c0667bd85633382d908ec9452685e397fe542', '2026-04-16 08:16:11.639', '20260120083150_components_create_database', NULL, NULL, '2026-04-16 08:16:11.616', 1),
('eea4830e-20eb-4ce5-953d-ab99485de8ea', '060950d4dae3329e0ff8a28c281ba644857067636f50a0f140949fef3d2c28b0', '2026-04-16 08:16:11.586', '20251207162012_components_create_table', NULL, NULL, '2026-04-16 08:16:11.528', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brandId`),
  ADD KEY `brands_partId_fkey` (`partId`);

--
-- Indexes for table `builds`
--
ALTER TABLE `builds`
  ADD PRIMARY KEY (`buildId`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`commentId`),
  ADD KEY `comments_buildId_fkey` (`buildId`),
  ADD KEY `comments_userId_fkey` (`userId`);

--
-- Indexes for table `parts`
--
ALTER TABLE `parts`
  ADD PRIMARY KEY (`partId`);

--
-- Indexes for table `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`token`),
  ADD KEY `token_userId_fkey` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `users_userName_key` (`userName`),
  ADD UNIQUE KEY `users_userEmail_key` (`userEmail`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `brandId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `builds`
--
ALTER TABLE `builds`
  MODIFY `buildId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `commentId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `parts`
--
ALTER TABLE `parts`
  MODIFY `partId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `brands`
--
ALTER TABLE `brands`
  ADD CONSTRAINT `brands_partId_fkey` FOREIGN KEY (`partId`) REFERENCES `parts` (`partId`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_buildId_fkey` FOREIGN KEY (`buildId`) REFERENCES `builds` (`buildId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `token_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
