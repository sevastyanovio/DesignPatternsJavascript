define([
  'intern!object',
  'intern/chai!assert',
  'Creational/Singleton/Singleton'
], function (registerSuite, assert, Singleton) {
  registerSuite({
    name: 'Singleton',
    'getInstance': function () {
      var firstSuperSingleton = Singleton.getInstance();
      var secondDuperSingleton = Singleton.getInstance();

      assert.equal(firstSuperSingleton, secondDuperSingleton,
        'firstSuperSingleton must be equal secondDuperSingleton');
    },

    'getInfo': function () {
      var firstSuperSingleton = Singleton.getInstance();
      var secondDuperSingleton = Singleton.getInstance();

      assert.equal(firstSuperSingleton.getInfo(), secondDuperSingleton.getInfo(),
        'Object information firstSuperSingleton must be equal secondDuperSingleton');
    }
  });
});