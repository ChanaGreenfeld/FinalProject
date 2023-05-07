export class User{
  
    constructor(
       public userName :string,
       public password:string,
       public firstName:string,
       public lastName:string,
       public phone:string,
       public email :string,
       public address: {
        city: String,
        street: String,
        numBuild:Number,
         },
         public shoppingList: [{
            status: String,
            branch: String,
            numBuild:Number,
            date:String,
            shoppingListProducts:[{
                "id":String
            }]
        }]
    ) {   }
}  
export class currentUser{
  
    constructor(
       public userName :string,
       public password:string,
       public firstName:string,
       public lastName:string,
       public phone:string,
       public email :string,
       public address: {
        city: String,
        street: String,
        numBuild:Number,
         },
         public  shoppingList: []
       
    ) {   }
}  
export class order{
  
    constructor(
        public id:string,
       public fullName :string,
       public shoppingList: [{
        status: String,
        branch: String,
        numBuild:Number,
        date:String,
        shoppingListProducts:[{
            "id":String
        }]
    }]
    ) {   }
}  