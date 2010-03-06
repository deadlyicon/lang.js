// This duck punches Object to that `new Object(object)` returns a new object that inherits from the given object
;(function(global) {

  function Object(){
    var object;
    if (arguments.length === 0){
      object = Object.$super.call(global);
    }else{
      object = Object.$super.call(global, arguments[0]);
      if (object.valueOf() === object){
        object = new (new Function(object));
        Array.prototype.shift.apply(arguments);
        Object.extend.apply(object, arguments);
      }
    }
    return object;
  }
  Object.$super = global.Object;

  for (var p in global.Object) Object[p] = global.Object[p];
  Object.prototype = global.Object.prototype;

  global.Object = Object;

})(this);

;(function() {

  // Object.extend(object1, object2, object3);
  // Object.extend.apply(object1, [object2, object3]);
  function extend(){
    var object = (this === Object || arguments[0] === Object) ?
      Array.prototype.shift.apply(arguments) : this;

    for (var i=0; i < arguments.length; i++)
      for (var p in arguments[i])
        if (object[p] !== arguments[i][p])
          object[p] = arguments[i][p];

    return object;
  }
  // Object.instanceOf(object, object)
  // Object.instanceOf(object, function)
  function instanceOf(child, parent){
    return child instanceof (new Function(parent));
  }

  extend(Object, {
    extend: extend,
    instanceOf: instanceOf
  });

})();
