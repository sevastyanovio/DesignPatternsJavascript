/**
 * JavaScript FactoryMethod implementation
 */
function FruitFactory () {
  this.create = function (type) {
    var fruit;

    switch (type) {
      case 'apple':
        fruit = new Apple();
        break;
      case 'banana':
        fruit = new Banana();
        break;
      case 'pineapple':
        fruit = new Pineapple();
        break;
      default:
        throw new Error(type + ' is not a valid fruit');
    }

    return fruit;
  }
}

var Apple = function () {
  this.type = 'Apple';
}

var Banana = function () {
  this.type = 'Banana';
}

var Pineapple = function () {
  this.type = 'Pineapple';
}
