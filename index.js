function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  function namedFunc() {}
  return namedFunc;
}

function returnsAnAnonymousFunction() {
  return function () {};
}

module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};
