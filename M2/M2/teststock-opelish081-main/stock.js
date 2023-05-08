const { template } = require('@babel/core')
//64130500112 นายสรวิชญ์ จงจามรีสีทอง
class Stock {
  // constructor() {
  //   this.stockItems = []
  // }

  // findItemIndex(id) {
  //   return this.stockItems.find(e => e.itemId === id) || -1
  // }

  // addItem(id, amount) {
  //   if(id === null || amount === null || id === undefined || amount === undefined) {
  //     return -1
  //   }
  //   if(this.findItemIndex(id) !== -1) {
  //     this.findItemIndex(id).quantity += amount
  //     return amount
  //   }
  //   this.stockItems.push({itemId: id, quantity: amount})
  //   return amount
  // }

  // addItems(items) {
  //   let successItem = 0
  //   items.map(e => {
  //     if(this.addItem(e.itemId, e.quantity) !== -1) {
  //       successItem++
  //     }
  //   })
  //   return successItem
  // }

  // sell(id, amount) {
  //   let item = this.findItemIndex(id)
  //   if(item === -1) {
  //     return -1
  //   }
    
  //   let currentQuantity = item.quantity
  //   let totalQuantity = item.quantity

  //   if(currentQuantity - amount < 0) {
  //     item.quantity = item.quantity - amount && 0
  //     return totalQuantity
  //   } else {
  //     item.quantity -= amount
  //     return amount
  //   }
    
  // }

  // getAllStockAmount() {
  //   return this.stockItems.reduce((pre, curr) => pre + curr.quantity, 0)
  // }

  constructor() {
    this.stockItems = [];
  }

  findItemIndex(id) {
    for (let i = 0; i < this.stockItems.length; i++) {
      if (this.stockItems[i].itemId === id) {
        return i;
      }
    }
    return -1;
  }

  addItem(id, amount) {
    if (id == null || amount == null) {
      return -1;
    }
    const index = this.findItemIndex(id);
    if (index !== -1) {
      this.stockItems[index].quantity += amount;
    } else {
      this.stockItems.push({ itemId: id, quantity: amount });
    }
    return amount;
  }

  addItems(items) {
    let count = 0;
    for (const item of items) {
      const added = this.addItem(item.itemId, item.quantity);
      if (added !== -1) {
        count++;
      }
    }
    return count;
  }

  sell(id, amount) {
    const index = this.findItemIndex(id);
    if (index !== -1) {
      const item = this.stockItems[index];
      const sellAmount = Math.min(amount, item.quantity);
      item.quantity -= sellAmount;
      return sellAmount;
    }
    return -1;
  }

  getAllStockAmount() {
    let total = 0;
    for (const item of this.stockItems) {
      total += item.quantity;
    }
    return total;
  }

}
module.exports = Stock
