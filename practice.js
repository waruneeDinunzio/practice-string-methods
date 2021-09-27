/*
  ========== INSTRUCTIONS ==========
  1.) Look up each method
  2.) Follow the instructions for each
  3.) Console log your results
*/

// ===== concat =====
// Create variables and assign string values. Concatenate the variables.
const stringOne = "what's up,"
const name = " Teo"
console.log(stringOne.concat(name))

// ===== charAt =====
// Access the letter "z" in the string.

const teoIsPettyForThisLongString = "1bd73912&(M17z&^71349H^123"
const searchz = teoIsPettyForThisLongString.search('z')
const accessz = teoIsPettyForThisLongString.charAt(searchz)
console.log(accessz)

// ===== endsWith =====
// Create a variable with a string value. Write two console logs to return true and false
const string1 = "this is string1"
const string2 = "this is string2"
console.log(string1.endsWith("string1"))
console.log(string2.endsWith("string1"))

// ===== fromCharCode =====
// Using this method, spell out DOTTIE in the console.
const text = String.fromCharCode(68,79,84,84,73,69)
console.log(text)

// ===== includes =====
// Create a ternary operator to check if Lorreno is in the class
const sentence = 'Today is Thursday. We are doing some JavaScript string methods practice. I see some people in Zoom: Zamira, Titus, Jonel, Erhuvwu, Warunee, Lorreno, Brandon, and Jeff Jobs.'

// expected output: "Lorreno (is or is not) in the class"
let checkForLarreno = (sentence.includes('Lorreno')? true:false)
console.log(checkForLarreno)

// Create your own sentence and check for any word you want using includes()
let checkForMe = (sentence.includes('Warunee')? true:false)
console.log(checkForMe)

// ===== indexOf =====
// Where is Waldo...I meant Jeff, Ramsey, Dom, and Jon.
const forgetWaldo = "Hi I'm a Dom paragraph. Teo can't think of anything creative because he is running on dangerous Jeff levels of coffee. He is currently looking at this paragraph and realized he should've just used Lorem Ipsum Jon. Then he realized he wrote a whole Ramsey paragraph without using anyone's name so he just decided to randomly plug in everyone's name in the paragraph. :')"
const Jeff = forgetWaldo.indexOf('Jeff')
const Ramsey = forgetWaldo.indexOf('Ramsey')
const Dom = forgetWaldo.indexOf('Dom')
const Jon = forgetWaldo.indexOf('Jon')
console.log(Jeff,Ramsey,Dom,Jon)

// ===== lastIndexOf =====
// Apparently, JavaScript wants to make my life super extra so we can use this method to find the...last...index...of...
// Check to see which word is repeated and find the last index of that...

const findTheEvilTwin = "cat mouse helpme pig rooster dog iswearthenextwordisnottheeviltwin dog butterfly bird"
const findRepeatWord = str => {
  const strArr = str.split(" ")
  const result = [];
  for(let i = 0; i < str.length; i++) {
    if(strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])) {
      if(!result.includes(strArr[i])) {
        result.push(strArr[i])
      }
    }
  }
  return result.join(" ")
}
const lastIndex = findTheEvilTwin.lastIndexOf(findRepeatWord(findTheEvilTwin))
console.log(lastIndex)

// ===== length =====
// if y'all ask me for help about this one, we're going to have a serious talk...
// create a string with the length of 30...please make a sentence and not repeat a letter...30 times
const string30 = "What's up Teo! I love this exe"
console.log(string30.length)
// Create a variable with a string value. Make any sentence you want about your love for Manara and INTERPOLATE that sentence with the variable you created. Then find the length. (The longer the length the more love you have for Manara. Max 50! I'm not trying to scroll until next month.)
const loveManara = "Teo make me do this Menara!"

// ===== replace =====
// If only it was this easy to replace your ex...jk

// Create a variable called sorryNotSorry, replacing Redux with you know what...
const sorryAva = "Redux is easier!"
const sorryNotSorry = "Super confusing!!"
const reduxIs = "Redux id " + sorryNotSorry
console.log(reduxIs)

// Create a variable called teoWillNotMakeItOnFriday, replacing love with kill :')
const teoIsSweating = "Ava is going to love Teo."
const teoWillNotMakeItOnFriday = teoIsSweating.replace("love","kill")
console.log(teoWillNotMakeItOnFriday)


// ===== slice =====
// The never ending cake...get the analogy?
// Create a variable and using slice() extract "Vegeta is the best"
// Console.log that variable and console.log letsBeReal underneath it...what do you see...never ending cake

const letsBeReal = "Goku is awesome. Gohan is sweet. Trunks is dope too. Let's be real though, Vegeta is the best"

// Create your own sentence with your favorite anime/tv show/movie line and extract a portion of it


// ===== split =====
// Separate the sentence by word
let bananaSplit = "I am not going to split my banana split."

// Separate the setence by characters
let sixFeetAway = "Per CDC Guidelines, we have to keep six feet away from each other."

// ===== startsWith =====
// Kay Jewelers: Every kiss begins with Kay

// Create four sentences where two returns true and the other two returns false


// ===== substring =====
// on the chopping block...

// Returns "ell"
let basicGreeting = "Hello World"

// Returns "JavaScript"
let ohReally = "JavaScript Substring"

// Using substring and indexOf...extract the domain from the email
// Returns "aol.com"
let aslDays = "xXteoWuzHereXx@aol.com"

// ===== toLowerCase =====
// Create a sentence using Pascal.

// When would you use toLowerCase()? Write in comments below

// ===== toUpperCase =====
// Create a sentence in all lower case and use this method.

// When would you use this method? Write in comments below

// ===== toString =====
// Create a variable with an integer use this method

// Can you think of when this would be useful in your code? Write in comment below

// ===== trim =====
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on the both sides.

// ===== valueOf =====
// ...I have no words for this. :)
// create a variable with a value of a new String Object using "new"
// console.log the data type of the variable using "typeof"
// then in a new line create a new console.log using valueOf
