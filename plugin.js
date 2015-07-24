var FooCompiler = function(){};

console.log("plugin loaded !");
Plugin.registerCompiler({
    extensions: ["foo"]
}, function () {
    var compiler = new FooCompiler();
    return compiler;
});
var options = {};
FooCompiler.prototype.processFilesForTarget = function (files) {
  console.log("foo !");
  console.log("does it work ?");
};
