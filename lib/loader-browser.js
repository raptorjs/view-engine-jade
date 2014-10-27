module.exports = function(compiler, runtime, path) {
    if (!runtime) {
        runtime = require('jade/runtime');
    }

    var createFunc = require(path);
    var templateFunc = createFunc(runtime);
    return templateFunc;
};
