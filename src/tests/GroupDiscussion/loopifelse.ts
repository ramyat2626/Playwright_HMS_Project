/*class evennumber{
    public abc(){
        let i: number;
        for(i=1; i<=20; i++){ // i=1 is the starting point, i<=20 is the ending point, i++ is the increment
            if(i%2==0){
                console.log("even number:", i)
            }
            else{
                console.log("Odd Number", i)
            } 
        }
    }
}
const evenNumberObj = new evennumber()
evenNumberObj.abc()
*/

/*
class evennumber{
    public abc(){
        let i: number;
        for(i=1; i<=20; i++){ // i=1 is the starting point, i<=20 is the ending point, i++ is the increment
            if(i%2==0){
                console.log("even number:", i)
            }
            else{
                console.log("Odd Number", i)
            } 
        }
    }
}
const evenNumberObj = new evennumber()
evenNumberObj.abc()


*/

/*
const gVal : number = 10
let gval1 : string = "this is let var"
class prdemo{
    static sVar : string = ("This is a Global Variable")
    iVar : number = 5
    PaymentMethodChangeEvent(){
        let lVar : number = 10  
        console.log("print my name")
        console.log(gVal, gval1, prdemo.sVar, this.iVar, lVar)
    }
}

const printobj = new prdemo()
printobj.PaymentMethodChangeEvent()

*/

/*
    const gvar : string = "Thakkalapalli"
class Name{
    static svar : string = "4a"
    ivar : string = "Edwy Parade"

    public Ramya(){
        let lvar : number = 40
        console.log(gvar, Name.svar, this.ivar, lvar)

    }

}

const obj = new Name()
obj.Ramya()

*/
/*
class statement{
    public condition(){
        let a=10
        let b=20
        let c=30
        if(a<20){
            console.log("True")
        }
        else{
            console.log("False")
        }
        if(b>c){
            console.log("yes")
        }

    }

}

const obj = new statement()
obj.condition()


class loop{
    public abc(){
        /*let a: number
        for(a=20; a<=30; a++){
          //  console.log(a)
        
        if(a==25){
            continue 
        }
    
            console.log(a)       

    }




let b=10
while(b<=20){
    if(b>=10){
    console.log(b)
}
b++
if(b==18){
break
}
}
}
}
const obj = new loop()
obj.abc()



class parameter{
    public test(a : number,b : number){
        let c : number 
        c=a+b   
        return c

    }
}
const obj = new parameter()
let result: number = obj.test(2,5)
console.log(result)
*/



class ramya{
    public glucester(x: number, y: number){
        let z : number 
        z=x+y
        return z

    }
    public getValue(){
        
        let abc : number = this.glucester(15,20)+10
        return abc
    }
}
const obj = new ramya()
let result: number = obj.glucester(10,15)
console.log(result)
let result1 : number = obj.getValue()
console.log(result1)






