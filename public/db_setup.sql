
-- SQL Script to create the registrations table
-- Database name: awc
-- Username: awc
-- Password: Apostolicwc@2025

-- Create the registrations table
CREATE TABLE IF NOT EXISTS `registrations` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(10) NOT NULL,
  `first_name` VARCHAR(50) NOT NULL,
  `middle_name` VARCHAR(50),
  `last_name` VARCHAR(50) NOT NULL,
  `gender` ENUM('male', 'female') NOT NULL,
  `age_group` VARCHAR(10) NOT NULL,
  `marital_status` ENUM('single', 'engaged', 'married', 'divorced', 'widowed') NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone_number` VARCHAR(20) NOT NULL,
  `address` TEXT NOT NULL,
  `born_again` ENUM('Yes', 'No', 'Not sure') NOT NULL,
  `church_name` VARCHAR(100) NOT NULL,
  `is_minister` ENUM('Yes', 'No') NOT NULL,
  `denomination_name` VARCHAR(100),
  `is_pioneer` ENUM('Yes', 'No') NOT NULL,
  `ministry_name` VARCHAR(100),
  `church_role` VARCHAR(50) NOT NULL,
  `registration_date` DATETIME NOT NULL,
  UNIQUE KEY `email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
