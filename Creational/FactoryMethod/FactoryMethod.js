/**
 * JavaScript FactoryMethod implementation
 */
function FruitFactory () {
  this.create = function (type) {
    var fruitClass = type.charAt(0).toUpperCase() + type.slice(1);

    return eval("new " + fruitClass + "()");
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