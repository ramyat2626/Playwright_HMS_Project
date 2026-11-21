/* Define a class

//Define a class   

/* Define a class
    inside a class we define method  
    Inside a method we write lines of code
    outside the class we define a function
    */
/*class DemoClass{ 
     DemoMethod1(){
        let DemoVar1:string = "Room1"
        console.log(DemoVar1)
     }
     DemoMethod2(){
        let demovar2:string = "Room2"
        console.log(demovar2)
     }
     DemoMethod3(){
        let demovar3:string = "Room3"
        console.log(demovar3)
     }
}  

const demoObj = new DemoClass()    // create an object of the class
demoObj.DemoMethod1()  // call the method of the class using the object
demoObj.DemoMethod2()  // call the method of the class using the object
demoObj.DemoMethod3()  // call the method of the class using the object

*/

/*class NarsiLondonHouse{ 
     nlhroom1(){
        let Tenant1:string = "John"    // define a variable inside the method
        // 'type of variable' 'variable name' 'Data Type' = 'value of the variable'
        console.log(Tenant1)
     }
     nlhroom2(){
        let Tenant2:string = "Vinay"
        console.log(Tenant2)
     }
     nlhroom3(){
        let Tenant3:string = "Sakib"
        console.log(Tenant3)
     }
     nlhroom4(){
        let Tenant4:string = "Asif"
        console.log(Tenant4)
     }
     nlhroom5(){
        let Tenant5:string = "Rohit"
        console.log(Tenant5)
}  
}

const nlhObj = new NarsiLondonHouse()    
// const is a keyword to define a constant variable
// nlhObj is a variable name which is an object of the class NarsiLondonHouse
//new is a keyword to create an object of the class
// NarsiLondonHouse is a class name
nlhObj.nlhroom1()  // call the method of the class using the object
nlhObj.nlhroom2()  // call the method of the class using the object
nlhObj.nlhroom3()  // call the method of the class using the object
nlhObj.nlhroom4()  // call the method of the class using the object
nlhObj.nlhroom5()  // call the method of the class using the object

 */   

/*let nlhNumber: number = 165  //global variable - define a variable outside the class and method
let nbhNumber: number = 200 //global variable - define a variable outside the class and method


class NarsiLondonHouse{ 
     static nlhnumberofrooms:number = 5 // define a static variable inside the class
    nlhnumberofmembers:number = 7  // Instance variable means a non-static variable inside the class

     nlhroom1(){
        let Tenant1:string = "John"    // Local variable - define a variable inside the method
        // 'type of variable' 'variable name' 'Data Type' = 'value of the variable'
       console.log("Narsi London House Number:", nlhNumber, "Number of Rooms:", NarsiLondonHouse.nlhnumberofrooms, "Number of Members:", this.nlhnumberofmembers, "Tenant 1:", Tenant1)  
        //(Globl Variable) (Static Variable)give class name. (Instance Variable)give this. (Local Variable)
      //  console.log(Tenant1)
     }
     nlhroom2(){
        let Tenant2:string = "Vinay"
        console.log(Tenant2)
     }
     nlhroom3(){
        let Tenant3:string = "Sakib"
        console.log(Tenant3)
     }
     nlhroom4(){
        let Tenant4:string = "Asif"
        console.log(Tenant4)
     }
     nlhroom5(){
        let Tenant5:string = "Rohit"
        console.log(Tenant5)
}  
}

class NarsiBristolHouse{ 
    static nbhnumberofrooms:number = 6  // define a static variable inside the class
    nbhnumberofmembers:number = 9  // Instance variable - define a non-static variable inside the class

     nbhroom1(){
        let nbhtenant1:string = "Smith"    // define a variable inside the method
        // 'type of variable' 'variable name' 'Data Type' = 'value of the variable'
        console.log(nbhtenant1)
     }
     nbhtenants(){
        let nbhnumberoftenants:number = 4
        console.log(nbhnumberoftenants)
     }  
}  

   
const nlhObj = new NarsiLondonHouse() 
nlhObj.nlhroom1()

*/

/*let nlhNumber: number = 165  // Global variable 
let nbhNumber: number = 200 // Global variable 

class NarsiLondonHouse{ 
    static nlhnumberofrooms: number = 5 // Static variable
    nlhnumberofmembers: number = 3  // Instance variable

    nlhroom1(){
        let Tenant1: string = "John"   // Local variable

        // --- Simple If Condition ---
        // Checks if the instance variable (nlhnumberofmembers) is greater than 5
        if (this.nlhnumberofmembers > 5) {
            console.log("Alert: The house has more than 5 members!");
        }
        else{
            console.log("The house has 5 or fewer members.");
     } 


     /*
     if ( condition )
     {  
     console.log("Condition is true")
     }
     else
     {
        console.log("Condition is false")
     }



        console.log("Narsi London House Number:", nlhNumber, "Number of Rooms:", NarsiLondonHouse.nlhnumberofrooms, "Number of Members:", this.nlhnumberofmembers, "Tenant 1:", Tenant1);  
    }

    nlhroom2(){
        let Tenant2: string = "Vinay"
        console.log(Tenant2)
    }
    nlhroom3(){
        let Tenant3: string = "Sakib"
        console.log(Tenant3)
    }
    nlhroom4(){
        let Tenant4: string = "Asif"
        console.log(Tenant4)
    }
    nlhroom5(){
        let Tenant5: string = "Rohit"
        console.log(Tenant5)
    }   
}

// Execution
const nlhObj = new NarsiLondonHouse();
nlhObj.nlhroom1();
*/

let nlhNumber: number = 165  // Global variable 
let nbhNumber: number = 200 // Global variable 

class NarsiLondonHouse{ 
    static nlhnumberofrooms: number = 5 // Static variable
    nlhnumberofmembers: number = 7  // Instance variable

    nlhroom1(){
        let Tenant1: string = "John"   // Local variable
        console.log("Narsi London House Number:", nlhNumber, "Number of Rooms:", NarsiLondonHouse.nlhnumberofrooms, "Number of Members:", this.nlhnumberofmembers, "Tenant 1:", Tenant1);  
    }

    // --- Added a For Loop Method ---
    listAllRooms() {
        console.log("--- Listing all rooms using a For Loop ---");
        
        // Loop starts at 1, keeps running while roomNum is less than or equal to total rooms (5), and increments by 1 each time
        let roomNum: number;
        for (roomNum= 1; roomNum <= NarsiLondonHouse.nlhnumberofrooms; roomNum++) {
            console.log(`Checking Room Number: ${roomNum}`);
        }
    }

    nlhroom2(){
        let Tenant2: string = "Vinay"
        console.log(Tenant2)
    }
    nlhroom3(){
        let Tenant3: string = "Sakib"
        console.log(Tenant3)
    }
    nlhroom4(){
        let Tenant4: string = "Asif"
        console.log(Tenant4)
    }
    nlhroom5(){
        let Tenant5: string = "Rohit"
        console.log(Tenant5)
    }   
}

// Execution
const nlhObj = new NarsiLondonHouse();
nlhObj.nlhroom1();
nlhObj.listAllRooms(); // Call the method containing the for loop