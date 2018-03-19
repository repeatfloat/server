/*
Navicat MySQL Data Transfer

Source Server         : dis
Source Server Version : 50714
Source Host           : 127.0.0.1:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-03-18 23:39:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_shoppings
-- ----------------------------
DROP TABLE IF EXISTS `t_shoppings`;
CREATE TABLE `t_shoppings` (
  `did` int(11) NOT NULL AUTO_INCREMENT,
  `sname` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(50,2) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `addres` varchar(255) CHARACTER SET utf8 NOT NULL,
  `sales` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `farg` varchar(255) NOT NULL,
  `numprice` decimal(50,0) NOT NULL,
  PRIMARY KEY (`did`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_shoppings
-- ----------------------------
INSERT INTO `t_shoppings` VALUES ('6', '保加利亚玫瑰体验礼盒', '298.00', 'http://127.0.0.1:9000/images/index-9.png', '深圳', '2154', 'QF00310', '1005', '0');
INSERT INTO `t_shoppings` VALUES ('14', '汇美舍保加利亚大马士革玫瑰精油5ML单方', '498.00', 'http://127.0.0.1:9000/images/shoppingCart-9.png', '上海', '51156', 'QF00318', '1005', '0');
