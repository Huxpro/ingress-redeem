# Ingress Redeem 

This is a browser script (a.k.a javascript) snippet for **continuously passcode redeeming** in game ingress.

### How to use it

1. Open the Web version of ingress: https://www.ingress.com/intel 
2. Make sure you have already logged in
- Open Chrome DevTool - Console
- Copy code from `index.js` and paste into the console
- Press `Enter` to run 

### API 

```javascript
  /**
   * Start Redeem Loop
   * @param  {array}  passcodes
   * @param  {number} interval
   * @return
   */
  redeemLoop(passcodes, 5000);
```

Change passcodes to use your own, or change interval to run it faster or slower. 

**WARNING:** Redeeming too fast will cause a system anti-robot strategy.