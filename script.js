Array.prototype.forEach2 = function (callback) {
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      callback(this[key], key, this);
    }
  }
};

var courses = ['JS', 'PHP', 'Java'];

courses.forEach2(function (value, index, array) {
  console.log(value, index, array);
});
