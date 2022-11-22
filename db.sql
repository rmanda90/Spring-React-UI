CREATE SCHEMA `schooldb` ;

DROP TABLE IF EXISTS `studentid_sequence`;
DROP TABLE IF EXISTS `student`;

CREATE TABLE `studentid_sequence` (
  `next_val` bigint DEFAULT NULL
);

INSERT INTO schooldb.studentid_sequence (next_val) VALUES (0);

CREATE TABLE `student` (
  `student_id` bigint NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `first_name` varchar(35) DEFAULT NULL,
  `last_name` varchar(35) DEFAULT NULL,
  PRIMARY KEY (`student_id`),
  UNIQUE KEY `emailid_unique` (`email_id`)
);