-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 26, 2024 at 10:43 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `estudentdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `applicants`
--

CREATE TABLE `applicants` (
  `id` int(11) NOT NULL,
  `personal_name` varchar(255) NOT NULL,
  `father_name` varchar(255) NOT NULL,
  `grand_father_name` varchar(255) NOT NULL,
  `gender_id` int(11) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `curriculum_id` int(11) NOT NULL,
  `campus_id` int(11) NOT NULL,
  `batch_year_id` int(11) DEFAULT 4,
  `addmision_type_id` int(11) DEFAULT NULL,
  `program_id` int(11) DEFAULT NULL,
  `doc1` varchar(255) DEFAULT NULL,
  `doc2` varchar(255) DEFAULT NULL,
  `doc3` varchar(255) DEFAULT NULL,
  `degree_feild` text DEFAULT NULL,
  `degree_exam_year` text DEFAULT NULL,
  `degree_cgpa` double DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `remark` text DEFAULT NULL,
  `remark_2` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `online_key` varchar(255) DEFAULT NULL,
  `online_status` varchar(255) DEFAULT NULL,
  `online_approved_by` text DEFAULT NULL,
  `temp` varchar(255) DEFAULT NULL,
  `consumer_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `applicants`
--

INSERT INTO `applicants` (`id`, `personal_name`, `father_name`, `grand_father_name`, `gender_id`, `age`, `birth_date`, `address`, `phone`, `curriculum_id`, `campus_id`, `batch_year_id`, `addmision_type_id`, `program_id`, `doc1`, `doc2`, `doc3`, `degree_feild`, `degree_exam_year`, `degree_cgpa`, `status`, `remark`, `remark_2`, `created_at`, `updated_at`, `email`, `online_key`, `online_status`, `online_approved_by`, `temp`, `consumer_id`) VALUES
(1, 'ABEBE', 'SHIBRU', 'H/MARIAM', 1, NULL, '1976-01-01', NULL, '954697750', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'MANAGEMENT', '2004', 0, NULL, 'student', NULL, '2021-01-02 13:01:29', '2021-01-21 12:55:43', NULL, NULL, NULL, NULL, '213011', NULL),
(2, 'BONTU', 'TEKLU', 'REGASA', 2, NULL, '1994-01-01', NULL, '909816743', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'COMPUTER SCE', '2015', 0, NULL, 'student', NULL, '2021-01-02 13:01:30', '2021-01-03 16:51:32', NULL, NULL, NULL, NULL, '213012', NULL),
(3, 'ADDISU', 'TADESSE', 'GEMECHU', 1, NULL, '1987-01-01', NULL, '929364609', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'Accounting ', '2099', 0, NULL, 'pending', NULL, '2021-01-02 13:01:30', '2021-01-03 16:43:02', NULL, NULL, NULL, NULL, '213013', NULL),
(4, 'ALEMAYEHU', 'BELIHUI', 'DADI', 1, NULL, '1989-01-01', NULL, '912218058', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'Accounting ', '2099', 0, NULL, 'pending', NULL, '2021-01-02 13:01:30', '2021-01-03 16:46:22', NULL, NULL, NULL, NULL, '213014', NULL),
(5, 'DEREJE', 'GELETA', 'BEDADA', 1, NULL, '1981-01-01', NULL, '902282378', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'Accounting ', '2099', 0, NULL, 'pending', NULL, '2021-01-02 13:01:30', '2021-01-03 16:06:09', NULL, NULL, NULL, NULL, '213015', NULL),
(6, 'TAMIRAT ', 'WORKU', 'KEBEDE', 1, NULL, '1977-01-01', NULL, '912040209', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'MATHEMATICS', '2010', 0, NULL, 'Only Applpicant', NULL, '2021-01-02 13:01:30', '2021-01-03 16:51:39', NULL, NULL, NULL, NULL, '213016', NULL),
(7, 'MENGESH', 'DEGU', 'DERCHE', 1, NULL, '1973-01-01', NULL, '911628346', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'Accounting ', '2018', 0, NULL, 'Only Applpicant', NULL, '2021-01-02 13:01:30', '2021-01-03 16:51:37', NULL, NULL, NULL, NULL, '213017', NULL),
(8, 'BELETE', 'GEBISA', 'SENETA', 1, NULL, '1980-01-01', NULL, '910237647', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'Accounting  ', '2015', 0, NULL, 'student', NULL, '2021-01-02 13:01:30', '2021-01-03 16:51:31', NULL, NULL, NULL, NULL, '213018', NULL),
(9, 'ASKALE', 'TESEMA', 'REGASA', 1, NULL, '1985-01-01', NULL, '912294384', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'BANKING &INSURANCES', '2008', 0, NULL, 'student', NULL, '2021-01-02 13:01:30', '2021-01-22 12:07:11', NULL, NULL, NULL, NULL, '213019', NULL),
(10, 'HENOK', 'DEMEKE', 'TESAYE', 1, NULL, '1993-01-01', NULL, '915839536', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'ACCOUNTING ', '2010', 0, NULL, 'Only Applpicant', NULL, '2021-01-02 13:01:30', '2021-01-03 16:51:36', NULL, NULL, NULL, NULL, '213020', NULL),
(11, 'YAMLAKSIRA', 'DESALEGN', 'LEMA', 1, NULL, '1983-01-01', NULL, '912805501', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'ACCOUNTING', '2013', 0, NULL, 'Only Applpicant', NULL, '2021-01-02 13:01:30', '2021-01-03 16:51:41', NULL, NULL, NULL, NULL, '213021', NULL),
(12, 'WUBALEM', 'MAKONIN', 'JEMA', 2, NULL, '1989-01-01', NULL, '923310613', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'ACCOUNTING &FINANCE', '2013', 0, NULL, 'student', NULL, '2021-01-02 13:01:30', '2021-01-21 12:55:49', NULL, NULL, NULL, NULL, '213022', NULL),
(13, 'ALMAZ', 'EJARA', 'NEGASH', 2, NULL, '1986-01-01', NULL, '920057827', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'ACCOUNTING', '2007', 0, NULL, 'student', NULL, '2021-01-02 13:01:30', '2021-01-21 12:55:43', NULL, NULL, NULL, NULL, '213023', NULL),
(14, 'WONDIMAGEGNEHU', 'KENA', 'AYELE', 1, NULL, '1986-01-01', NULL, '932285020', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'ACCOUTING', '2018', 0, NULL, 'student', NULL, '2021-01-02 13:01:30', '2021-01-21 12:55:43', NULL, NULL, NULL, NULL, '213024', NULL),
(15, 'SULTAN', 'EBRAHIM', 'ABDO', 1, NULL, '1969-01-01', NULL, '930070875', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'ACCOUNTING', '2000', 0, NULL, 'student', NULL, '2021-01-02 13:01:30', '2021-01-21 12:55:43', NULL, NULL, NULL, NULL, '213025', NULL),
(16, 'BERHANU', 'ABDISA', 'KELBESA', 1, NULL, '1979-01-01', NULL, '937777588', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'ACCOUNTING&FINACE', '2009', 0, NULL, 'Only Applpicant', NULL, '2021-01-02 13:01:30', '2021-01-03 16:51:32', NULL, NULL, NULL, NULL, '213026', NULL),
(17, 'DEMOZE', 'TAYE', 'GEBRU', 1, NULL, '1979-01-01', NULL, '920063134', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'ACCOUNTING &FINANCE', '2014', 0, NULL, 'student', NULL, '2021-01-02 13:01:30', '2021-01-21 12:55:43', NULL, NULL, NULL, NULL, '213027', NULL),
(18, 'BIRUK', 'GETAHUN', 'DINBERU', 1, 24, '1989-01-01', 'ADAMA', '923824905', 27, 1, 4, 1, 2, NULL, NULL, NULL, 'ACCOUNTING &FINANCE', '2019', 0, NULL, 'student', NULL, '2021-01-02 13:01:30', '2021-07-10 13:27:30', NULL, NULL, NULL, NULL, '213028', NULL),
(19, 'DEREJE', 'DUGUMA', 'LEMMA', 1, 30, '1980-01-01', 'ADAMA', '0910050682', 71, 1, 4, 1, 2, NULL, NULL, NULL, 'ECONOMICS', '2011', 0, NULL, 'pending', NULL, '2021-01-02 13:01:30', '2021-11-08 07:54:57', NULL, NULL, NULL, NULL, '213029', NULL),
(20, 'SEIFU0', 'DEMISSE', 'WOLDETENSAY', 1, NULL, '1978-01-01', NULL, '922655928', 5, 1, 4, 1, 2, NULL, NULL, NULL, 'BUSINESS ADMINSTRATION', '2012', 2.02, NULL, 'student', NULL, '2021-01-02 13:01:30', '2021-01-21 12:55:43', NULL, NULL, NULL, NULL, '213030', NULL);

