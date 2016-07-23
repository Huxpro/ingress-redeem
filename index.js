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
      setTimeout((function(){
        let _i = i
        return function(){
          var _p = passcodeList[_i].trim()
          redeemOnce(_p)
        }
      })(), interval * i)
    }

    console.log('continuously redeeming begin!')
  }

  window.redeemLoop = redeemLoop

  // Format: passcodes separate by \n, will be split to array later.
  var passcodes =
  `ezekiel3xh34ug4
  susanna3ku75cm9
  LVBOYNXAIE
  VI2JO15ND0
  vi9bb02fk7
  vi9rp62ex1
  inveniri2hc78yy4
  artifact4tt67xg9
  roland8cx62mk4
  evolution6xu68ru7
  timezero2kk78gx5
  hubert4su42qt2
  lightman8nd48zb2
  johnson3ba26qb2
  jackland8vf92qz5
  powercube3hu72ut7
  glyph7jb25yw3
  johnson3fx84aw9
  symbols4ye57bs7
  kureze3ft26jc6
  blue2xc26da2
  resonate6wb48ec4
  MINOTAUR8DM83GG5
  ezekiel7eu89au4
  ingress9tu32jk7
  ni7up28fu6
  drone5sg25ez6
  drone9rc88jy5
  message5ka73rp4
  80jdfitmar
  CASSANDRA2YU35CP6
  alignment3qh24up8`

  /**
   * Start Redeem Loop
   * @param  {String} passcodes
   * @param  {Number} interval
   * @return
   */
  redeemLoop(passcodes, 5000);
}())
