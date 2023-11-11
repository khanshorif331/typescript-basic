{
// 

    // type guard

    // type of --> type guard

    type Alphanuemeric = number | string

    const add = (param1:Alphanuemeric,param2:Alphanuemeric):Alphanuemeric => {
        if(typeof param1 === 'number' && typeof param2 === 'number'){ 
        return param1 + param2}
        else{
            return param1.toString() + param2.toString()
        }
    }


    const result1 = add("2","3")
    console.log(result1);


    // in guard

    type NormalUser = {
        name:string
    }

    type AdminUser = {
        name:string,
        role:'admin'
    }

    const getUser = (user:NormalUser | AdminUser) => {
        if('role' in user){
            console.log(`My name is ${user.name} and I am an ${user.role}`);
        }else{
            console.log(`My name is ${user.name}`);
        }
    }
    



    const normalUser : NormalUser = {
        name:'Shorif'
    }

    const adminUser : AdminUser = {
        name:'adminvai',
        role:'admin'
    }

    getUser(adminUser)














    // 
}