//please write the concepts/keywords till now what we covered 

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

Arrays - const x:number[]= [1,2,3,4]
let varname: string []= ['1', '2','3', '1']
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


