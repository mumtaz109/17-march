// Fundamentals
// 1. Variables

    // Permitive Data Types
    // String
    let userName:string = "Mumtaz";

    // Number
    let userAge:number = 19;

    // Boolean
    let isMarried: Boolean = false;

    // Null
    let abc: null =null;

    // Undefined
    let lastName;


    // Template Literals - 
        // A new and fast way to deal with string is Template Literals and Template String.

        // How we deal before with strings before?
        let myName = "Mumtaz";
        let hello = "Hello"+ myName;
        console.log(hello); // Hello Mumtaz 
        // Print A var value + B var value called Cancadination

        //Template Literals use in Var
        let templateLiterals: string = `Hello I am from Panaverse, My name is ${myName}`
        console.log(templateLiterals); // Hello I am from Panaverse, My name is Mumtaz

        //Template Literals use in Console
        console.log(`Hello, I am panaverse, My name is ${myName}`); // Hello, I am panaverse, My name is Mumtaz


        // Typeof - Use to know type of a variable
        console.log(typeof  templateLiterals); //String


// 2. Operators
    
    // 1. Arithmetric Operators

        // 1. Addition
        //    Example :
        let n1 = 1;
        let n2 = 2;
        console.log(n1+n2); // 3

        let str1 = "1";
        let str2 = "2";
        console.log(str1 + str2); // 

        // 2. Substraction
        //    Example :
        let sub1 = 5;
        let sub2 = 2;
        console.log(sub1-sub2); // 3

        // 3. Multiplication
        //    Example :
        let mul1 = 5;
        let mul2 = 2;
        console.log(mul1*mul2); // 10

        // 4. Devision
        //    Example :
        let div1 = 4;
        let div2 = 2;
        console.log(div1/div2); // 2

        // 5. Exponentional
        //    Example :
        let exp1 = 2;
        let exp2 = 2;
        console.log(exp1**exp2); // 4 I donot know 

        // 6. Modulus
        //    Example :
        let mod1 = 40;
        let mod2 = 3;
        console.log(mod1%mod2); // 2


    // 2. Assignment Operators
    // Assignment Operators are used to assigning values to variables.
    // Example;
        let n=5;
        console.log(n); //5 
        n+=5;
        console.log(n); // 10
        n-=5;
        console.log(n); // 5
    
    // 3. Comparison Operators
    // Comparison Operators are used to assigning values to variables.
    // Example;
        // let n = 5;
        console.log(n == 5 ); // true
        console.log(n === 5); // true - Help
        console.log(n != 5); // false 
        console.log(n > 8); // false
        console.log(n < 8); // true
        console.log(n >= 8); // false
        console.log(n <= 8); // true

    // 4. Logical Operators
    // Logical Operators are used to combine multiple conditions  in one.

        //and gate &&
        // T T T
        // F T F
        // T F F
        // Example;
        // let n = 5;
        console.log(n >= 5 && n < 10); // True
        console.log(n > 5 && n < 10); // False

        //Or gate ||
        // T T T
        // T F T 
        // F T T
        // F F F
    console.log(n >= 5 || n < 10); // True
    console.log(n > 5 || n < 10); // True

        //Not gate ! 
        // T Connvert F
        // F Convert T
    console.log(!(n < 10)); // False
    console.log(!(n > 10)); // True


// 3. Condition
    // If, Else , Else If Statement 
    // Use if to specify a block of code to be exected, if a specified condition is true.
    // Use else, to specify a block of code to be executed , if the same condition is false.
    // Use else if to specify a new condition to test, if the first condition is false.
    
    // if else
    // Example;
    // let n = 5;
    n = 5;
    if (n == 5){
        console.log("if condition");
    } else {
        console.log("else part");
    } // if condition

    // else
    // Example;
    if (n == 7) {
        console.log("if condition")
    } else {
        console.log("else part");
    } // else part

    // If else condition
    // Example;
    if (n == 7) {
        console.log("if condition")
    } else if (n < 5){
        console.log("else if condition") // (n = 5) //  else if condition will execute
    } else {
        console.log("else condition")
    } // else condition

    // Nested Condition
    // Example;
    let grade = "string"
    let marks = 50;
    if (marks >= 50)

        if (n >= 90) { 
            console.log("A+") // A=
        } else {}
        if (n >= 80) {
            console.log("B") // B
            } else { }
        if (n >= 70) {
            console.log("C") // C
        } else {
    }


    // nOW WE HAVE TO LEARN TODAY ARRAYS, FUNCTIONS, AND ONE OR TW THINGS MORE.
    // AFTER I HAVE TO SUBMIT TWO ASSIMENTS ONE IS MISSIG AND ONE IS M  
    




//hello world to mumtaz bhai