/*
Navicat MySQL Data Transfer

Source Server         : dismsql
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-22 10:51:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_banner
-- ----------------------------
DROP TABLE IF EXISTS `t_banner`;
CREATE TABLE `t_banner` (
  `bid` int(255) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL,
  `linkurl` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `frag` int(50) NOT NULL,
  PRIMARY KEY (`bid`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_banner
-- ----------------------------
INSERT INTO `t_banner` VALUES ('1', 'http://127.0.0.1:9000/images/index-1.jpg', '0', 'banner1', '100');
INSERT INTO `t_banner` VALUES ('2', 'http://127.0.0.1:9000/images/index-2.jpg', '0', 'banner2', '100');
INSERT INTO `t_banner` VALUES ('3', 'http://127.0.0.1:9000/images/index-3.jpg', '0', 'banner3', '100');
