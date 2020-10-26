var Scale = /** @class */ (function () {
    function Scale() {
        this.productList = [];
    }
    Scale.prototype.add = function (product) {
        this.productList.push(product);
    };
    Scale.prototype.getSumScale = function () {
        var sum = 0;
        this.productList.forEach(function (element) { return (sum += element.getScale()); });
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
var scale = new Scale();
var Apple = /** @class */ (function () {
    function Apple(_weight, _name) {
        this.weight = _weight;
        this.name = _name;
    }
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_weight, _name) {
        this.weight = _weight;
        this.name = _name;
    }
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
var apple = new Apple(125, "Яблоки");
var tomato = new Tomato(100, "Помидоры");
var bigTomato = new Tomato(175, "Помидор большой");
scale.add(apple);
scale.add(tomato);
scale.add(bigTomato);
//# sourceMappingURL=app.js.map