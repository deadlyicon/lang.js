Lang.js
============

Extends and duck punches native Objects extending their usefulness
without breaking any existing code

Examples
---------

Object
  new Object() still works exactly the same way it always has

    new Object
    //-> {}

  previously when passed an object to Object it just gave it right 
    
  additionally new Object(object) now returns a new object that extends from the given object

    var thing = {name: 'thing'};
    var thing2 = new Object(thing);

    thing === thing2;
    //-> false 

    thing2.name;
    //-> thing
  
    thing.name = 'thing 1';

    thing2.name;
    //-> thing 1
  
    thing.name = 'thing 2';
  
    thing2.name;
    //-> thing 2
  
    thing1.name;
    //-> thing 1
  
  new Object(object1, object2, object3) now takes multiple objects and extends the new object
  with the following arguments
  
    var b = {b:'b'}, c = {c:'c'}, d = {d:'d'};
    var a = Object.extend({a:'a'}, b, c, d);
    //-> {a:"a", b:"b", c:"c", d:"d"}