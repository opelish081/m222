class product{
    constructor(name="",description="",price=0.0,quantity=0){
        this.name = name
        this.description = description
        this.price = price
        this.quantity = quantity
    }
    getTotlaPrice(){
        if(this.price <= 0 || this.quantity <= 0){
            return undefined
        }else {
            return this.price * this.quantity
        }
    }
    sell(quantity){
        if(this.quantity < quantity || quantity < 0){
            return undefined
        }
        else if(this.quantity > quantity ){
            let returnNameandQuantity = `property name: ${this.name}, property quantity: ${this.quantity - quantity}`
            return {returnNameandQuantity}
        }
    }
}

let user1 = new product("toys","cartoon",35.7,8)
let user2 = new product('cd','hero',399.2,3)
let user3 = new product('game','mavel',111,-7)
let user4 = new product('phone','buy new phone',10000,1)
// let user5 = new product('phone','ihpne',30000,)

console.log(user1.getTotlaPrice())
console.log(user1.sell(3))
console.log(user2.getTotlaPrice())
console.log(user2.sell(1))
console.log(user3.getTotlaPrice())
console.log(user4.sell(-1))





// if(totolPrice < 0){
        // return totolPrice
        // }
        // else if(totolPrice <= 0){
        //     return undefined
        // }