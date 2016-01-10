define(["require", "exports", "rota/core/index"], function (require, exports) {
    var Startup = (function () {
        function Startup() {
        }
        Startup.init = function () {
            Startup.registerStates();
        };
        Startup.registerStates = function () {
            console.log('reggistiretion started');
        };
        return Startup;
    })();
    exports.Startup = Startup;
});
//# sourceMappingURL=startup.js.map