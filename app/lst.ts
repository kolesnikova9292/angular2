export class elementList {
  id: number;
  name: string;
  price: number;
  category: number;
}

export class elementListWithCategory {
  id: number;
  name: string;
  price: number;
  category: string;
}

export class categoryList {
  id: number;
  name: string;
}

export class ElementModel {
  constructor(
    public id: number,
    public name: string,
    public price: string,
    public category: string
  ) {}
}
