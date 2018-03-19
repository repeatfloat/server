/*
Navicat MySQL Data Transfer

Source Server         : dis
Source Server Version : 50714
Source Host           : 127.0.0.1:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-03-18 23:39:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_settlement
-- ----------------------------
DROP TABLE IF EXISTS `t_settlement`;
CREATE TABLE `t_settlement` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(50,2) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `sales` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `addres` varchar(255) CHARACTER SET utf8 NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `farg` varchar(50) DEFAULT NULL,
  `numprice` decimal(50,0) NOT NULL,
  `check` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_settlement
-- ----------------------------
