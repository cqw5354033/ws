/*
Navicat MySQL Data Transfer

Source Server         : qiang
Source Server Version : 50536
Source Host           : localhost:3306
Source Database       : land

Target Server Type    : MYSQL
Target Server Version : 50536
File Encoding         : 65001

Date: 2017-07-21 09:04:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for l_news
-- ----------------------------
DROP TABLE IF EXISTS `l_news`;
CREATE TABLE `l_news` (
  `n_id` int(11) NOT NULL AUTO_INCREMENT,
  `n_title` varchar(255) NOT NULL,
  `n_content` varchar(5000) DEFAULT NULL,
  `n_label` varchar(255) DEFAULT NULL,
  `n_describe` varchar(500) DEFAULT NULL,
  `n_create_time` datetime DEFAULT NULL,
  `c_id` int(11) DEFAULT NULL,
  `u_id_insert` varchar(255) DEFAULT NULL,
  `u_id_update` varchar(255) DEFAULT NULL,
  `n_delect` int(2) DEFAULT NULL,
  `n_keyword` varchar(255) DEFAULT NULL,
  `n_picture` varchar(255) DEFAULT NULL,
  `n_open` int(11) DEFAULT NULL,
  PRIMARY KEY (`n_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COMMENT='t_card_news';

-- ----------------------------
-- Records of l_news
-- ----------------------------
INSERT INTO `l_news` VALUES ('26', '新闻8', '<p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p><p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p><p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p>', '', '', '2017-07-20 16:05:02', '3', 'admin', 'admin', '0', '', '9da23eec-1073-43b9-8511-91e0316ab466.jpg', '0');
INSERT INTO `l_news` VALUES ('27', '新闻5', '<p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p>', '', '', '2017-07-20 16:04:00', '3', 'admin', 'admin', '0', '', 'b3315482-1e3b-45bd-b80d-835cfe4e7825.jpg', '0');
INSERT INTO `l_news` VALUES ('28', '新闻3', '<p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p><p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p><p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p><p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p>', '', '', '2017-07-20 16:03:38', '3', 'admin', 'admin', '0', '', 'e25a27a5-9db1-4519-ac10-dcf4c5c19bdd.jpg', '0');
INSERT INTO `l_news` VALUES ('29', '新闻2', '<p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p>', '', '', '2017-07-20 16:03:14', '3', 'admin', 'admin', '0', '', 'dd4e051c-d50a-4931-987f-33ab9cdaa659.jpg', '0');
INSERT INTO `l_news` VALUES ('30', '新闻7', '<p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p>', '', '', '2017-07-20 16:04:40', '3', 'admin', 'admin', '0', '', 'ac07cd41-560a-4efe-9aec-e0413d82b2ea.jpg', '0');
INSERT INTO `l_news` VALUES ('31', '新闻6', '<p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p><p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p><p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p><p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p>', '12345', '1234', '2017-07-20 16:04:23', '3', 'admin', 'admin', '0', '123', 'a6794959-5711-424b-8ca9-a78fb730cb58.jpg', '0');
INSERT INTO `l_news` VALUES ('32', '新闻1', '<p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p><p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p><p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p>', '', '', '2017-07-20 16:02:42', '3', 'admin', 'admin', '0', '', '443becea-a913-4bc8-b3f6-b77e026781b3.jpg', '0');

-- ----------------------------
-- Table structure for l_news_column
-- ----------------------------
DROP TABLE IF EXISTS `l_news_column`;
CREATE TABLE `l_news_column` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_name` varchar(255) DEFAULT NULL,
  `c_nicename` varchar(255) DEFAULT NULL,
  `c_keyword` varchar(255) DEFAULT NULL,
  `c_descripion` varchar(255) DEFAULT NULL,
  `c_delect` int(11) DEFAULT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of l_news_column
-- ----------------------------
INSERT INTO `l_news_column` VALUES ('3', '投资新闻', '投资', '投资', '投资新闻', '0');

-- ----------------------------
-- Table structure for l_user
-- ----------------------------
DROP TABLE IF EXISTS `l_user`;
CREATE TABLE `l_user` (
  `u_id` varchar(255) NOT NULL,
  `u_name` varchar(255) DEFAULT NULL,
  `u_password` varchar(255) DEFAULT NULL,
  `u_phone` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of l_user
-- ----------------------------
INSERT INTO `l_user` VALUES ('admin', 'admin', '123', '123456789');
INSERT INTO `l_user` VALUES ('admin1', 'admin1', '123', '231854564');

-- ----------------------------
-- Table structure for l_user_log
-- ----------------------------
DROP TABLE IF EXISTS `l_user_log`;
CREATE TABLE `l_user_log` (
  `l_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` varchar(255) DEFAULT NULL,
  `l_time` datetime DEFAULT NULL,
  `l_ip` varchar(255) DEFAULT NULL,
  `l_delect` int(11) DEFAULT NULL,
  PRIMARY KEY (`l_id`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of l_user_log
-- ----------------------------
INSERT INTO `l_user_log` VALUES ('76', 'admin', '2017-07-18 20:52:23', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('77', 'admin', '2017-07-18 20:55:43', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('78', 'admin', '2017-07-18 21:04:26', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('79', 'admin', '2017-07-19 16:31:34', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('80', 'admin', '2017-07-20 08:10:17', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('81', 'admin', '2017-07-20 08:14:19', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('82', 'admin', '2017-07-20 08:22:45', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('83', 'admin', '2017-07-20 08:52:49', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('84', 'admin', '2017-07-20 08:58:31', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('85', 'admin', '2017-07-20 09:05:30', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('86', 'admin', '2017-07-20 09:11:25', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('87', 'admin', '2017-07-20 09:30:30', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('88', 'admin', '2017-07-20 10:03:45', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('89', 'admin', '2017-07-20 10:12:44', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('90', 'admin', '2017-07-20 10:31:05', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('91', 'admin', '2017-07-20 10:32:44', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('92', 'admin', '2017-07-20 10:33:45', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('93', 'admin', '2017-07-20 10:38:03', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('94', 'admin', '2017-07-20 10:48:00', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('95', 'admin', '2017-07-20 10:53:49', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('96', 'admin', '2017-07-20 10:58:10', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('97', 'admin', '2017-07-20 11:11:07', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('98', 'admin', '2017-07-20 11:22:07', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('99', 'admin', '2017-07-20 14:12:28', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('100', 'admin', '2017-07-20 14:19:45', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('101', 'admin', '2017-07-20 14:43:42', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('102', 'admin', '2017-07-20 14:48:00', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('103', 'admin', '2017-07-20 14:56:56', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('104', 'admin', '2017-07-20 15:16:35', '127.0.0.1', '0');
INSERT INTO `l_user_log` VALUES ('105', 'admin', '2017-07-20 16:01:46', '127.0.0.1', '0');
