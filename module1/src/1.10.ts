{
// 

// union types

// string literal types
type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper' 
type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper' 


type Developer = FrontendDeveloper | FullStackDeveloper


const newDeveloper:FrontendDeveloper = 'fakibazDeveloper'

type User = {
    name: string,
    email?: string,
    gender: 'male' | 'female',
    bloodGroup: 'A+' | 'B+' | 'AB+' | 'O+'
}

const user1: User = {
    name:'Shorif',
    gender:'male',
    bloodGroup:'A+'
}



// intersection types &

type FrontDeveloper  ={
    skills: string[],
    designation1: 'Frontend Developer',
}

type BackDeveloper  ={
    skills: string[],
    designation2: 'Backend Developer',
}

type FullDeveloper = FrontDeveloper & BackDeveloper


const fullStackDeveloper:FullDeveloper = {
    skills:['react','nodejs'],
    designation1:'Frontend Developer',
    designation2:'Backend Developer'
}











    // 
}