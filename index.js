(function(){

  var $passcode = document.getElementById('passcode');
  var $submit = document.getElementById('submit');

  function redeemOnce(passcode){
    $passcode.value = passcode;
    $submit.click()
    console.log('redeeming ' + passcode);
  }

  function redeemLoop(passcodes, interval){
    passcodeList = passcodes.split('\n');
    console.log(passcodeList);

    for (var i = 0; i < passcodeList.length; i++) {
      setTimeout(
        (function(){
          let _i = i
          return function(){
            var _p = passcodeList[_i].trim()
            redeemOnce(_p)
          }
        })(), 
        interval * i 
      )
    }

    console.log('continuously redeeming begin!')
  }

  window.redeemLoop = redeemLoop

  // Format: passcodes separate by \n, will be split to array later.
  var passcodes =
  `zkm55ysix876kv
tyv77ysix934dv
eys33ysix728xb
jpq87ysix939fh
wjv55ysix898ad
ucc68ysix289uu
mkb69ysix998kp
fac73ysix327wc
oev38ysix837ze
ryj39ysix288se
mkb69ysix998kp
YBP27JAMA673WW
PZZ64JAMA626PC
GOX64JAMA258SD
SRQ86JAMA572MU
AWZ22JAMA799WN
ROA67JAMA978QJ
TTK22JAMA777FD
CPP35JAMA422AA`

  /**
   * Start Redeem Loop
   * @param  {String} passcodes
   * @param  {Number} interval
   * @return
   */
  redeemLoop(passcodes, 10000);
}())
