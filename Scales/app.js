var Scale = /** @class */ (function () {
    function Scale() {
        this.productList = [];
    }
    Scale.prototype.add = function (product) {
        this.productList.push(product);
    };
    Scale.prototype.getSumScale = function () {
        var sum = 0;
        this.productList.forEach(function (element) { return (sum = sum + element.weight); });
        return sum;
    };
    Scale.prototype.getNameList = function () {
        var productListName = [];
        this.productList.forEach(function (element) {
            return productListName.push(element.name);
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
var apple = new Product(100, "apple");
var orange = new Product(125, "orange");
var tomato = new Product(150, "tomato");
scale.add(apple);
scale.add(orange);
scale.add(tomato);
//# sourceMappingURL=app.js.map