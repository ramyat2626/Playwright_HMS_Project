
/*
Arrays
declaration and initilization



class Array_Typescript{
    public arrayDemo(){
        const arr1 : number [] = [21,25,27,29,23,20]
        const arr2 = [31, 35, [37, 39], 33, 30]
        const arr3 = [41, 45, 47, 43, 40]

         const LHRentRoomwise = [750, 450, [350, 350], 500, 500]

        console.log(arr1)

        console.log(arr1.at(3))

        console.log(arr2)
        console.log(arr2.flat())
        console.log(arr1.concat(arr2.flat()))

        console.log(arr1.every((value)=>value>27))

        console.log(arr1.fill(26))
        

        console.log(arr1.filter((value)=>value<26))
        console.log(arr1.find((value)=>value<25))// 21 is the value

        console.log(arr1.findIndex((value)=>value<25))
        console.log(arr1.lastIndexOf((value)=>value<25))

    }


}
    
    const obj = new Array_Typescript()
    obj.arrayDemo()

*/

class Array{
    public demo1(){
        const abc : number [] = [21, 23, 25, 27,29]
        const xyz = [41, 43,45, [42, 44], 47, 49]
        const pqr = [62,64,66,68,63,65,67]

        console.log(abc)
        console.log(xyz.at(4)) //declares the index
        console.log(xyz.flat())//removes the array inside a array
        console.log(abc.concat(xyz.flat())) // combines both the arrays 
        console.log(abc.every((value=>value==27)))// every number is equal to 27 the value retuns as false
        console.log(abc.fill(10,1,3))// value to be replaced with start index to -1 end index
        console.log(pqr.concat(abc))// combining two variables         

    }
}
const obj = new Array()
obj.demo1()






