var registerSystem = require('../core/system').registerSystem;

module.exports.System = registerSystem('hand-controls', {
  init: function () {
    var self = this;
    this.controllers = [];
    if (!navigator.getVRDisplays) { return; }
    navigator.getVRDisplays().then(function (displays) {
      if (displays.length > 0) {
        self.vrDisplay = displays[0];
      }
    });
  },

  tick: function () {
    var gamepads = navigator.getGamepads();
    var gamepad;
    var controllers = this.controllers = [];
    var i;
    for (i = 0; i < gamepads.length; ++i) {
      gamepad = gamepads[i];
      if (gamepad && gamepad.pose) {
        controllers.push(gamepad);
      }
    }
  }
});
