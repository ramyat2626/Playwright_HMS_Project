//Tuple
//it is used to store fixed size f elements and it can store various datatypes.
//to declare tuple you should give the data type first and initilization should happen in the same order
//tuple and array will have square braces but tuple has different data type and array has single data type
//interface has flower braces 
class tupleOne{
    public testTuple(){
        const t1: [number, string, Boolean]=[102030, "Testscript", true]
        const t2: [string, Boolean, number]=["Playwright", false, 405060]
        console.log(t1,t2)
    }
}
const obj = new tupleOne()
obj.testTuple()