{
// 

// mapped types

const arrOfNumbers : number[] = [1,4,5]

// const arrOfSrings : string[] = ['1','2','3']

const arrOfSrings : string[] = arrOfNumbers.map((number)=>number.toString())

console.log(arrOfSrings)


type AreaNumber = {
    height : number,
    width : number
}

// 

// type AreaString = {
//     [key in keyof AreaNumber]  : boolean
// }

// T => {height:string,width:number}
// key => 'height' | 'width'
type AreaString<T> = {
    [key in keyof T]  : T[key]
}



const area1 : AreaString<{height:string,width:number}> = {
    height : '100',
    width : 50
}


type Height  = AreaNumber['height']    //lookup type

























    // 
}