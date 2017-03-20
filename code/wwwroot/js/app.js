define(["require", "exports", "./Sample"], function (require, exports, Sample_1) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.run = function () {
            var msg = "Hello, jtower";
            var s = new Sample_1.Sample();
            s.doSomething(function (v) { console.log("value: " + v); });
        };
        return App;
    }());
    exports.App = App;
    App.run();
});
//# sourceMappingURL=app.js.map