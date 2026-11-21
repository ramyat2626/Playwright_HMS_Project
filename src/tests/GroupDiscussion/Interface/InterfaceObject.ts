//Object
//Interface - to store structured data
//Interface - Interface name and with in it we declare the properties 
//to call the interface we declare a object and declare it as const as the data is fixed
//In Interface const employeone is called object
// type - if you want to create a custom type from declared interface
class NewObject{
    public typeNew(){
        interface employedetails {
            empId: number,
            empname: string,
            empsalary?: number,//optional property ?
            empcity: string,

        }
        const employeone: employedetails = {
            empId: 1234,
            empname: "abcd",
            empcity: "Hyderabad",

        }
         const employetwo : employedetails = {
            empId: 9876,
            empname: "xyz",
            empsalary: 60000,
            empcity: "Mumbai",
         }
        interface employedetails {
            empDep?: string

        }
       type employeIdCard = Pick<employedetails, "empId" | "empname">; 

        const employeoneIdCardpick : employeIdCard = {
            empId: 5678,
            empname: "playwright"

        }
        
        type employeIdCardOmit = Omit<employedetails, "empId" | "empname">; 

        const employeoneIdCardOmit : employeIdCardOmit = {
            empsalary: 60000,
            empcity: "Mumbai",         
        }
        
         type employeIdCardPartial = Partial<Pick<employedetails, "empId" | "empname" | "empsalary">>; 

        const employeoneIdCardPartial : employeIdCardPartial = {
            empId: 3456,
            empname: "typescript",
            empsalary: 20000

        }
            console.log(employeone)
            console.log(employetwo)
            console.log(employeoneIdCardpick)
            console.log(employeoneIdCardOmit)

        



     //   type employetwopick = Pick<employedetails, "empId" | "empname"> {
       //     const employetwo : employetwopick = {
     //       empId: 2345,
      //      empname: "mnop",
      //      empsalary: 50000,
       //     empcity: "Hyderabad",
       // }
       //     console.log(typeof employeone,typeof employetwo)

    
    }

}

const obj = new NewObject()
obj.typeNew()