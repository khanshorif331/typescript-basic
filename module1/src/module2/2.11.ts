{
    // 

    // utility types

    // pick type

    type Person = {
        name:string,
        age:number,
        email?:string,
        contactNo  : string
    }

    type NameAge = Pick<Person,'name' | 'age'>


    // omit type

    type ContactInfo = Omit<Person,'name' | 'age'>

    // required type

    type PersonRequired = Required<Person>

    // partial type
    type PersonPartial = Partial<Person>

    // readonly type

    type PersonReadonly = Readonly<Person>
    const person1 : PersonReadonly = {
        name:'Shorif',
        age:100,
        contactNo:'018'
    }
    

    // record type
    // type MyObj = {
    //     a:string,
    //     b:string,
    // }


    // type something = Record<key,valueType>
    type MyObj = Record<string,string>

    const obj1:MyObj = {
        a:'aa',
        b:'bb',
        c:'cc'
    }

    const EmptyObj : Record <string,unknown>  = {}















    // 
}