// Assignment code here
/* Password requirements
 - length needs to be between 8-128 charatcer
 - choose uppercase letters
 - choose lowercase letter
 - choose numbers
 - choose special characters */

 //DOM elements
 const passwordEl = document.getElementById('password');
 const lengthEl = document.getElementById('length');
 const upperCaseEl = document.getElementById('uppercase');
 const lowerCaseEl = document.getElementById('lowercase');
 const numbersEl = document.getElementById('numbers');
 const specialsEl = document.getElementById('specials');
 const generateEl = document.getElementById('generate');


 // later on i'm going to call these functions randomly based on the object names
 const randomFunct = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecials
 };

// Add event listener to generate button
//  generateEl.addEventListener('click', () => {
//   const length = +lengthEl.value;
//   const hasUpper = upperCaseEl.checked;
//   const hasLower = lowerCaseEl.checked;
//   const hasNumber = numbersEl.checked;
//   const hasSpecial = specialsEl.checked;

//   passwordEl.innerText = generatePassword(
//     hasLower, hasUpper, hasNumber, hasSpecial, length);
//  });
 generateEl.addEventListener('click', function() {
  // get the val of all the form elments
  const length = parseInt(lengthEl.value);
  const hasUpper = upperCaseEl.checked;
  const hasLower = lowerCaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSpecial = specialsEl.checked;

  // call the gen password function and it should return a string that we add to the innerText of the text area
  passwordEl.innerText = generatePassword(
    hasLower, hasUpper, hasNumber, hasSpecial, length);
 });

 //generate password function
 // this function needs the values from the dom
 function generatePassword(lower, upper, number, special, length) {
  /* 1. Init pw var
     
     
     4. add final final pw to the pw var and return */  
     // start w/ an empty string
     let generatedPassword = '';

     // counting all the trues
     const typesCount = lower + upper + number + special;
     console.log('typesCount: ', typesCount);

     //2. filer out unchecked types
    /*[
      {
        lower: true
      },
      {
        upper: false
      },
      {
        number: true
      },
      {
        special: flase
      }
    ]

    [
      {
        lower: true
      },
      {
        number: true
      }
    ]*/

    //  const typesArr = [{lower}, {upper}, {number}, {special}].filter (
    //   item => Object.values(item)[0] // true
    //   );
    //  console.log('typesArr: ', typesArr);

    const arrOfObj = [{lower: lower}, {upper: upper}, {number: number}, {special: special}]
    // now get rid of anything false
    const typesArr = arrOfObj.filter(function(item) {
      // give me back anything with a valu of true
      // object.values turns an objec into an array of its values
      const isTrue = Object.values(item)[0]
      return isTrue;
    })

     if(typesCount === 0) {
      return '';
     }
     //3. Loop over length call generator function for each type
     for (let i=0; i < length; i += typesCount) {
      typesArr.forEach(type => {
        const functName = Object.keys(type)[0];
        console.log('functName: ', functName);

        randomFunct[functName]();
        generatedPassword += randomFunct[functName]();
      });
     }

     return generatedPassword;
 }

//specific for each requirement  (www.net-comber.com/charset.html)
//generate lowercase letter
 function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
 }

 //generate uppercase leter
 function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }
 
 //geneter random number
 function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }

  //generate random symbol
 function getRandomSpecials () {
  const specials = '!()@#$%^&*+=<>,.?';
  return specials[Math.floor(Math.random() * specials.length)];
 }


// //function to determine length
// var getPasswordLength = function () {
//   // Ask user for the number of characters they would like to use
//   var length = window.prompt("Select the number of characters you would like for your password. Select a character length between 8 and 128");
//   // convert answer to number
//   length = parseInt(length);

//   // if number is outside of range, inform them it needs to be within range
//   if (length < 8 || length > 128) {
//     window.alert("Your password needs to be between 8 and 128 characters long");
//     return getPasswordLength();
//   }

//   else {
//     window.alert("You entered " + length);
//     console.log(length);
//     getCharacters();
//   }
// };

//function to determine if user wants letters (if any)
// var getCharacters = function () {
  // Ask which type of characters they would like
  // var CharOption = window.prompt("Character types. Select one of the four optons. 1: Uppercase letters only. 2: Lowercase letter only. 3: Mix of lower and uppercase letters. 4: Do not used letters. ");

  // convert answer to number
//   CharOption = parseInt(CharOption);

//   switch (CharOption) {
//     case 1:
//       //upperOnly();
//       console.log("option 1");
//       break;
//     case 2:
//       //lowerOnly();
//       console.log("option 2");
//       break;
//     case 3:
//       //charMix();
//       console.log("option 3");
//       break;
//     case 4:
//       //noLetters();
//       console.log("option 4");
//       break;
//     default:
//       window.alert("You did not pick a valid option. Try again.");
//       // restart function again get user to pick a valid option
//       getCharacters();
//       break;
//   }
  
// };

//function to determine if users wants numbers




// var passwordReq = {
//   length: getPasswordLength(),
  // upperOnly: function {
  // 
// }


  // CharOption: getCharacters() 
  //upperOnly: function ()
  // characterNum: 1,2,3,4,5,6,7,8,9,
  // characterSpecial: "!()@#$%^&*",
  // characterUpper: "ABCDEFGHIJKLMNOPQRSTUVWXZY"
// };





// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);