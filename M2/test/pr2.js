class CourseManagement{
    constructor(){
        console.log("constructor is working...")
        this.courses=[]
    }
    createCourse(courseId, courseTitle='untitled', courseTerm='2-2565'){
        const newCourse={courseId:courseId, courseTitle:courseTitle, courseTerm:courseTerm, registeredStudents:[]}
        return this.courses.push(newCourse)
    }
    registerCourseWithOneStudent(courseId, studentId){
       const foundIndex= this.findCourseIndex(courseId)
    //    console.log(foundIndex)//1    
    //    console.log(this.courses)
    //        [
        //     {
            //       courseId: 'INT201',   
            //       courseTitle: 'JS',    
            //       courseTerm: '1-2565', 
            //       registeredStudents: []
            //     },
            //     {
                //       courseId: 'INT203',   
                //       courseTitle: 'untitled',
                //       courseTerm: '2-2565', 
                //       registeredStudents: []
                //     }
                //   ]    
                //    console.log(this.courses[foundIndex])       
                // {    
                    //     courseId: 'INT203',       
                //     courseTitle: 'untitled',    
                //     courseTerm: '2-2565',     
                //     registeredStudents: []    
                //   }    
                // console.log(this.courses[foundIndex].registeredStudents)//[]    
                if(foundIndex===-1)return -1   
                return this.courses[foundIndex].registeredStudents.push(studentId)
    }
    registerCourseWithStudents(courseId, studentIds){
        const foundIndex=this.findCourseIndex(courseId)
        if(foundIndex===-1)return -1        
        return this.courses[foundIndex].registeredStudents.push(...studentIds)
    }
    removeCourse(courseId){  
        const oldLength=this.courses.length        
        this.courses=this.courses.filter((course)=>courseId!==course.courseId)
        const newLength=this.courses.length        
        if(newLength===(oldLength-1)) return courseId        
        else return -1    }
    findCourseIndex(courseId){
        return this.courses.findIndex((course)=>course.courseId===courseId)
    }
    getCourses(){
        return this.courses    }
}
const cm=new CourseManagement()
console.log(cm.createCourse('INT201','JS','1-2565'))
console.log(cm.createCourse('INT203'))
console.log(cm.registerCourseWithOneStudent('INT203',645000001))
console.log(cm.registerCourseWithOneStudent('INT203',645000102))
console.log(cm.registerCourseWithStudents('INT203',[645000111, 645000222,645000333]))
console.log(cm.getCourses())
console.log(cm.removeCourse('INT205'))