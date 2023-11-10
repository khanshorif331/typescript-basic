{

// 

// conditional types

type a1 = null 
type b1 = undefined


type x = a1 extends null ? true : false  // conditional type


// nested conditional type
type y = a1 extends null ? true : b1 extends undefined ? undefined : any 


type Sheikh = {
    bike : string
    car : string
    ship : string
    plane : string
}

// key of operator | keyof sheikh    =  bike | car | ship

// car ase kina / bike ase kina /ship asena kina /tractor ase kina
type CheckVehicle<T> = T extends keyof Sheikh ? true : false 


type HasBike = CheckVehicle<'car'>   // true















// 

}