/*
  Name:        Snow Ratio Predictor        
  Purpose:     It will take the given temperature and wind values and calculate the snow ratio.

  Author:      Kavya Seenuvasan
  Created:     31-Oct-2022
  Updated:     05-Nov-2022
*/

function snowRatio(temperature, wind) {
  let tempRatio = 0

  //if temperature or wind vals out of range
  if (temperature >= 110 || temperature <= -120 || wind >= 40 || wind < 0) {
    return "numbers out of range"
  }

  //finding the starting ratio based on temp val 
  if (temperature <= 10 && temperature >= 0) {
    tempRatio = 20
  } else if (temperature > 10 && temperature <= 20) {
    tempRatio = 15
  } else if ((temperature <= 25 && temperature > 20) || (temperature >= -10 && temperature < 0)) {
    tempRatio = 10
  } else if ((temperature > 25 && temperature <= 32) || temperature < -10) {
    tempRatio = 5
  } else if (temperature > 32) {
    tempRatio = 0
  } else { //not a number
    return "N/A"
  }

  //wind value decreases snow ratio
  if (tempRatio > (wind / 5)) {
    return Math.ceil(tempRatio - wind / 5)
  } else {
    return 0
  }
}

//example/test value
const ON = "14 8"
let ONsplit = ON.split(' ')
console.log("Mississauga, Ontario: " + ON)
console.log(snowRatio(ONsplit[0], ONsplit[1]) + ": 1")

//asking user input information
console.log("Enter ('temperature Fahrenheit' 'wind km/h')")
console.log("Seperate values using only a space")
let BC = prompt("Vancouver, BC: ")
let CA = prompt("LA, California: ")
let UK = prompt("London, UK: ")
let JP = prompt("Tokyo, Japan: ")
let AU = prompt("Sydney, Australia: ")

//separating and storing temp & wind vals in arrays
let BCsplit = BC.split(' ');
let CAsplit = CA.split(' ');
let UKsplit = UK.split(' ');
let JPsplit = JP.split(' ');
let AUsplit = AU.split(' ');

//creating 2D array for easy access to info
let cities = [BCsplit, CAsplit, UKsplit, JPsplit, AUsplit];
//declaring array to store snow ratio vals for each city
let ratiosToReport = [];

//loops through cities array to call the function on each of the split variables
for (i = 0; i < cities.length; i++) {
  //call function on user input infos and push returned value into array
  ratiosToReport.push(snowRatio(parseInt(cities[i][0]), parseInt(cities[i][1])))
  //print the snow ratios
  console.log((i + 1) + ") " + ratiosToReport[i] + ": 1")
}

//reporting a brief description on what the snow ratios mean
let counter = 0;
while (counter <= cities.length) {
  if (ratiosToReport[counter] <= 5 && ratiosToReport[counter] >= 0) {
    console.log((counter + 1) + ") A ratio of " + ratiosToReport[counter] + " inches of snow to 1 inch of liquid creates heavy snow that is sticky due to its high partial liquid content.")
  } else if (ratiosToReport[counter] <= 10 && ratiosToReport[counter] > 5) {
    console.log((counter + 1) + ") A ratio of " + ratiosToReport[counter] + " inches of snow to 1 inch of liquid produces a little heavy snow (perfect ratio of snow to water).")
  } else if (ratiosToReport[counter] <= 15 && ratiosToReport[counter] > 10) {
    console.log((counter + 1) + ") A ratio of " + ratiosToReport[counter] + " inches of snow to 1 inch of liquid offers some face shots and feels pretty light.")
  } else if (ratiosToReport[counter] <= 20 && ratiosToReport[counter] > 15) {
    console.log((counter + 1) + ") A ratio of " + ratiosToReport[counter] + " inches of snow to 1 inch of liquid (20-to-1) makes the snow incredibly light and dry.")
  }
  counter++
}

