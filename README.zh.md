# Ingress Redeem 

这是一个浏览器脚本（JavaScript 脚本），用于 Ingress 兑换码的自动兑换。

### 如何使用

1. 打开 Ingress 网页版: https://www.ingress.com/intel 
2. 确保你已经登陆
- 打开 Chrome 的开发者工具 （右键 - 审查元素），选择 Console
- 把 `index.js` 中的代码复制到 Console 中
- 按回车键运行

### API （如果你是程序员）

```javascript
  /**
   * Start Redeem Loop
   * @param  {String} passcodes
   * @param  {Number} interval
   * @return
   */
  redeemLoop(passcodes, 5000);
```

你可以在调用前修改源码：
比如把 passcodes 修改成自己的，格式参见源码；
或者改变间隔的长短

**警告:** 兑换间隔太短会触发 Ingress 的反机器人策略！
