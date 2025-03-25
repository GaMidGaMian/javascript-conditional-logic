//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

lightBulbStatus === "On" 
? (console.log("Light bulb is on"))
: lightBulbStatus === "Off" 
? (console.log("Light bulb is off"))
: lightBulbStatus === "Broken" 
? (console.log("Light bulb is broken"))
: (console.log('Please choose the correct input (On/Off/Broken)'))

console.log(lightBulbStatus)