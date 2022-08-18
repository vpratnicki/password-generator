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


 // later on I'm going to call these functions randomly based on the object names
 const randomFunct = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecials
 };

// Add event listener to generate button
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

 //GENERATE PASSWORD FUNCTION
 // this function needs the values from the dom
 function generatePassword(lower, upper, number, special, length) {
  // 1. Init password var

     // start w/ an empty string
     let generatedPassword = '';

     // counting all the TRUES
     const typesCount = lower + upper + number + special;
     console.log('typesCount: ', typesCount);

     //2. filer out unchecked types

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
     //3. Loop over length (selected by user) call generator function for each type
     for (let i=0; i < length; i += typesCount) {
      typesArr.forEach(type => {
        const functName = Object.keys(type)[0];
        console.log('functName: ', functName);
        //4. add final final pw to the pw var and return */  

        randomFunct[functName]();
        generatedPassword += randomFunct[functName]();
      });
     }

     return generatedPassword;
 }

//specific functions for each requirement  (resource: www.net-comber.com/charset.html)
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
