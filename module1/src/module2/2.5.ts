{
    // 

    // function with generics

    const createArray = (param:string):string[] =>{
        return [param]
    }


    const createArrayWithGeneric = <T>(param:T):T[] =>{
        return [param]
    }


    const res1 = createArray('Shorif')
    const resGeneric = createArrayWithGeneric<string>('Shorif')


    type User = {id:number,name:string}

    const resGenericObj = createArrayWithGeneric<User>({id:222,name:'Shorif'})




    const createArrayWithTuple = <T,Q>(param1:T,param2:Q):[T,Q] =>{
        return [param1,param2]
    }


    const res10 = createArrayWithTuple<string,number>('Shorif',20)
    const res11 = createArrayWithTuple<string,{name:string}>('Mamun',{
        name:'Asia'
    })



    
    
    const addCourseToStudent = <T>(student : T) =>{
        const course = 'Next Level Web Development'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name:'Shorif',email:'x@gmail.com',devType:'Full Stack'})

    const student2 = addCourseToStudent({name:'Mamun',email:'y@gmail.com',hasWatch:'Apple Watch'})







    // 
}