--
-- Triggers `applicants`
--
DELIMITER $$
CREATE TRIGGER `applicat_bck` BEFORE DELETE ON `applicants` FOR EACH ROW INSERT INTO `applicants_deleted`(`id`, `personal_name`, `father_name`, `grand_father_name`, `gender_id`, `age`, `birth_date`, `address`, `phone`, `curriculum_id`, `campus_id`, `batch_year_id`, `addmision_type_id`, `program_id`, `doc1`, `doc2`, `doc3`, `degree_feild`, `degree_exam_year`, `degree_cgpa`, `status`, `remark`, `created_at`, `updated_at`, `email`, `online_key`, `online_status`, `online_approved_by`, `temp`) VALUES (old.`id`, old.`personal_name`, old.`father_name`, old.`grand_father_name`, old.`gender_id`, old.`age`, old.`birth_date`, old.`address`, old.`phone`, old.`curriculum_id`, old.`campus_id`, old.`batch_year_id`, old.`addmision_type_id`, old.`program_id`, old.`doc1`, old.`doc2`, old.`doc3`, old.`degree_feild`, old.`degree_exam_year`, old.`degree_cgpa`, old.`status`, old.`remark`, old.`created_at`, old.`updated_at`, old.`email`, old.`online_key`, old.`online_status`, old.`online_approved_by`, old.`temp`)
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applicants`
--
ALTER TABLE `applicants`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applicants`
--
ALTER TABLE `applicants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21388;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
