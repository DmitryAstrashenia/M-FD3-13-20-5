class Scale {
  productList: Product[];

  constructor() {
    this.productList = [];
  }

  add(product: Product) {
    this.productList.push(product);
  }

  getSumScale(): number {
    let sum: number = 0;
    this.productList.forEach((element: Product) => (sum += element.getScale()));
    return sum;
  }

  getNameList(): string[] {
    let productListName: string[] = [];
    this.productList.forEach((element: Product) =>
      productListName.push(element.getName())
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

class Apple extends Product {}
class Tomato extends Product {}

let apple: Apple = new Apple(125, "Яблоки");
let tomato: Tomato = new Tomato(100, "Помидоры");
let bigTomato: Tomato = new Tomato(175, "Помидор большой");

scale.add(apple);
scale.add(tomato);
scale.add(bigTomato);
