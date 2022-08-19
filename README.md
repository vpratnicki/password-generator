# Password Generator

# Table of Contents

* [Project Description](#project-description)
* [Project Outcome/Process](#project-outcomeprocess)
* [Built with](#built-with)
* [Website](#website)
* [Credit](#credits)

## Project Description

For this project I was tasked with using JavaScript to create a password generator that will generate a random password based on criteria the user selects. These are:

- Length 
- Character types
 - Lowercase letters,
 - Uppercase letter,
 - Numbers, and/or
 - Special characters

## Project Outcome/Process

As part of the pseudo coding step, I determined I wanted to prompt the user of these requirements by adding them directly on the HTML doc, within the form. As long as one of the character criteria is choose, the password will be dynamically created in the generate password field. 

Next, I created the individual functions that would randomly generate characters for each of the criteria:

![Screenshot 1](/assets/images/screenshot1.png)

Next, I used .getElementsById to identify which of the DOM elements are needed and created a function called randomFunct, that serves as a dictionary of the individual functions that generate each random characters. I then needed to add the .addEventListener to each of the DOM element to the generate button and created a function to give values to each of the form elements. 

![Screenshot 2](/assets/images/screenshot2.png)

Next I called the function that will generate the password function and t=told it to return a string that will be added to the innerText of the text area.

![Screenshot 3](/assets/images/screenshot3.png)

And then I put it all together by creating the generatePassword function! 

![Screenshot 4](/assets/images/screenshot4.png)
![Screenshot 5](/assets/images/screenshot5.png)


## Built With
* HTML
* CSS
* JavaScript

## Website
To view portfolio open:
[Password Generator](https://vpratnicki.github.io/password-generator/)

## Credits

To help me with this project I followed a great YouTube tutorial by Traversy Media: [https://youtu.be/duNmhKgtcsI](https://youtu.be/duNmhKgtcsI) I used this tutorial as a strating point and applied some of the technicques I leared to my code. 