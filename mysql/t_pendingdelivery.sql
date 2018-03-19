/*
Navicat MySQL Data Transfer

Source Server         : dis
Source Server Version : 50714
Source Host           : 127.0.0.1:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-03-18 23:38:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_pendingdelivery
-- ----------------------------
DROP TABLE IF EXISTS `t_pendingdelivery`;
CREATE TABLE `t_pendingdelivery` (
  `did` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(50,2) NOT NULL,
  `addres` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `numprice` decimal(50,0) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `sales` varchar(50) DEFAULT NULL,
  `code` varchar(50) DEFAULT NULL,
  `farg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`did`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_pendingdelivery
-- ----------------------------
INSERT INTO `t_pendingdelivery` VALUES ('5', '水润面膜3片+水润眼膜1盒', '199.00', '深圳', '2', 'http://127.0.0.1:9000/images/index-8.png', '5135', 'QF00309', '1005');
INSERT INTO `t_pendingdelivery` VALUES ('7', '玫瑰乳木果莹润沐浴露490g', '598.00', '深圳', '1', 'http://127.0.0.1:9000/images/index-10.png', '5168', 'QF00311', '1005');
INSERT INTO `t_pendingdelivery` VALUES ('1', '普罗旺斯醒目薰衣草精油', '138.00', '东莞', '0', 'http://127.0.0.1:9000/images/index-12.png', '2250', 'QF00301', '1005');
INSERT INTO `t_pendingdelivery` VALUES ('8', '水润清颜面膜贴/10片', '69.00', '深圳', '2', 'http://127.0.0.1:9000/images/index-11.png', '14515', 'QF00312', '1005');
