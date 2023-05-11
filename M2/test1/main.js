class BankAccount {
  constructor(accountNumber=0, ownerName){
    this.accountNumber = accountNumber
    this.ownerName = ownerName
    this.balance = 0.0
    this.transactions = []
  }

  deposit(money1){
    if(money1 > 0){
      this.balance += money1
      this.transactions.push(`deposit : ${money1}`)
    }};

  withdraw(money){
    let kuy = "you can't withdraw"
    let kuy1= "cant"
    // if(money < 50000){
    //   this.balance -= money // this.balance = this.balance - money
    //   this.transactions.push(`withdraw : ${money}`)
    // }
    // else if(money > 50000){
    //   return kuy 
    // }
    // else if(this.balance < money){
    //   return kuy1
    // }
    if(this.balance < money) {
      return 'cannot withdraw because not enonge money'
    } else if (money > 50000) {
      return 'overmoney per transaction'
    } else {
      this.balance -= money // this.balance = this.balance - money
      this.transactions.push(`withdraw : ${money}`)
    }
  };
  getBalance(){
    return this.balance
  }
  getTransactions(){
    return this.transactions
  }
  getOwnerName(){
    return this.ownerName
  }
  changeName(change){
    return this.ownerName = change
  }
  deleteTransacyion(){
    return this.transactions =[]
  }
}

let user1 = new BankAccount()


user1.deposit(200)
// user1.deposit(50002)
// user1.withdraw(100)
// user1.withdraw(200)
// user1.withdraw(300)
console.log(user1.withdraw(300))

console.log(user1.getBalance());
console.log(user1.getTransactions());
console.log(user1.changeName("Boss"));
// console.log(user1.getOwnerName());

  