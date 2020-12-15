var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Music = /** @class */ (function () {
    function Music() {
    }
    Music.prototype.play = function () {
        return "play music";
    };
    return Music;
}());
/* let m = new Music() */
var Violon = /** @class */ (function (_super) {
    __extends(Violon, _super);
    function Violon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Violon.prototype.makeSound = function () {
        return "Do Ré Mi !";
    };
    return Violon;
}(Music));
var v = new Violon();
console.log(v.makeSound());
console.log(v.play());
// tsc 09-exo.ts && node 09-exo.js
