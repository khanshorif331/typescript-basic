{
    // 

    // constraints 

    const addCourseToStudent = <T extends {
        id: number;
        name: string;
        email: string;
    }
    >
    (student : T) =>{
        const course = 'Next Level Web Development'

        return {
            ...student,
            course
        }
    }

    const student3 = addCourseToStudent({id:555,name:'Harun',email:'z@gmail.com',emni:'emni'})

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({id:222,name:'Shorif',email:'x@gmail.com',devType:'Full Stack'})

    const student2 = addCourseToStudent({id:333,name:'Mamun',email:'y@gmail.com',hasWatch:'Apple Watch'})














    // 
}