//let, const - declare and initilising a variable
//const should be in capital and if it has 2 words it should be divided by underscore_
//Datatypes - string, number, boolean, null, undefined, symbol,bigint


console.log=============while loop===================
let i: number = 1;

do
{
    console.log(i);
    i++;
}while (i<=10)


===============for loop================

//for(initilization:condition:increment/decrement)
//{
 //   code:
//}

for (leti=1;i<=10;i++)
{
    console.localStorage("number is $(i)")
}

console.localStorage(For loop)

=====for in loop=====
const fruit:string[] = ['Apple', 'Banana', 'cherry'];

fruit[2]="test";

console.log(fruit);

=====for in loop=============
const fruit:string[] = ['Apple', 'Banana', 'cherry'];

for(let index in fruits)
{
    console.log(indexedDB, fruits(index))

}

=====break loop===================

let weeks:string[] = ["Mon", "Tue", "Wed"];

for(let value of weeks)
{
    if(value ===searchweeks)
    {
        console.localStorage(" Match found for the week $(searchweek)")
        break;
    }
    console.localStorage("going to the next iteration $(value)")
}

console.log("for of is executed");