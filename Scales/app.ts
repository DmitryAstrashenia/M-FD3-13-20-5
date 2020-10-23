class Scale {
  productList: Object[];

  constructor() {
    this.productList = [];
  }

  add(product: Object) {
    this.productList.push(product);
  }

  getSumScale(): number {
    let sum: number = 0;
    this.productList.forEach(
      (element: Product) => (sum = sum + element.weight)
    );
    return sum;
  }

  getNameList(): string[] {
    let productListName: string[] = [];
    this.productList.forEach((element: Product) =>
      productListName.push(element.name)
    );
    return productListName;
  }
}

class Product {
  weight: number;
  name: string;
  constructor(_weight: number, _name: string) {
    this.weight = _weight;
    this.name = _name;
  }

  getScale() {
    return this.weight;
  }
  getName() {
    return this.name;
  }
}

let scale: Scale = new Scale();
let apple: Object = new Product(100, "apple");
let orange: Object = new Product(125, "orange");
let tomato: Object = new Product(150, "tomato");

scale.add(apple);
scale.add(orange);
scale.add(tomato);
