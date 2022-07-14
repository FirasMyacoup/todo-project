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

var useranswer= confirm("do you want to see the welcoming message");
console.log(useranswer);
if(useranswer== true){
    if(Gender ==="male"){
alert("welcome to the webpage mr "+username);  }

else if ( Gender ==="female"){
    alert("welcome to the webpage mrs " + username);
}

}
//question 1
var q1= prompt("do you love js?");
if (q1==="yes"){
    console.log("me too, welcome to the gang");
}
    else if( q1==="no")
    {
        console.log("too bad.bye");

    }
    else{
        console.log("invalid value");
    }
//question 2
    var q2= prompt("do you like football");
if (q2==="yes"){
    console.log("great");
}
    else if( q2==="no")
    {
        console.log("too bad, you are messing out");

    }
    else{
        console.log("invalid");
    }

    //question 3
    var q3= prompt("are you a fan of music");

if (q3==="yes"){
    console.log("we love music too");
}
    else if( q3==="no")
    {
        console.log("no worries some people don't love music");

    }
    else{
        console.log("invalid");
    }



















