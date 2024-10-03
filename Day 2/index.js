// string
// number
//boolrean
//undefined
// difference between var let and const
//   va              var            let            const  
//reassign        true            true            false
// redeclare      true           false            false
// scope      globale/fuction    block scope    block scope
// hoisting     true             false          false
//let variable

let myage=21;
console.log( myage)
myage=22;
console.log(myage)

const myname=1;
console.log(myname)
myage=2;
console.log(myage)


    

{

    var mynumber=10;
console.log(mynumber)

}
    console.log(mynumber)


   { let mynumber=30;
    console.log(mynumber)
    
      {
        console.log (mynumber)
      }
   }
   {
    let mynumber=55;
    console.log(mynumber)
    {
        console.log(mynumber)

        mynumber=56;
        console.log(mynumber)

    }

   }



  //  // hoistring
  //  var mynumber;
  //  mynumber=105;
  //  console.log(mynumber)

  //  var mynumber;
  //  console.log(mynumber,typeof(mynumber) )

   var number1=30;
   var number2=31;
   if(number1 > number2) {
    console.log("number1 is greater than.")

   }   else if( number1== number2) {
    console.log("number1 is equal to number2.")
   }
    