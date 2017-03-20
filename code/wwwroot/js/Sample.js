define(["require", "exports"], function (require, exports) {
    "use strict";
    var Sample = (function () {
        function Sample() {
        }
        Sample.prototype.doSomething = function (complete) {
            console.log('runnnig');
            complete(5);
        };
        return Sample;
    }());
    exports.Sample = Sample;
});
//# sourceMappingURL=Sample.js.map