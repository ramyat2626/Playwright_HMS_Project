/*
class controlstatement{
    public conditionalstatement(){
        /*
        if 
        if-else
        if-else-if
        nested if
        
        const i: number = 10
        const j: number = 20
        const k: number = 30

        if(i>j){
            console.log("condition 1")
        }else if(j>k){
            console.log("condition 2")
        }else if(k>i){
            console.log("condition 3")
        }else{
            console.log("In else")
        }      
    }
    
    public  loopingStataement(){
         /*
         write a program to print numbers from 10 to 20 ensure 10 and 20 are included in the 
         output
         skip 15 in the output
         stop executing when the value is greater than 18
        for(initilation; condition; increment/decrement)
         for loop
        while loop
        while(condition)
        =  assigning a value to a variable
        ==  checking the value of a variable
        === checking the value and data type of a variable
        b++
        ++b
        b--
        --b
        
        for(let indexVal:number = 10; indexVal<21; indexVal++){ 
            if(indexVal !=15){
                if(indexVal>18){
                    break
                }
                 console.log(indexVal)
            }

    }
    console.log("===========while===================")
    
     let b: number = 10
    while (b<=20){
        if(b!=15){
            console.log(b)
        }
        b++
        if(b==19){
            break
        }
    
       

    }
 
    let r: number = 50
    while(r<=60){
        console.log(r++)
        console.log(++r)
        console.log(r--)
        console.log(--r)
    }

    console.log("==============Do-While==================")
    let z: number = 10
    do{
        if(z!=15){
            console.log(z)
        }
        z++
        if(z==19){
            break
        }

     }while(z<21)
    }
}

    */


class parameter{
    public parameterAndReturnType(val1: number, val2: number): number{ //function proper syntax function name, parameter, return type
    return val1+val2
    }
    public getvalue(){
    const value: number = 10+this.parameterAndReturnType(10,20)
    }
}

/*
const obj = new controlstatement()
obj.conditionalstatement()
obj.loopingStataement()
*/

