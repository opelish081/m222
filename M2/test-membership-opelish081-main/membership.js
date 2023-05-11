const { template } = require('@babel/core')
//64130500112 สรวิชญ์ จงจามรีสีทอง

class Membership {
  // constructor(){
  //   this.members = []
  // }
  // static autoId = 1
  // findMemberId(id){
  //   return this.members.findIndex(e => e.memberId === id)
  // }
  // findMemberName(name){
  //   return this.members.findIndex((e) => e.memberName.toLowerCase() === name.toLowerCase())
  // }
  // subscribe(name){
  //  if(!this.members.some(e => e.memberName === name)){
  //  this.members.push({autoId, name})
  //  return this.members.length
  // }
  //  return -1
  // }
  // unsubscribe(id){
  // }
  static autoId = 1
  constructor() {
    this.members = []
  }
  findMemberId(id) {
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i].memberId === id) return i
    } return -1
  } findMemberName(name) {
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i].memberName.toLowerCase() === name.toLowerCase()) return i
    } return -1
  } subscribe(name) {
    const findName = this.findMemberName(name)
    if (findName === -1) {
      this.members.push({ memberId: Membership.autoId++, memberName: name })
      return this.members.length
    } else return -1
  } unsubscribe(id) {
    if (id === undefined) return -1
    const findId = this.findMemberId(id)
    if (findId !== -1) {
      this.members.splice(findId, 1)
      return id
    }
    else return -1
  }
}
module.exports = Membership
