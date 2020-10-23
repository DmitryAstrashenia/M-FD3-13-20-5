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
var Scale = /** @class */ (function () {
    function Scale() {
        this.productList = [];
    }
    Scale.prototype.add = function (product) {
        this.productList.push(product);
    };
    Scale.prototype.getSumScale = function () {
        var sum = 0;
        this.productList.forEach(function (element) { return (sum = sum + element.getScale()); });
        return sum;
    };
    Scale.prototype.getNameList = function () {
        var productListName = [];
        this.productList.forEach(function (element) {
            return productListName.push(element.getName());
        });
        return productListName;
    };
    return Scale;
}());
var Product = /** @class */ (function () {
    function Product(_weight, _name) {
        this.weight = _weight;
        this.name = _name;
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var scale = new Scale();
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tomato;
}(Product));
var apple = new Apple(125, "Яблоки");
var tomato = new Tomato(100, "Помидоры");
var bigTomato = new Tomato(175, "Помидор большой");
scale.add(apple);
scale.add(tomato);
scale.add(bigTomato);
//# sourceMappingURL=app.js.map