function SuperClass(name) {
  this.name = name
}

function SubClass(name, age) {
  SuperClass.call(this, name)
  this.age = age
  return false
}

function Temp() {}

Temp.prototype = SuperClass.prototype;

SubClass.prototype = new Temp();
SubClass.prototype.constructor = SubClass;

const instance = new SubClass('YufJ', 27)

console.log(instance.__proto__);
console.log(instance);

function new2(fn, ...args) {
  const obj = {};
  const data = fn.call(obj, ...args);
  obj.__proto__.constructor = fn;
  if(typeof data === 'object' && Object.prototype.toString.call(data) === '[object Object]') {
    return data;
  }
  return obj
}

const a = new2(SubClass, 'xhq', 26)

console.log('a', a);