/*
Navicat MySQL Data Transfer

Source Server         : dis
Source Server Version : 50714
Source Host           : 127.0.0.1:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-03-18 23:39:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `loginStatus` int(255) NOT NULL DEFAULT '0',
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `pwd` varchar(32) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `oldpwd` varchar(32) DEFAULT NULL,
  `registerTime` datetime NOT NULL,
  `agreement` varchar(255) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `nickname` varchar(100) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `identity` varchar(18) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', '1', '96e79218965eb72c92a549dd5a330112', '15876441382', null, '2018-01-22 10:43:43', '100', null, null, null, null);
INSERT INTO `t_user` VALUES ('0', '2', '858915f1d2d425959fd4da867ba6b599', '15215151515', null, '2018-02-24 09:46:00', '100', null, null, null, null);
INSERT INTO `t_user` VALUES ('0', '3', '96e79218965eb72c92a549dd5a330112', '15016919764', null, '2018-02-24 09:47:38', '100', null, null, null, null);
INSERT INTO `t_user` VALUES ('0', '4', '9fb521e7c15ff7b63094e84019ad5a16', '15115151515', null, '2018-02-24 09:48:54', '100', null, null, null, null);
INSERT INTO `t_user` VALUES ('0', '5', '1a100d2c0dab19c4430e7d73762b3423', '15876441383', null, '2018-03-14 22:55:31', '100', null, null, null, null);
INSERT INTO `t_user` VALUES ('0', '6', '96e79218965eb72c92a549dd5a330112', '15876441381', null, '2018-03-14 22:57:11', '100', null, null, null, null);
INSERT INTO `t_user` VALUES ('0', '7', '3170e79cb2cdc6f699f0b2bdacbdd174', '15876441384', null, '2018-03-14 22:58:54', '100', null, null, null, null);
