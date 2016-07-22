# Ingress Redeem 

[中文](https://github.com/Huxpro/ingress-redeem/blob/master/README.zh.md)

This is a browser script (a.k.a javascript) snippet for **continuously passcode redeeming** in game ingress.

### How to use it

1. Open the Web version of ingress: https://www.ingress.com/intel 
2. Make sure you have already logged ing
- Open Chrome DevTool (RightClick then 'Inspect') - Console
- Copy code from `index.js` and paste into the console
- Press `Enter` to run 

### API 

```javascript
  /**
   * Start Redeem Loop
   * @param  {String} passcodes
   * @param  {Number} interval
   * @return
   */
  redeemLoop(passcodes, 5000);
```

Change passcodes to use your own (checkout source code for format),
or change interval to run it faster or slower. 

**WARNING:** Redeeming too fast will cause a system anti-robot strategy.
