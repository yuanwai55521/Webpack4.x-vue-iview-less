const fs = require('fs');
const _ = require('lodash');
const path = require('path');

module.exports = _.assign(
  {
    CROSS: true, //是否跨域 如果为false则忽略PORT和HOST
    PORT: 8080, //接口端口
    HOST: JSON.stringify('localhost'),
    ROOT: JSON.stringify(''),
    DEVPORT: 3000 //前端开发端口
  },
  fs.existsSync(path.join(__dirname, '../config.local.js')) && require('../config.local')
);
