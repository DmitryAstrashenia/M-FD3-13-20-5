interface IStorageEngine {
  addItem(item: Product): void;
  getItem(index: number): Product;
  getCount(): number;
}

class Scales<StorageEngine extends IStorageEngine> {
  private storage: StorageEngine;

  constructor(_storage: StorageEngine) {
    this.storage = _storage;
  }

  addItem(product: Product) {
    this.storage.addItem(product);
  }

  getSumScale(): number {
    let sum: number = 0;
    const items = this.storage.getCount();

    for (let i = 0; i < items; i++) {
      sum += this.storage.getItem(i).getScale();
    }
    return sum;
  }

  getNameList(): string[] {
    let productList: Array<string> = [];
    const items = this.storage.getCount();

    for (let i = 0; i < items; i++) {
      productList.push(this.storage.getItem(i).getName());
    }
    return productList;
  }
}

class ScalesStorageEngineArray implements IStorageEngine {
  private products: Array<Product> = [];

  addItem(item: Product): void {
    this.products.push(item);
  }

  getItem(index: number): Product {
    return this.products[index];
  }

  getCount(): number {
    return this.products.length;
  }
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {
  addItem(item: Product): void {
    if (localStorage.length == 0) {
      localStorage.setItem("Scales", JSON.stringify([]));
    }
    let products: Array<Product> = JSON.parse(localStorage.Scales);
    products.push(item);
    localStorage.Scales = JSON.stringify(products);
  }

  getItem(index: number): Product {
    const products: Array<Product> = JSON.parse(localStorage.Scales);
    const item: any = products[index];

    return new Product(item.weight, item.name);
  }

  getCount(): number {
    const products: Array<Product> = JSON.parse(localStorage.Scales);
    return products.length;
  }
}

class Product {
  private weight: number;
  private name: string;

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

const apple: Product = new Product(125, "Яблоки");
const tomato: Product = new Product(100, "Помидоры");
const bigTomato: Product = new Product(175, "Помидор большой");

const storage_Array = new ScalesStorageEngineArray();
const strage_localStorage = new ScalesStorageEngineLocalStorage();

const scales_Array = new Scales<ScalesStorageEngineArray>(storage_Array);
scales_Array.addItem(apple);
scales_Array.addItem(tomato);
scales_Array.addItem(bigTomato);

const scales_localStorage = new Scales<ScalesStorageEngineLocalStorage>(
  strage_localStorage
);
scales_localStorage.addItem(apple);
scales_localStorage.addItem(tomato);
scales_localStorage.addItem(bigTomato);
