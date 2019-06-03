-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema traveldb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `traveldb` ;

-- -----------------------------------------------------
-- Schema traveldb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `traveldb` DEFAULT CHARACTER SET utf8 ;
USE `traveldb` ;

-- -----------------------------------------------------
-- Table `country`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `country` ;

CREATE TABLE IF NOT EXISTS `country` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `date_visited` DATE NULL,
  `notes` TEXT NULL,
  `visited` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS traveler@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'traveler'@'localhost' IDENTIFIED BY 'travel';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'traveler'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `country`
-- -----------------------------------------------------
START TRANSACTION;
USE `traveldb`;
INSERT INTO `country` (`id`, `name`, `date_visited`, `notes`, `visited`) VALUES (1, 'England', '2015-02-01', 'I visited England for the first time while on deployment in 2015', true);
INSERT INTO `country` (`id`, `name`, `date_visited`, `notes`, `visited`) VALUES (2, 'Thailand', '2015-09-01', 'First destination for solo trip', true);
INSERT INTO `country` (`id`, `name`, `date_visited`, `notes`, `visited`) VALUES (3, 'Vietnam', '2015-11-01', 'Traveled Vietnam for a month with a group of friends', true);
INSERT INTO `country` (`id`, `name`, `date_visited`, `notes`, `visited`) VALUES (4, 'Australia', '2015-12-05', 'Moved to Australia on a WHV, stayed for seven months', true);
INSERT INTO `country` (`id`, `name`, `date_visited`, `notes`, `visited`) VALUES (5, 'France', '2016-08-15', 'Went to school in France for a year', true);
INSERT INTO `country` (`id`, `name`, `date_visited`, `notes`, `visited`) VALUES (6, 'Holland', '2016-12-22', 'Spent Christmas in Amsterdam', true);
INSERT INTO `country` (`id`, `name`, `date_visited`, `notes`, `visited`) VALUES (7, 'Germany', '2016-12-27', 'Spent New Years in Berlin', true);
INSERT INTO `country` (`id`, `name`, `date_visited`, `notes`, `visited`) VALUES (8, 'Egypt', NULL, 'Would like to visit the Pyramids', false);
INSERT INTO `country` (`id`, `name`, `date_visited`, `notes`, `visited`) VALUES (9, 'Peru', NULL, 'Would like to vist Machu Pichu', false);

COMMIT;

