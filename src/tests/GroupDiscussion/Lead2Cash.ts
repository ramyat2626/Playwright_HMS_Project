
//Lead to cash - 
//  Lead phone number (Let number array, global variable), 
// Lead status(let string array, Local variable) parameter careat 1 lead record, using for loop create multiple lead records,
// print only active lead records if condition 
/*
const LeadName : string [] = ["Sam", "Reanne", "Justin", "Mike", "Matt"]
const LeadNumber : number [] = [1234, 2345, 3456, 4567, 5678]

class leadtocash{
    public createLead(leadname:string, leadnumber:number, leadstatus:string): string{
       // let leadstatus: string [] = ["Active", "Inactive", "Active", "Active", "Active"]
       let lead = leadname+leadnumber+leadstatus
       return (lead)       
    }
    
}
const obj = new leadtocash()
let result: string = obj.createLead("Oliver", 98760, "Active")
console.log(result)
*/

let LeadName : string[] = ["Sam", "Reanne", "Justin", "Mike", "Matt"]
let LeadNumber : number[] = [1234, 2345, 3456, 4567, 5678]

class leadtocashloop{
 
    LeadStatus: string[]= ["Active", "Inactive", "Active", "Active", "Active"]

    public createLead(LeadName:string[], LeadNumber:number[], LeadStatus:string[]): string[]{ // Parameter - declaring the variable
              
        let LeadRecordCount : string[]=[]

       for(let LeadCount = 0; LeadCount<LeadNumber.length; LeadCount++){

        if(!LeadStatus[LeadCount].startsWith("Inactive")){       
       let LeadRecord = LeadName[LeadCount]+","+LeadNumber[LeadCount]+","+LeadStatus[LeadCount]
        let LeadRecord = LeadName[LeadCount]+","+LeadNumber[LeadCount]+","+LeadStatus[LeadCount]
       LeadRecordCount.push(LeadRecord)

            }   
       }
       return LeadRecordCount
       
    }
}
const newlead = new leadtocashloop()
let NewLeadRecord: string[] = newlead.createLead(LeadName, LeadNumber, newlead.LeadStatus) //Argument - Passing the values
console.log(NewLeadRecord)
