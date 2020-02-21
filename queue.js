//Queue adalah struktur data yang bersifat FIFO (First In First Out)

function Queue(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._head = 0;
  this._tail = 0;
}

Queue.prototype.count = function() {
  return this._tail - this._head;
}

Queue.prototype.enqueue = function(value) {
  if (this.count() < this._capacity) {
    this._storage[this._tail++] = value;
    return this.count()
  }
  return "Max chace already."
}

Queue.prototype.peek = function() {
  return this._storage[this._head];
}

Queue.prototype.dequeue = function() {
  const element = this._storage[this._head];
  delete this._storage[this._head];
  if (this._head < this._tail) this._head++;
  return element;
}

const queue = new Queue();

queue.enqueue("test")
queue.enqueue("test2")
queue.enqueue("test3")
// queue.dequeue()
console.log(queue)

