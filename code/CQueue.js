var CQueue = function() {
  this.A = [];
  this.B = [];
  this.size = 0
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.A.push(value)
  this.size+=1
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if(this.size === 0) {
    return -1;
  }
  if (!this.B.length) {
    while (this.A.length) {
      this.B.push(this.A.pop())
    }
  }

  this.size-=1;

  return this.B.pop();
};

// a []
// b []
// size = 0

// 往里加  a [1,2,3] -> // 开始删头 b [3,2,1]

