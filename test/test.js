load('../lib/simple_test.js');
load('../src/object.js');
load('../src/function.js');
new SimpleTestSuite(function(test){
  
  // Object Tests
  test('Object.extend extends arg1 with properties of the following arguments', function(){
    var a = {a:'a'}, b = {b:'b'}, c = {c:'c'}, d = {d:'d'};
    Object.extend(a, b, c, d);
    return (a.a === 'a' && a.b === 'b' && a.c === 'c' && a.d === 'd');
  });
  
  test('Object.instanceof returns true if the arg1 inherits from arg2', function(){
    function Car(){};
    var my_car = new Car;
    return (
      Object.instanceOf(my_car, Car) === true &&
      Object.instanceOf(my_car, Car.prototype) === true
    );
  });
  
  test('new Object(object) returns an object inheriting from the given object ', function(){
    var parent = {parent:'parent'};
    var child = new Object(parent);
    return child.parent === 'parent';
  });
  
  test('new Object(object1, object2) extends new object with additional arguments', function(){
    return new Object({}, {foo:'bar'}).foo === 'bar';
  });
  

  
  // Function Tests
  test('new Function takes an options arguments as it\'s last arg and sets prototype to it', function(){
    var my_prototype = {hello:'rthere'};
    var my_func = new Function('  return this;', my_prototype);
    return (
      my_func.prototype === my_prototype &&
      my_func.prototype.constructor === my_func
    );
  });
  
  test('new Function(object) returns a returns an empty function with the given object as it\'s prototype', function(){
    return (new (new Function({your:'face'}))).your === 'face';
  });
  
  test('new Function(function(){}) returns the given function', function(){
    function foo(){}
    return new Function(foo) === foo;
  });
  
  for (var i=0; i < this.tests.length; i++) {
    pp(this.tests[i]);
  };
});



