const { template } = require('@babel/core')
//64130500112 สรวิชญ์ จงจามรีสีทอง
class Book {
    constructor(isbn,title='untitled',ebook=false){
        this.isbn=isbn
        this.title=title
        this.ebook=ebook
        this.authors=[]
    }
    addAuthor(fn, ln){
        let name = {firstname: fn, lastname: ln}
        this.authors.push(name)
        return this.authors.length
    }
    getFirstAuthor(){
        if(this.authors.length === 0){
            return undefined
        }else{
            return this.authors[0]
        }
    }
    getCoAuthors(){
        if(this.authors.length === 0){
            return []
        }else {
            return this.authors.slice(1)
        }
    }
    findAuthor(firstname, lastname){
        return this.authors.find(e => e.firstname.toLowerCase() === firstname.toLowerCase()&&
                                     e.lastname.toLowerCase() === lastname.toLowerCase())
    }
    hasEbook(){
        return this.ebook
    }
}
module.exports = Book








// constructor(isbn, title= 'untitled', ebook = false){
//      this.isbn = isbn
//      this.title = title
//      this.ebook = ebook
//      this.authors = []
//     }
//     addAuthor(fn, ln){
//      let author = {"firstname": fn, "lastname": ln}
//      this.authors.push(author)
//      return this.authors.length
//     }
//     getFirstAuthor(){
//      if(this.authors === 0){
//             return undefined
//      }else{
//         return this.authors[0]
//         }
//     }
//     getCoAuthors(){
//      if(this.authors.length === 0){
//         return []
//      }else{
//         return this.authors.slice(1) // .slice จะเลือกแสดง array ทั้งหมด หลัง () ซึ่งใน () คือ ตำแหน่งของarrayอะ เช่นข้อนี้เป็น 1 ก็จะแสดงตัวที่ 2 ขึ้นไป
//      }
//     }
//     findAuthor(firstname, lastname){
//         return this.authors.find(e => e.firstname.toLowerCase() === firstname.toLowerCase() &&
//                                       e.lastname.toLowerCase() === lastname.toLowerCase());
//     }
//     hasEbook(){
//      return this.ebook
//     }