//Map
//Collection to manage the data
//A collection of key-value pairs. key can be any type
//in map properties maintain in a order they were inserted(declared)
//methods like set(), get(),delete(),has()
//key should be unique 
//we use map when we need a dictonary like structure where key can be object, number or string
//Map and interface
//output - Interface and map has flower brackets, data will be saperated by colen : in interface 
// in maps the data will be saperated by arrow/implies =>
class mapDemo{
    public mapnew(){
        const map1 = new Map()

        map1.set(10, "string1")//(Key, value)
        map1.set(11, "string2")
        map1.set(11, 33)
        map1.set(true, 30)
        map1.set("string", 33)

        const map2 = new Map<number, string>([[20, "praveen"], [30, "abc"]])

        const mapvalues:(string | number)[] = [...map1.values()];

        console.log("Value:",mapvalues)
          
        console.log(map1)
        console.log(map1.keys())//it prints all the unique keys
        console.log(map1.has(true))// it give the value exist or not true/false
        console.log(map1.delete(true))// It deletes the property with key mentioned
        console.log(map1)
        console.log(map1.get(10))//it prints the value for the key mentioned
        console.log(map1.set(15, "newvalue"))//It adds the new property key and value 
        console.log(map2.set(30, "Ramya"))//It updates the new property key and value 
        console.log(map1.size)//it give the number of properties
        console.log("values:", typeof(map1.values()))//it prints the values
       
    }
}
const obj = new mapDemo()
obj.mapnew()