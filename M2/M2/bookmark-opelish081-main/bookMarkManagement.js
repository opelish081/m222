const { template } = require('@babel/core')
//64130500112 สรวิชญ์ จงจามรีสีทอง
class BookMark {
  constructor(isbn, totalPages = 0){
  this.isbn = isbn
  this.totalPages = totalPages
  this.bookMarks = []
  }
  addBookMark(pageNumber){
    if(pageNumber >= 1 && pageNumber < this.totalPages){
      this.bookMarks.push(pageNumber)
      return this.bookMarks.length
    }
    if(!pageNumber < 1 && !pageNumber > this.totalPages){
      this.bookMarks.push(pageNumber)
    }
    return this.bookMarks.length
  }
  removeBookMark(pageNumber){
    if(this.bookMarks.includes(pageNumber)){
     this.bookMarks = this.bookMarks.filter(e => e !== pageNumber)
    return pageNumber 
    }
    return undefined
  }
  goToFirstBookMark(){
    if(this.bookMarks.length === 0){
      return undefined
    }else {
      return this.bookMarks[0]
    }
  }
  goToLastBookMark(){
    if(this.bookMarks.lemgth === 0){
      return undefined
    }else{
      return this.bookMarks[this.bookMarks.length - 1]
    }
  }
  getBookMarks(){
    return this.bookMarks
  }
}
module.exports = BookMark

////// 8t4lkre foejaopfjopsghjasopfjperheOPREGHOPJGEPRHOPERJGOPESJGWUJ  pujpodrjgbjhrpetdojgeropbjerop0bjoprjw3eoph3operwhjgporehjgpoehjropghjop

























// constructor(isbn, totalPages = 0){
//   this.isbn = isbn
//   this.totalPages = totalPages
//   this.bookMarks = []
// }
// addBookMark(pageNumber){
//   if(pageNumber >= 1 && pageNumber < this.totalPages){
//     this.bookMarks.push(pageNumber)
//     return this.bookMarks.length
//   }else{return this.bookMarks.length}
// }

//   if(!(pageNumber < 1 || pageNumber > this.totalPages)){
//     this.bookMarks.push(pageNumber)
//   }
//     return this.bookMarks.length
// }

// removeBookMark(pageNumber){
//   if(pageNumber.length === 0){
//     return undefined
//   }else if(this.bookMarks.includes(pageNumber)){
//     this.bookMarks = this.bookMarks.filter(e => e !== pageNumber)
//     return pageNumber
//   }


  // if(pageNumber.length === 0){
  //   return undefined
  // }
  // if(this.bookMarks.find(e => e === pageNumber)){
  //   return this.bookMarks.shift()
  // }
  

  // const index = this.bookMarks.indexOf(pageNumber)
  // if(index >= 0){
  //   this.bookMarks.splice(index,1)
  //   return pageNumber}

  
// }
// goToFirstBookMark(){
//   if(this.bookMarks.length === 0){
//     return undefined
//   }else{
//     return this.bookMarks[0]
//   }
// }
// goToLastBookMark(){
//   if(this.bookMarks.length === 0){
//     return undefined
//   }else{
//     return this.bookMarks[this.bookMarks.length - 1]
//   }
// }
// getBookMarks(){
//   return this.bookMarks
// }
