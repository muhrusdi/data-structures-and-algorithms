// Stack adalah struktur data yang bersifat LIFO (first in first out)

function Stack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
}

Stack.prototype.push = function(value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
  return "Max capacity already."
}

Stack.prototype.count = function() {
  return this._count;
}

Stack.prototype.isEmpty = function() {
  return this._count === 0;
}

Stack.prototype.pop = function() {
  const value = this._storage[--this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
  return value;
}

Stack.prototype.peek = function() {
  return this._storage[this._count-1];
}

const stack = new Stack();

stack.push("test");
stack.push("teste");
stack.push("teste2");
console.log(stack.count())
console.log(stack.pop())
console.log(stack.count())
