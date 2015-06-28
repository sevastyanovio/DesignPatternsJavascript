define([
  'intern!tdd',
  'intern/chai!assert',
  'Creational/Singleton/Singleton'
], function (tdd, assert) {
  with (tdd) {
    suite('Singleton', function () {
      test('getInstance', function () {
        var firstSuperSingleton = Singleton.getInstance();
        var secondDuperSingleton = Singleton.getInstance();

        assert.equal(firstSuperSingleton, secondDuperSingleton,
          'firstSuperSingleton must be equal secondDuperSingleton');
      });

      test('getInfo', function () {
        var firstSuperSingleton = Singleton.getInstance();
        var secondDuperSingleton = Singleton.getInstance();

        assert.equal(firstSuperSingleton.getInfo(), secondDuperSingleton.getInfo(),
          'Object information firstSuperSingleton must be equal secondDuperSingleton');
      });
    });
  }
});
