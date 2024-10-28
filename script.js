
// Mild Challenges 

/// The three siblings get their allowance once a week.
/// Their current obsession is buying unique card games and collecting shoes.
/// Below is the total money they split weekly, their names, and the price of
///     a card game and a pair of shoes.

let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;



// 1. If divided evenly, how much would each sibling get for the week?
let allowancePerSibling = weeklyAllowance / numberOfSiblinga; 
console.log("each sibling gets $" + allowancePerSibling + "per week."); 
// 2. How many games can Jordan buy with their cut?
let gamesJordancanBuy = Math.floor(allowancePerSibling/ gamePrice); 
console.log("jordan Can Buy"+ gamesJordanCanBuy + "games"); 
// 3. The cost of games just went up by a dollar and shoes are on sale at 50% (half) off. Change the variables to their new prices.
console.log("the new price of a game is $" + gamePrice + "and a shoe is $" +shoePrice + "."); 
// 4. Quinn and Ricardo are twins. If they put their money together, how many on sale shoes can they buy in a month (4 weeks)?
let combinedAllowance= allowancePerSibling * 2;
let shoesTheyCanBuy = Math.floor((combinedAllowance * 4)/shoePrice);
console.log("Quinn and Ricardo can buy" + shoesTheyCanBUy + "pairs of shoes together in a month"); 
// 5. How many more games can they buy if they put their money together compared to if they had bought games on their own?
console.log("they can buy" + extraGames + "more games they would have individually."); 
// 6. Print out the three siblings' names. "The three siblings are __, __, and ___."
console.log("The three siblings are " + sibling1 + " , " + sibling2 + " , and" + sibling3 + "."); 
// 7. Use console.log() and a built-in method to count how many characters are in Ricardo's name.
 console.log("ricardo".length);
// 8. Use console.log() and a built-in method to print out the string "RICARDO MONTOYA DE LA ROSA RAMIREZ"
console.log("ricardo montoya de la rosa ramirez".toUppercase()); 
// 9. Use console.log() and a built-in method to print out the string "ricardo montoya de la rosa ramirez"
console.log("RICARDO MONTOYA DE LA ROSE RAMIREZ".toUpperCase());
// 10. Use console.log() and a built-in method to print out Ricardo's name, but with all the instances of the letter a removed or deleted.
console.log(Ricardo.replace(/a/g,"));
// 11. Use console.log() and a built-in method to print out "De La Rosa"
console.log("De La Rosa"); 
// Medium Challenges

// 12. Rewrite these function as an arrow function.
const sum =(a,b) => {
    return a + b;
}; 
/// Then, call them with different inputs to check the result.

function getRandomNum() {
    return Math.floor(Math.random() * 100)-100;
}

function greeting(name) {
    return "Hello" + name + ", I'm glad you can make it!";
}

function perfectRoot(x) {
    let root = Math.sqrt(x);
    if (Math.floor(root) === root) {
        return root;
    } else {
        return "No perfect root"
    }
}


// 13. Fix/Finish the following functions.
/// Then, call them with at least 2 different inputs to ensure they work.
console.log(getRandomium());//output:-50
console.log(getRandomium());//output: 23


/// a. Adds 2 numbers and returns the sum
const addNums = (x, y) => {
    let sum = x + y;
}
// uncomment the line below, to call the function, and add one more function call
// console.log( addNums(4, 6) );
console.log(addNums(4,6)); 
console.log(addNums(7,8)); 

/// b. Prints a special message if name is "Beyonce"
const isBeyonce = (name) => {
    if( ) { 
        return "Welcome Queen!";
    } else {
        return `Sorry {name}, you're not Beyonce`;
    }
}
// Test "Beyonce" and other names to ensure it works
mock_sys.stdout=Mock()
print_two_names("beyonce", "kanye", file= mock_sys.stdout) 
self.assertEqual(mock_sys.stdout.getvalue(),"enter two names: Beyonce kanye") 


/// c. If the number is even, return the number divided by 2, otherwise, return the number
/// For example reduceEvens(10) => 5 -- reduceEvens(11) => 11
const reduceEvens = (x) => {
    if( ){

    } else {
        return x;
    }
}
//Write your own function calls
const reduceEvens= (x) => {
if(x % 2 === 0){
    return x/2; 
} else{
    return x;
} 
}; 
// 14. Write a function called shortenString(string) that returns the first 10 characters of a string if it is longer than 10
//remove all
const shortenString = (string) => {
if (string.length >10){
    return string.substring(0,10);
} else{ 
    return string;
}
}



// Spicy Challenges
let burger = 5.99;
let fries = 3.99;
let soda = 1.99;

// 15. Write a function buyBurgers(budget) that takes in a budget amount and returns the number of burgers that can be bought.
/// If no burgers can be bought, return "Sorry, no burgers for you."

def buyBurgers(budget): 
burger_price = 5.998
num_of_burger = budget/burger_price 
if budget <=0: 
return "sorry, no burgers for you" 
else: 
return int(num_of_burgers) 

// 16. A meal consists of 1 burger, 1 fry, and 1 soda.
/// Write a function called buyMeals(budget) that tells the user how many meals they can buy and how much money they will have left over.
/// Bonus: Round the answer to the nearest penny.
buyMeals(budget){ 
const mealCost =1.45; 
    const mealsCount = Math.floor(budget/mealCost); 
    const remainingBudget= budget % mealCost;
return 'you can buy ${mealsCount} meals and you will have $$ {remainingBudget.toFixed(2)} left.'; 
}

// 17. [Challenge] Write a function missingLeg(side1, side2) that takes in the length of a hypotenuse and a leg of a right triangle and prints out the missing leg's length
/// The larger side should be the hypotenuse  
def find_missing_leg(hypotenuse,given_leg); 
return math.sqrt(hypotenuse**2-given_leg**2)



// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
/// For example: factorial(3) = 3*2*1 = 6 ---  factorial(5) = 5*4*3*2*1 = 120
/// Write a function factorial(x) that finds the factorial of any integer.
def factorial(n); 
result = 1 
for i in range (1,n + 1): 
result * = i 
return result 
