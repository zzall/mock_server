const express = require('express');
const app = express();
const port = 3000; // 设置服务器监听端口

// 设置JSON响应类型
app.use(express.json());

// 假设的mock数据
const mockData = {
  taobaoZYJData: {
    taobaoid: '123456789',
    avatar: 'https://example.com/avatar.jpg',
    created: '2023-01-01',
    // ... 填充其他字段
    // 注意：你需要根据提供的Java类来填充所有字段的模拟数据
  },
  // 用户基本信息
  userInfo: {
    taobaoid: '1234567890', // 用户的淘宝ID
    avatar: 'https://example.com/avatar/taobao_user_avatar.jpg', // 用户头像的URL
    created: '2021-01-01', // 用户的注册日期
    registDay: '365', // 用户注册的天数
    sex: '男', // 用户的性别
    nameconform: '1', // 是否已实名认证（1表示已实名认证）
    proveNum: 0, // 证明次数（暂时无用）
    viplevel: '10', // 账号VIP等级（10表示超级会员）
    taoling: '5', // 用户的淘龄
    status: '正常', // 账号状态
    statusMsg: '暂无异常', // 正常/异常原因（暂时无用）
    pay_money: 10000, // 用户的支付金额
  },

  // 用户买家信息
  buyerInfo: {
    goodNum: '100', // 好评次数（买家好评数）
    buyerAvg: '2', // 周均购买次数
    buyerGoodNum: 80, // 买家好评数
    buyerCre: '三钻', // 买家信誉
    sellerCreLevel: '11', // 卖家信誉等级（对应蓝皇冠）
    sellerCredit: '蓝皇冠', // 卖家信誉
    receivedRate: '98%', // 好评率
  },

  // 卖家反馈信息
  sellerFeedback: {
    lastWeekShop: '1', // 上周店铺销售情况（可能表示销售次数或评分等，具体含义需根据业务逻辑确定）
    nearWeekShop: '1', // 近周店铺销售情况（同上）
  },

  // 打标信息
  taggingInfo: {
    type7: 0, // P图次数【该字段目前无效】
    type6: 5, // 淘客拍单次数【用了淘客链接来拍商家的单！】
    type5: 3, // 差评次数【接完了单给了商家差评进行要挟！】
    type4: 2, // 打假次数【用工商、发票、字体、商标、假货各种方式来坑商家钱了！】
    type3: 1, // 骗钱次数【用各种方式骗商家钱！】
    type2: 0, // 威胁次数【用各种方式威胁商家给钱！】
    type1: 1, // 跑路次数【拿到商家的返款，就恶意退款跑了！】
    downNum: 2, // 降权次数【被TB系统检测SD的旺旺号】
  },

  // 购买历史
  buyHistory: [
    {
      end_date: '2023-03-25', // 结束时间，格式为YYYY-MM-DD
      start_date: '2023-03-01', // 开始时间，格式为YYYY-MM-DD
      differ_xinyu: 100, // 收货量，表示在指定时间区间内收到的商品数量
      differ_day: '25', // 区间天数，表示开始时间和结束时间之间的天数差，这里假设为字符串类型，仅包含天数数字
    },
    {
      end_date: '2023-04-10',
      start_date: '2023-04-01',
      differ_xinyu: 120,
      differ_day: '10',
    },
    {
      end_date: '2023-05-15',
      start_date: '2023-05-01',
      differ_xinyu: 80,
      differ_day: '15',
    },
    {
      end_date: '2023-06-20',
      start_date: '2023-06-01',
      differ_xinyu: 150,
      differ_day: '20',
    },
  ],
};

// GET请求处理函数
function handleGet(mockType) {
  return mockType ? mockData[mockType] : mockData.taobaoZYJData;
}

// POST请求处理函数
function handlePost(reqBody) {
  // 这里可以处理POST请求体，但在这个例子中我们直接返回mock数据
  return mockType ? mockData[mockType] : mockData.taobaoZYJData;
}
// GET请求路由
app.get('/getUserInfo', (req, res) => {
  const data = mockData.userInfo;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(data);
});

// GET请求路由
app.get('/getBuyerInfo', (req, res) => {
  const data = mockData.buyerInfo;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(data);
});

app.get('/getSellerFeedback', (req, res) => {
  const data = mockData.sellerFeedback;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(data);
});

app.get('/getTaggingInfo', (req, res) => {
  const data = mockData.taggingInfo;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(data);
});

app.get('/getBuyHistory', (req, res) => {
  const data = mockData.buyHistory;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(data);
});
// POST请求路由
app.post('/getTaobaoZYJData', (req, res) => {
  const data = handlePost(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(data);
});

// 启动服务器
app.listen(port, () => {
  console.log(`Mock server listening on port ${port}`);
});
