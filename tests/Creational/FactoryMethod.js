define([
  'intern!tdd',
  'intern/chai!assert',
  'Creational/FactoryMethod/FactoryMethod'
], function (tdd, assert) {
  with (tdd) {
    suite('FactoryMethod', function () {
      test('Test creation', function () {
        var fruitFactory = new FruitFactory();

        var factoryApple = fruitFactory.create('apple');
        var realApple = new Apple();

        assert.equal(factoryApple.type, realApple.type);
      });

      test('Test unknown type', function () {
        var fruitFactory = new FruitFactory();

        try {
          fruitFactory.create('tomato');
        } catch (e) {
          assert.equal(e.message, 'tomato is not a valid fruit');
        }
      });
    });
  }
});
