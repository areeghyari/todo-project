// console.log(" hi i'm inside js");
// var userName = prompt("What's your name ?");
// console.log(userName);

// var gender = prompt("please enter you'r gender (male or female):");
// console.log("male or female");
// if (gender == "female" || gender == "male") {
//     var age = prompt("please enter you'r age");
//     if (age > 1) {
//         var welcoming = confirm("do you want to skip the welcoming message ?")
//         if (welcoming == false && gender == "female") {
//             alert("Hello Ms " + userName);

//         } else if (welcoming == false && gender == "male") {
//             alert("Hello Mr " + userName);
//         } else { }

//     }
//     else {
//         alert(" please enter you'r correct age -_- ");
//     }


// }
// else {
//     var age = prompt("please enter you'r age");
//     if (age > 1) {
//         var welcoming = confirm("do you want to skip the welcoming message ?");
//         if (welcoming == false) {
//             alert("Hellow " + userName);
//         } else { }


//     } else {
//         alert(" please enter you'r correct age -_- ");
//     }
// }


var question1 = prompt("Are you graduated ? ");
question1 = question1.toLocaleLowerCase();

while (question1 != "yes" && question1 != "y" && question1 != "no" && question1 != "n") {
    console.log("invalid");
    question1 = prompt("Are you graduated ?  (yes/no) ")
    question1 = question1.toLocaleLowerCase();
}


var question2 = prompt("Do you have experience ?")
question2 = question2.toLocaleLowerCase();

while (question2 != "yes" && question2 != "y" && question2 != "no" && question2 != "n") {
    console.log("invalid");
    question2 = prompt(" Do you have experience ?  (yes/no) ")
    question2 = question2.toLocaleLowerCase();

}


var question3 = prompt("Do you hava a phone number ?")
question3 = question3.toLocaleLowerCase();


while (question3 != "yes" && question3 != "y" && question3 != "no" && question3 != "n") {
    console.log("invalid");
    question3 = prompt(" Do you hava a phone number ?  (yes/no) ");
    question3 = question3.toLocaleLowerCase();
}


var result = [question1, question2, question3];
console.log(result)


for (var i = 0; i < 3; i++)
    console.log(result[i]);



function userResult() {
    perfectResult = "The perfect answer is yes";
    console.log(perfectResult);
}
userResult();


