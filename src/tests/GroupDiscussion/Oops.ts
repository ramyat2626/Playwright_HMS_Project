//Oops Concepts

// Assume 5 SF pages: Lead, Account, Contact, Opportunity, Quote - create 5 classes
// for Lead class create "createLead" method and "leadName" variable
// Account page - 1 method ( create ) with 2 variables (ID and Name) and pass values in run time.
// contact page - 1 methods (create,) with mixed array and set Data types (ID and Name) & inherit Account page
// opportunity page - 1 methods (Create), inherit contact page and variable (ID, Name & Status) using Tuple
// Quote page - 1 method (Create), inherit all pages, variable (ID, Amount, status: Pass/Fail), using Inheritance

/*
class Lead{
    public createLead(){
        let LeadName: string = "Sam" 
        let LeadContact: number = 98765
        console.log("Leadname:", LeadName, "LeadContact", LeadContact)       
    }
}
const Lobj = new Lead()
Lobj.createLead()

console.log("=======Account===========")

class Account{
    public createAccount<D>(Accountname:string, AccountId:number): string {
        let NewAccount = Accountname+AccountId
        return (NewAccount)               
    }
}
const Aobj = new Account()
console.log(Aobj.createAccount("Mike",1234))

console.log("=======Inheritance===========")

class Account1{
    public createAccount1(Accountname1:string, AccountId1:number): string {
        let NewAccount1 = Accountname1+AccountId1
        return (NewAccount1)               
    }
}

class Contact extends Account1{
    public createContact(){
       const contactName : string [] = ["Sam", "Justin", "Mike"]
       const contactId : number [] = [123, 234, 345]
           // console.log("Contact:",contactName,"ContId:",contactId)
        const contactrecord: string []=[]
        for(let contactcount = 0; contactcount<contactName.length; contactcount++){
            let contactnewrecord = contactName[contactcount]+","+contactId[contactcount]
           contactrecord.push(contactnewrecord)
           
        }
        console.log(contactrecord)
     // return contactrecord
    }
}
const Cobj = new Contact()
Cobj.createContact()
console.log(Aobj.createAccount("Javan", 987))

console.log("======Multi-Inheritance===========")

class Account2{
    public createAccount2() {
        let NewAccount2 = new Set([1212,1213,1214,1212])
        console.log(NewAccount2)
                       
    }
}

class Contact1 extends Account2{
    public createContact1(){
       const contactName1 : string [] = ["Sam", "Justin", "Mike",]
       const contactId1 : number [] = [123, 234, 345]
            console.log("Contact:",contactName1,"ContId:",contactId1)
    }
}

class Opportunity extends Contact1{
    public createOpp(){
        const Opp1: [string, number, string]=["Sarah", 6789, "New"]
        console.log(Opp1)      
    }
}
const Oobj = new Opportunity()
Oobj.createOpp()
Oobj.createAccount2()
Oobj.createContact1()


class Quote{
    public createQuote(){
       
    }
}

*/

interface NewAccount {
    AccountName
    AccountId
    Accountstatus
    Account

}


class Account{
    public createAccount(){
        let acountname1 = "Sam"
    }
    private deleteAccount(){
        let accountname2 = "Mike"
    }
    protected UpdateAccount(){
        let accountname3 = "Oliver" 
    }
}
const Aobj = new Account()
Aobj.createAccount()

class Contact extends Account{
    public createContact(){
        let contactname = "Justin"
this.UpdateAccount
this.createAccount
        
    }
    private deleteContact(){
        let deleteContact = "Matt"
    }
    protected updateContact(){
        let updateContact = "Javan"
    }
}





