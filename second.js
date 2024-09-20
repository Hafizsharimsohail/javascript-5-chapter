// chapter one
alert("Welcome to js land... <br > happy coding!");
// The chapter two
// Q:1
let username;
// Q:2
let myname = "Micheal jackson";
// Q:3
let message;
message = "Pizza\nPizz\nPiz\nPi\np";
alert(message);
// Q:4
let studentName = "John Doe";
let studentAge = 25;
let studentCity = "New York";

alert("Student Name: " + studentName);
alert("Student Age: " + studentAge);
alert("Student City: " + studentCity);
// Q:5
let greeting = "Welcome to our website!";
alert(greeting);
// Q:6
let email = "shareemk405@gmail.com";
let message1 = "Your email address is: " + email;
alert(message1);
// Q:7
let book = "A smarter way to learn JavaScript";
let message2 = "The book title is: " + book;
alert(message2);
// Q:8
let message3 = "Hello, World!";
document.write(message3);
// Q:9
let specialChars = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(specialChars);
//     The chapter two is end...............
//     The chapter three is start...............
// Q:1
let age = 25; 
alert("Your age is " + age);
// Q:2
//   Sir i don't understand  Q:2
// Q:3
let birthYear = 1999; 
document.write("<br />" +"My birth year is " + birthYear + ".<br>");
document.write("Data type of my declared variable is " + typeof(birthYear));
//      The chapter three is end...........
//      The chapter Four is start..........
//  Chapter four has only one question........
//  Q:1
let var1, var2, var3;
 // Legal variable names
 let firstName;
 let $dollarSign;
 let _underscore;
 let camelCaseVariable;
 let myVariable123;
  // Illegal variable names (commented because of errors)
        // let 1stVariable;        // Illegal: Cannot start with a number
        // let var-name;           // Illegal: Hyphens are not allowed
        // let let;                // Illegal: Reserved keyword
        // let my variable;        // Illegal: No spaces allowed
        // let @symbol;            // Illegal: Special symbols (except $ and _) are not allowed

     {
            document.write("<h1>Rules for naming JS variables</h1>");

            // b) Rules for variable names
            document.write("Variable names can only contain letters, numbers, $ and _.<br>");
            //Example of b
            document.write("For example: $my_1stVariable<br><br>");

            // c) Starting characters for variables
            document.write("Variables must begin with a letter, $ or _.<br>");
            //Example of c
            document.write("For example: $name, _name, or name<br><br>");

            // d) Case sensitivity of variable names
            document.write("Variable names are case sensitive.<br><br>");

            // e) Variables should not be JS keywords
            document.write("Variable names should not be JavaScript keywords.");
        }
//           The chapter four is end..........
//           The chapter five is started........
{
// Q:1
    let num1 = 5; 
    let num2 = 10; 

    // Add the two numbers
    let sum = num1 + num2;

    // Display the result in the browser
    document.write("<br />"+ "The sum of " + num1 + " and " + num2 + " is: " + sum + ".<br>");
    
}
 {
    // Two numbers
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    //  basic math operations
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;
    let modulus = num1 % num2;

    // Display results in the browser
    document.write("<h2>Results:</h2>");
    document.write("Subtraction: " + num1 + " - " + num2 + " = " + subtraction + "<br>");
    document.write("Multiplication: " + num1 + " * " + num2 + " = " + multiplication + "<br>");
    document.write("Division: " + num1 + " / " + num2 + " = " + division + "<br>");
    document.write("Modulus: " + num1 + " % " + num2 + " = " + modulus + "<br>");
     {
        // a) Declare a variable
        let myVar;

        // b) Show the value after declaration
        document.write("Value after variable declaration is: " + myVar + "<br>");

        // c) Initialize the variable with some number (5)
        myVar = 5;
        document.write("Initial value: " + myVar + "<br>");

        // e) Increment the variable
        myVar++;
        document.write("Value after increment is: " + myVar + "<br>");

        // g) Add 7 to the variable
        myVar += 7;
        document.write("Value after addition is: " + myVar + "<br>");

        // i) Decrement the variable
        myVar--;
        document.write("Value after decrement is: " + myVar + "<br>");

        // k) Show the remainder after dividing by 3
        let remainder = myVar % 3;
        document.write("The remainder is: " + remainder + "<br>");
    }
}

// Q:1
let ticketPrice = 600; 
let numberOfTickets = 5;
let totalCost = ticketPrice * numberOfTickets;
document.write("Total cost to buy 5 tickets to a movie is"+ totalCost);

let number = 4;
document.write( "<br />" + "<br />" +number + "x" +  "1" + "=" + number * 1  ) 
document.write( "<br />" + number + "x" +  "2" + "=" + number * 2  ) 
document.write( "<br />" + number + "x" +  "3" + "=" + number * 3  ) 
document.write( "<br />" + number + "x" +  "4" + "=" + number * 4  ) 
document.write( "<br />" + number + "x" +  "5" + "=" + number * 5  ) 
document.write( "<br />" + number + "x" +  "6" + "=" + number * 6  ) 
document.write( "<br />" + number + "x" +  "7" + "=" + number * 7  ) 
document.write( "<br />" + number + "x" +  "8" + "=" + number * 8  ) 
document.write( "<br />" + number + "x" +  "9" + "=" + number * 9  ) 
document.write( "<br />" + number + "x" +  "10" + "=" + number * 10  ) 