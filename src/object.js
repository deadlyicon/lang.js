// This duck punches Object to that `new Object(object)` returns a new object that inherits from the given object
;(function(global) {

  function Object(){
    var new_object = this;
    if (typeof arguments[0] !== "undefined"){
      new_object = new (new Function(arguments[0]));
      Array.prototype.shift.apply(arguments);
      Object.extend.apply(new_object, arguments);
    }
    return new_object;
  }

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
