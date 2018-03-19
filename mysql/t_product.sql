/*
Navicat MySQL Data Transfer

Source Server         : dis
Source Server Version : 50714
Source Host           : 127.0.0.1:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-03-18 23:39:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_product
-- ----------------------------
DROP TABLE IF EXISTS `t_product`;
CREATE TABLE `t_product` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `pname` varchar(30) CHARACTER SET utf8 NOT NULL,
  `price` int(10) NOT NULL,
  `oldprice` decimal(10,2) DEFAULT NULL,
  `pfrag` int(30) NOT NULL,
  `pcode` varchar(255) NOT NULL,
  `pcount` int(30) NOT NULL,
  `largelmg` varchar(255) NOT NULL,
  `smalllmg` varchar(255) NOT NULL,
  `text` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`pid`),
  KEY `pfrag` (`pfrag`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_product
-- ----------------------------
INSERT INTO `t_product` VALUES ('1', '普罗旺斯醒目薰衣草精油', '138', '0.00', '1004', 'QF00301', '50', 'http://127.0.0.1:9000/images/index-12.png', 'http://127.0.0.1:9000/images/index-12.png', '平衡舒缓  淡化痘印');
INSERT INTO `t_product` VALUES ('2', '保加利亚大马士革玫瑰精油', '298', '0.00', '1004', 'QF00302', '20', 'http://127.0.0.1:9000/images/index-13.png', 'http://127.0.0.1:9000/images/index-13.png', '弹润白皙  水润雪肌');
INSERT INTO `t_product` VALUES ('3', '汇美舍玫瑰水润纯露', '59', '0.00', '1004', 'QF00303', '100', 'http://127.0.0.1:9000/images/index-14.png', 'http://127.0.0.1:9000/images/index-14.png', '保湿滋润  提亮肤色');
INSERT INTO `t_product` VALUES ('4', '汇美舍玫瑰檀香丝柔润滑眼霜', '169', '0.00', '1004', 'QF00304', '10', 'http://127.0.0.1:9000/images/index-15.png', 'http://127.0.0.1:9000/images/index-15.png', '滋润眼周  减淡眼纹');
INSERT INTO `t_product` VALUES ('5', '0', '0', '0.00', '1004', 'QF00305', '0', 'http://127.0.0.1:9000/images/index-4.png', 'http://127.0.0.1:9000/images/index-4.png', '全部产品');
INSERT INTO `t_product` VALUES ('6', '0', '0', '0.00', '1004', 'QF00306', '0', 'http://127.0.0.1:9000/images/index-5.png', 'http://127.0.0.1:9000/images/index-5.png', '会员中心');
INSERT INTO `t_product` VALUES ('7', '0', '0', '0.00', '1004', 'QF00307', '0', 'http://127.0.0.1:9000/images/index-6.png', 'http://127.0.0.1:9000/images/index-6.png', '每日签到');
INSERT INTO `t_product` VALUES ('8', '0', '0', '0.00', '1004', 'QF00308', '0', 'http://127.0.0.1:9000/images/index-7.png', 'http://127.0.0.1:9000/images/index-7.png', '品牌故事');
INSERT INTO `t_product` VALUES ('9', '水润面膜3片+水润眼膜1盒', '199', '0.00', '1004', 'QF00309', '10', 'http://127.0.0.1:9000/images/index-8.png', 'http://127.0.0.1:9000/images/index-8.png', '菁华乳/17g+');
INSERT INTO `t_product` VALUES ('10', '保加利亚玫瑰体验礼盒', '298', '0.00', '1004', 'QF00310', '50', 'http://127.0.0.1:9000/images/index-9.png', 'http://127.0.0.1:9000/images/index-9.png', '0');
INSERT INTO `t_product` VALUES ('11', '玫瑰乳木果莹润沐浴露490g', '598', '0.00', '1004', 'QF00311', '60', 'http://127.0.0.1:9000/images/index-10.png', 'http://127.0.0.1:9000/images/index-10.png', '0');
INSERT INTO `t_product` VALUES ('12', '水润清颜面膜贴/10片', '69', '0.00', '1004', 'QF00312', '120', 'http://127.0.0.1:9000/images/index-11.png', 'http://127.0.0.1:9000/images/index-11.png', '花萃补水  温和滋润');
INSERT INTO `t_product` VALUES ('13', '玫瑰檀香丝柔润滑套装/3件', '325', '0.00', '1004', 'QF00313', '325', 'http://127.0.0.1:9000/images/index-16.png', 'http://127.0.0.1:9000/images/index-16.png', '弹润紧致  平滑淡纹');
INSERT INTO `t_product` VALUES ('14', '玫瑰水润护肤礼盒/3件', '159', '0.00', '1004', 'QF00314', '200', 'http://127.0.0.1:9000/images/index-16.png', 'http://127.0.0.1:9000/images/index-16.png', '深层补水  提亮肤色');
INSERT INTO `t_product` VALUES ('15', '0', '0', '0.00', '1004', 'QF00315', '0', '0', '0', '0');
INSERT INTO `t_product` VALUES ('16', '0', '0', '0.00', '1004', 'QF00316', '0', '0', '0', '0');
INSERT INTO `t_product` VALUES ('17', '0', '0', '0.00', '1004', 'QF00317', '0', '0', '0', '0');
INSERT INTO `t_product` VALUES ('18', '0', '0', '0.00', '1004', 'QF00318', '0', '0', '0', '0');
INSERT INTO `t_product` VALUES ('19', '0', '0', '0.00', '1004', 'QF00319', '0', '0', '0', '0');
INSERT INTO `t_product` VALUES ('20', '0', '0', '0.00', '1004', 'QF00320', '0', '0', '0', '0');
INSERT INTO `t_product` VALUES ('21', '0', '0', '0.00', '1004', 'QF00321', '0', '0', '0', '0');
