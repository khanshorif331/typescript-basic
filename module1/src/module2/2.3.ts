{
    // 


    // generic type


    // type GenericArray<param> = Array<param>
    type GenericArray<T> = Array<T>


    // const rollNumbers : number[] = [2,5,7]
    // const rollNumbers : Array<number> = [2,5,7]
    const rollNumbers : GenericArray<number> = [2,5,7]


    // const mentors : string[] = ['Shorif','Maamun','Rakib']
    // const mentors : Array<string> = ['Shorif','Maamun','Rakib']
    const mentors : GenericArray<string> = ['Shorif','Maamun','Rakib']

    // const boolArray : boolean[] = [true,false,true]
    // const boolArray : Array<boolean> = [true,false,true]
    const boolArray : GenericArray<boolean> = [true,false,true]


    


    // array of object using generics
    const user : GenericArray<{name:string,age:number}> = [
        {
            name:'Shorif',
            age:25
        },
        {
            name:'Maamun',
            age:40
        }
    ]


    // tuple using generics

    type GenericTuple<X,Y> = [X,Y] 

    const manush:GenericTuple<string,string> = ['Shorif','mamun']
    const userWithId:GenericTuple<number,{name:string,email:string}> = [1234,{
        name:'Shorif',
        email:"a@gmail.com",
    }]
    

    






    const add = (x:number,y:number):number => x+y

    add(30,20)















    // 
}