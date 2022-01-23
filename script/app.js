console.log(" hi i'm inside js");
var userName = prompt("What's your name ?");
console.log(userName);

var gender = prompt("please enter you'r gender (male or female):");
console.log("male or female");
if (gender == "female" || gender == "male") {
    var age = prompt("please enter you'r age");
    if (age > 1) {
        var welcoming = confirm("do you want to skip the welcoming message ?")
        if (welcoming == false && gender == "female") {
            alert("Hello Ms " + userName);

        } else if (welcoming == false && gender == "male") {
            alert("Hello Mr " + userName);
        } else { }

    }
    else {
        alert(" please enter you'r correct age -_- ");
    }


}
else {
    var age = prompt("please enter you'r age");
    if (age > 1) {
        var welcoming = confirm("do you want to skip the welcoming message ?");
        if (welcoming == false) {
            alert("Hellow " + userName);
        } else { }


    } else {
        alert(" please enter you'r correct age -_- ");
    }
}
