/**
 * JavaScript Singleton implementation
 */
var Singleton = (function () {

  // Singleton instance
  var _instance;

  function _create() {
    // private property
    var _bornTime = Date.now();

    // private method
    function _getBornTime() {
      return _bornTime;
    }

    return {
      // public property
      name: 'SuperSingleton',

      // public method
      getInfo: function() {
        console.log('I born ' + _getBornTime() + ' seconds ago');
      }
    };
  }

  return {
    getInstance: function () {
      if (!_instance) {
        _instance = _create();
      }

      return _instance;
    }
  }
})();
