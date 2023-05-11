const { template } = require('@babel/core')
//64130500112 สรวิชญ์ จงจามรีสีทอง

class BookStore {
  constructor(){
    this.stores = []
  }
  findBookIndex(isbn){
    return this.stores.findIndex(e => e.isbn === isbn)
  }
  addNewBook(isbn, stocks){
    let unique = this.stores.some((e)=>{return e.isbn === isbn})
    if(unique){
      return -1
    }
    else{
      let newStore = {isbn: isbn, stocks: stocks}
      this.stores.push(newStore)
      return stocks
    } 
  }
  sellBook(isbn, quantity){
    if(!this.stores.some(e => e.isbn === isbn)) {
      return -1
    } else if (quantity > this.stores[this.findBookIndex(isbn)].stocks) {
      return 0
    }
    this.stores[this.findBookIndex(isbn)].stocks -= quantity // 5 = 10 - 5 
    return quantity
  }
}
module.exports = BookStore  

// class BookStore {
//   constructor() {
//     this.stores = []
//   }
//   findBookIndex(isbn){
//     return this.stores.findIndex(e => e.isbn === isbn)
//   }
//   addNewBook(isbn, stocks){
//     if(!this.stores.some(e => e.isbn === isbn)) {
//       this.stores.push({isbn, stocks})
//       return stocks
//     }
//     return -1
//   }
//   sellBook(isbn, quantity) {
//     if(!this.stores.some(e => e.isbn === isbn)) {
//       return -1
//     } else if (quantity > this.stores[this.findBookIndex(isbn)].stocks) {
//       return 0
//     }
//     this.stores[this.findBookIndex(isbn)].stocks -= quantity // 5 = 10 - 5 
//     return quantity
//   }
// }
