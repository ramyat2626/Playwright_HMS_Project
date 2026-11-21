//Set
//set is the collection of unique values
//Set will not print dupilicates
//You cannot access set via index-based
//Provides methods as delete(), add(), has()
//array length - set length
class setunique{
    public value(){
        const setof = new Set<number>
        setof.add(10)
        setof.add(12)
        setof.add(10)
        setof.add(15)
        setof.add(12)
        setof.add(10)

        const newset = new Set([10, 20, 10, 30, 20, 40, 20])

        const pqr = [62,64,66,68,63,65,67,66]//8
      
        const objset = new Set(pqr).size
        const objduplicate = pqr.length - objset        
        console.log(setof.size)
        console.log(newset)
        console.log(objduplicate)
}
}
const obj = new setunique()
obj.value()
