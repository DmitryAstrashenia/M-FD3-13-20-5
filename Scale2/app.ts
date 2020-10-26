class Scale {
  productList: IScalable[];

  constructor() {
    this.productList = [];
  }

  add(product: IScalable) {
    this.productList.push(product);
  }

  getSumScale(): number {
    let sum: number = 0;
    this.productList.forEach(
      (element: IScalable) => (sum += element.getScale())
    );
    return sum;
  }

  getNameList(): string[] {
    let productListName: string[] = [];
    this.productList.forEach((element: IScalable) =>
      productListName.push(element.getName())
    );
    return productListName;
  }
}

interface IScalable {
  getScale(): number;
  getName(): string;
}

let scale: Scale = new Scale();

class Apple implements IScalable {
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

class Tomato implements IScalable {
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

let apple: Apple = new Apple(125, "Яблоки");
let tomato: Tomato = new Tomato(100, "Помидоры");
let bigTomato: Tomato = new Tomato(175, "Помидор большой");

scale.add(apple);
scale.add(tomato);
scale.add(bigTomato);
