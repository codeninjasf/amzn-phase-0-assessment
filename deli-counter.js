// 1. Write your functions here
const katzDeli = [];

function line(katzDeli){
  if (katzDeli.length === 0){
    console.log("The line is currently empty");
  } else {
    let orderNum = ""
    for (let i = 0; i <katzDeli.length; i++){
      orderNum += `${i + 1}. ${katzDeli[i]} `
    }
    console.log(`The line is currently: ${orderNum}`);
    }
  }


// takeANumber function, uses push() method to add new customerName end of array, then use template literals with interpolation message.


function takeANumber(customers, customerName){
    katzDeli.push(customerName);
  console.log(`Welcome, ${customerName}, You are number ${customers.length} in line.`)
}



// nowServing function, serves next customer in line. we use shift method to remove first item from  katzDeli array. If no customers in line, we output a message.

function nowServing(customers){
  if (customers.length === 0){
    console.log("There is nobody waiting to be served!");
  } else {
    console.log(`Currently serving ${customers.shift()}`)
  }
}





// 2. Example Usage

// const katzDeli = []

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"