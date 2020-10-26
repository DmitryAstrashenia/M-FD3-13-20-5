var Scale = /** @class */ (function () {
    function Scale(_storage) {
        this.storage = _storage;
    }
    Scale.prototype.addItem = function (product) {
        this.storage.addItem(product);
    };
    Scale.prototype.getSumScale = function () {
        var sum = 0;
        var items = this.storage.getCount();
        for (var i = 0; i < items; i++) {
            sum += this.storage.getItem(i).getScale();
        }
        return sum;
    };
    Scale.prototype.getNameList = function () {
        var productList = [];
        var items = this.storage.getCount();
        for (var i = 0; i < items; i++) {
            productList.push(this.storage.getItem(i).getName());
        }
        return productList;
    };
    return Scale;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.products = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.products.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.products[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.products.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        if (localStorage.length == 0) {
            localStorage.setItem("Scale", JSON.stringify([]));
        }
        var products = JSON.parse(localStorage.Scales);
        products.push(item);
        localStorage.Scale = JSON.stringify(products);
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var products = JSON.parse(localStorage.Scales);
        var item = products[index];
        return new Product(item.weight, item.name);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var products = JSON.parse(localStorage.Scales);
        return products.length;
    };
    return ScalesStorageEngineLocalStorage;
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
var apple = new Product(125, "Яблоки");
var tomato = new Product(100, "Помидоры");
var bigTomato = new Product(175, "Помидор большой");
var storage_Array = new ScalesStorageEngineArray();
var strage_localStorage = new ScalesStorageEngineLocalStorage();
var scales_Array = new Scale(storage_Array);
scales_Array.addItem(apple);
scales_Array.addItem(tomato);
scales_Array.addItem(bigTomato);
var scales_localStorage = new Scale(strage_localStorage);
scales_localStorage.addItem(apple);
scales_localStorage.addItem(tomato);
scales_localStorage.addItem(bigTomato);
//# sourceMappingURL=app.js.map