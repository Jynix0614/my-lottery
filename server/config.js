/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 2,
    text: "特等奖",
    title: "神秘大礼",
    img: "../img/prizes/secrit.jpg"
  },
  {
    type: 2,
    count: 5,
    text: "一等奖",
    title: "MacBook Pro",
    img: "../img/prizes/mbp16.jpg"
  },
  {
    type: 3,
    count: 6,
    text: "二等奖",
    title: "iphone 14 pro max",
    img: "../img/prizes/iphone14promax.jpg"
  },
  {
    type: 4,
    count: 7,
    text: "三等奖",
    title: "大疆无人机",
    img: "../img/prizes/spark.jpg"
  },
  {
    type: 5,
    count: 8,
    text: "四等奖",
    title: "Ninteodo Switch",
    img: "../img/prizes/switch.jpg"
  },
  {
    type: 6,
    count: 9,
    text: "五等奖",
    title: "漫步者蓝牙耳机",
    img: "../img/prizes/edifer.png"
  },
  {
    type: 7,
    count: 20,
    text: "六等奖",
    title: "华为手环",
    img: "../img/prizes/handring.png"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 2, 5, 6, 7, 8, 9, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "水浒传";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
