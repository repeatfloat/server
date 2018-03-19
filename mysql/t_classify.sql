/*
Navicat MySQL Data Transfer

Source Server         : dis
Source Server Version : 50714
Source Host           : 127.0.0.1:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-03-13 23:43:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_classify
-- ----------------------------
DROP TABLE IF EXISTS `t_classify`;
CREATE TABLE `t_classify` (
  `cid` int(30) NOT NULL AUTO_INCREMENT,
  `cnames` varchar(255) CHARACTER SET utf8 NOT NULL,
  `cimg` varchar(255) NOT NULL,
  `cfrag` int(20) NOT NULL,
  PRIMARY KEY (`cid`),
  KEY `cfrag` (`cfrag`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_classify
-- ----------------------------
INSERT INTO `t_classify` VALUES ('1', '护肤方案', 'http://127.0.0.1:9000/images/classification-1.png', '1001');
INSERT INTO `t_classify` VALUES ('2', '护肤步骤', 'http://127.0.0.1:9000/images/classification-2.png', '1002');
INSERT INTO `t_classify` VALUES ('3', '明星系类', 'http://127.0.0.1:9000/images/starClass-1.png', '1003');
INSERT INTO `t_classify` VALUES ('4', '精油护肤', 'http://127.0.0.1:9000/images/starClass-5.png', '1004');
INSERT INTO `t_classify` VALUES ('5', '纯露单品', 'http://127.0.0.1:9000/images/starClass-10.png', '1005');
