//please write the concepts/keywords till now what we covered 

Introducation to playwright
VS
Installation section 
VScode, Project creation, Git, Node js package, typescript installation, typescript compilier, playwright 

VSCode :Explorer, Editor, Console

Git commands: 
Working directory=>git status
Staging area => git add, git add.
Local Repository => gitcommt, gitpush, gitpull
Remote Repository => git status


Data dictionary 
Variable key words - let, const
Variable Types
Global variable - declared outside the class
static variable - Inside the class above the above the method declared with keyword static
instance variable - Inside the class above the above the method 
local variable - declared inside the method

Data Types - string, number, boolean, null, union, undefined, bigint, any

class classname {
    method/function methodname(){
        lines of code
        console.log()
    }
}
const objname = new classname()
objname.methodname()


Parameterisation and return type we give it in class, method/function, interface()
we declare the arguments in the run time

Control statements
Conditional Statements: 
If (){}
if else
if else if
nested if
switch 

Looping Statement :
(Initialise/condition,increment)
for loop for(let a=20; a<=30; a++){} 
while loop
Do while 
for if

break
continue
// single line comment
/* multiple line comment
*/


Collections : To manage structured data to do operations
few predefined methods: add(),get(),delete(), has(), join(), reduce(), insert(), sort(), update()
getter methods - .length, .size, 

Interfaces: to store structured data.we declare the properties inside the interface:
interface employedetails {
            empId: number,
            empname: string,
            empsalary?: number,//optional property ?
            empcity: string,
}

Array: declaration and initilization  
const abc : number [] = [21, 23, 25, 27,29]

Tupels: it can store various datatypes.
const t1: [number, string, Boolean]=[102030, "Testscript", true]

Set:set is the collection of unique values
const newset = new Set([10, 20, 10, 30, 20, 40, 20])

Map: A collection of key-value pairs. key can be any type.
const map2 = new Map<number, string>([[20, "praveen"], [30, "abc"]])

Exceptional Handling
to handel run time errors like syntax errors, type error, Refrence Error, Range error, Custom Errors
try catch, try catch finally, Throw - (NEED TO BE COVERED)
OOps concepts

Utils - 2 files
1 file for web appalication action we create playwright utils
1 file for time zone, units conversion, temperature convertion, date conversion, format changing we create typescript utils

Playwright framework
POM(Page object mordel)



Vs
Datatypes: string, number, boolean, null, union, undefined, bigint, any

let
const

conditional statement 
if(){}
if else
if else if
nested if
looping statement 
for loop (let i=1, i<=10, i++)
while loop 

Arrays - const x:number [1,2,3,4]
Tuple - const y: [String, number, boolean]=["abc", 123, true]
Set - const a : new Set<number>
    a:set[1,string]
    a:set[true, 2]
    a:set[1, true]
Map - const b: new Map<>
    b:set[1, 3]

Exceptions-syntax error, type error, refrence error, trycatch, trycatch finally, 

Oops concepts - inheritance, Polymor,

class ClassName{
   method methodName(){
    let x=1
    let y=2
    console.log(x,y)

   }

}
const.obj = new ClassName()
obj.methodName()

Parametrs and retrun type

import {Page, Locator} from @playwright/test

class SfdcLogin{
    private readonly loginpage: Page
    private readonly lbl_username: Locator
    private readonly lbl_password: Locator
    private readonly btn_login: Locator

    constructor(sflogin:string){
        this.loginpage = sflogin
        this.lbl_username = sflogin.locator(xpath)  
        this.lbl_password = sflogin.locator(xpath)
        this.btn_login = sflogin.getbyrole("button" {name = 'Login})
    
    }

    public asynnc fu_login(username:string, password:string){
     await this.lbl_username.fill(username)
     await this.btn_login.click()
     await this.lbl_password.fill(password)
     await this.btn_login.click()



    }

}


