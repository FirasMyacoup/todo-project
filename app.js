function welcomeName(name){
    console.log("welcome " +name)

}

var username= prompt("what is your name");
welcomeName(username)

var Gender = prompt("what is you gender?");
if(Gender=== "male" || Gender=== "female"){
console.log( Gender)
}
else {
    console.log("the gender you entered is wrong please try again by reloading the page")
}



var age = prompt("how old are you?");
if(age>0){
console.log( "you are "+age+" years old");
}
else {
    console.log("you entered an invalid age");
}

var useranswer= confirm("do you want to see the welocoming message");
console.log(useranswer);
if(useranswer== true){
    if(Gender==="male"){
alert("welcome to the webpage mr "+username);  }

else if ( Gender==="female"){
    alert("welcome to the webpage mrs " + username);
}


}












