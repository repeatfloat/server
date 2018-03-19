/*
Navicat MySQL Data Transfer

Source Server         : dis
Source Server Version : 50714
Source Host           : 127.0.0.1:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-03-18 23:39:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_shoppingcart
-- ----------------------------
DROP TABLE IF EXISTS `t_shoppingcart`;
CREATE TABLE `t_shoppingcart` (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `sname` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(20,2) NOT NULL,
  `oldprice` decimal(20,2) NOT NULL,
  `imgsurl` varchar(255) NOT NULL,
  `slace` varchar(255) CHARACTER SET utf8 NOT NULL,
  `pfag` varchar(50) NOT NULL,
  `span` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `span2` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `check` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `footertext` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `datas` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `numprice` decimal(50,0) NOT NULL,
  PRIMARY KEY (`rid`),
  KEY `pid` (`pid`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_shoppingcart
-- ----------------------------
INSERT INTO `t_shoppingcart` VALUES ('1', '1', '汇美舍（PrettyValley）普罗旺斯真实薰衣草精油/10ml 单方精油 	精油护肤', '138.00', '158.00', 'http://127.0.0.1:9000/images/shoppingCart-1.png', '0', '1001', '运费', '￥8', 'false', '999人付款', '17', '0');
INSERT INTO `t_shoppingcart` VALUES ('2', '2', '汇美舍普罗旺斯薰衣草护肤礼盒套装补水舒缓肌肤', '169.00', '198.00', 'http://127.0.0.1:9000/images/shoppingCart-2.png', '0', '1001', '运费', '￥8', 'false', '666人付款', '18', '0');
INSERT INTO `t_shoppingcart` VALUES ('3', '3', '汇美舍单方精油普罗旺斯真实薰衣草精油10ml 舒缓修护淡化痘印', '294.00', '298.00', 'http://127.0.0.1:9000/images/shoppingCart-3.png', '0', '1001', '运费', '包邮', 'false', '888人付款', '19', '0');
INSERT INTO `t_shoppingcart` VALUES ('4', '4', '汇美舍普罗旺斯薰衣草菁华凝露90g 清爽补水保湿细致毛孔精华露', '158.00', '188.00', 'http://127.0.0.1:9000/images/shoppingCart-4.png', '0', '1001', '运费', '包邮', 'false', '555人付款', '20', '0');
INSERT INTO `t_shoppingcart` VALUES ('5', '5', '汇美舍面霜普罗旺斯薰衣草菁华面霜50g 滋润保湿淡化细纹细致毛孔', '198.00', '218.00', 'http://127.0.0.1:9000/images/shoppingCart-5.png', '0', '1001', '运费', '包邮', 'false', '333人付款', '21', '0');
INSERT INTO `t_shoppingcart` VALUES ('6', '6', '汇美舍保加利亚玫瑰补水套装补水护肤品套装', '915.00', '998.00', 'http://127.0.0.1:9000/images/shoppingCart-6.png', '0', '1002', '', null, null, null, '11', '0');
INSERT INTO `t_shoppingcart` VALUES ('7', '7', '汇美舍玫瑰檀香丝柔润滑套装保湿补水平滑提亮套装', '434.00', '488.00', 'http://127.0.0.1:9000/images/shoppingCart-7.png', '0', '1002', '', null, null, null, '12', '0');
INSERT INTO `t_shoppingcart` VALUES ('8', '8', '汇美舍精油玫瑰丰润提升精油50ml紧致提升弹性弹润胸部', '390.00', '398.00', 'http://127.0.0.1:9000/images/shoppingCart-8.png', '0', '1002', '', null, null, null, '13', '0');
INSERT INTO `t_shoppingcart` VALUES ('9', '9', '汇美舍保加利亚大马士革玫瑰精油5ML单方精油香薰滋养', '498.00', '508.00', 'http://127.0.0.1:9000/images/shoppingCart-9.png', '0', '1002', '', null, null, null, '14', '0');
INSERT INTO `t_shoppingcart` VALUES ('10', '10', '汇美舍茉莉玫瑰籽水漾舒缓爽肤液150ml爽肤水舒缓', '102.00', '188.00', 'http://127.0.0.1:9000/images/shoppingCart-10.png', '0', '1002', '', null, null, null, '15', '0');
INSERT INTO `t_shoppingcart` VALUES ('11', '11', '汇美舍普罗旺斯薰衣草菁华液160ml 补水保湿滋润控油爽', '110.00', '188.00', 'http://127.0.0.1:9000/images/shoppingCart-11.png', '0', '1002', '', null, null, null, '16', '0');
