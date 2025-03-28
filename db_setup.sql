
-- SQL Script to create the registrations table
-- Database name: u499616432_awc
-- Username: u499616432_awc
-- Password: Apostolicwc@2025

-- Create the registrations table
CREATE TABLE IF NOT EXISTS `registrations` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(10) NOT NULL,
  `first_name` VARCHAR(50) NOT NULL,
  `middle_name` VARCHAR(50),
  `last_name` VARCHAR(50) NOT NULL,
  `gender` VARCHAR(8) NOT NULL,
  `age_group` VARCHAR(10) NOT NULL,
  `marital_status` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone_number` VARCHAR(20) NOT NULL,
  `address` TEXT NOT NULL,
  `born_again` VARCHAR(10) NOT NULL,
  `church_name` VARCHAR(100) NOT NULL,
  `is_minister` VARCHAR(5) NOT NULL,
  `denomination_name` VARCHAR(100),
  `is_pioneer` VARCHAR(5) NOT NULL,
  `ministry_name` VARCHAR(100),
  `church_role` VARCHAR(100) NOT NULL,
  `registration_date` DATETIME NOT NULL,
  UNIQUE KEY `email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
