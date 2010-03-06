/** Function
  *
  * Duck punches Function so it supports the following usage
  *
  *    new Function('arg1', 'arg2', value, prototype);
  *    new Function(function(){ ... }, prototype);
  */
;(function(global) {
  
  function Function(){
    var prototype;

    if (typeof arguments[arguments.length - 1] === 'object'){
      prototype = arguments[arguments.length - 1];
      Array.prototype.pop.apply(arguments);
    }
    var func = (typeof arguments[0] === 'function') ? 
      arguments[0] : Function.$super.apply(this, arguments);

    if (prototype){
      func.prototype = prototype;
      func.prototype.constructor = func;
    }
    return func;
  }
  Function.$super = global.Function;
  
  
  for (var p in global.Function) Function[p] = global.Function[p];
  Function.prototype = global.Function.prototype;
  
  global.Function = Function;

  
})(this);


