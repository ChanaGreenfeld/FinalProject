
export class product {
 
  constructor(
    public nameCategory: String,
    public products: [
      {
        name: String
        description: String
        price: Number
        units: Number
        pic: String
        age: String
        populare: Number
        salary: Boolean
        date: Date
      },
    ],
  ) {}
}

export class arrProduct {
  constructor(
    public name: String,
    public description: String,
    public price: number,
    public units: Number,
    public pic: String,
    public age: String,
    public populare: Number,
    public salary: Boolean,
    public date: Date,
  ) {}
}

export class arrProduct3 {
  constructor(
    public _id:string, 
    public name: String,
    public description: String,
    public price: number,
    public units: Number,
    public pic: String,
    public age: String,
    public populare: Number,
    public salary: Boolean,
    public date: Date,
    public item:number
  ) {}
}
export class arrProduct2 {
  constructor(
    public productss: [
      {
        name: String
        description: String
        price: Number
        units: Number
        pic: String
        age: String
        populare: Number
        salary: Boolean
        date: Date
      },
    ],
  ) {}
}


