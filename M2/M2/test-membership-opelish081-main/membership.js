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
  static autoId = 1;
  members = [];

  constructor() {
    this.members = [];
  }
  findMemberId(id) {
    return this.members.findIndex((member) => member.memberId === id);
  }
  findMemberName(name) {
    const lowerCaseName = name.toLowerCase();
    return this.members.findIndex(
      (member) => member.memberName.toLowerCase() === lowerCaseName
    );
  }
  subscribe(name) {
    const existingIndex = this.findMemberName(name);
    if (existingIndex !== -1) {
      // Member with same name already exists
      return -1;
    }
    const newMember = {
      memberId: MemberGroup.autoId,
      memberName: name,
    };
    this.members.push(newMember);
    MemberGroup.autoId += 1;
    return this.members.length;
  }
  unsubscribe(id) {
    if (id === undefined) {
      // Invalid input
      return -1;
    }
    const index = this.findMemberId(id);
    if (index === -1) {
      // Member not found
      return -1;
    }
    this.members.splice(index, 1);
    return id;
  }
}
module.exports = Membership
