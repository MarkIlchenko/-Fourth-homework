let userDate_of_Birth = prompt("Enter Date of Birth: ");
if (userDate_of_Birth) {
    alert("Your Date of Birth is: " + userDate_of_Birth)
} else if (userDate_of_Birth == null) {
    alert("It's a pity that you didn't want to enter your Date of Birth")
} else if (userDate_of_Birth == '') {
    alert("Empty")
} else {
    alert("It's a pity that you didn't want to enter your Date of Birth")
}

// if (userDate_of_Birth == '') {
//     alert("It's a pity that you didn't want to enter your Date of Birth")
// } else if (userDate_of_Birth == '') {
//     alert("Empty String");
// } else if (userDate_of_Birth == null) {
//     alert("It's a pity that you didn't want to enter your favourite kind of sport")
// } else {
//     alert("Your Date of Birth is: " + userDate_of_Birth)
// }



let userLocation = prompt("Write where do you live? ");

if (userLocation == "Riga" ) {
    alert("You live in capital, Riga is capital of Latvia");
} else if (userLocation == "Kyiv") {
    alert("You live in capital, Kyiv is capital of Ukraine");
} else if (userLocation == "London") {
    alert("You live in capital, London is capital of England and Uk");
} else if (userLocation == "Washington") {
    alert("You live in capital, Washington is capital of America");
} else if (userLocation == null) {
    alert("It's a pity that you didn't want to enter your City ");
} else if (userLocation == '') {
    alert("Empty String");
} else {
    alert("You live in city: " + userLocation);
}





// switch (userLocation) {
//     case "Riga":
//         alert("You live in capital, Riga is capital of Latvia");
//         break;
//     case "Kyiv":
//         alert("You live in capital, Kyiv is capital of Ukraine");
//         break;
//     case "London":
//         alert("You live in capital, London is capital of England and Uk");
//         break;
//     case "Washington":
//         alert("You live in capital, Washington is capital of America");
//         break;
//     case null:
//         alert("It's a pity that you didn't want to enter your City ");
//         break;
//     case '':
//         console.log('Empty String');
//         break;
//
//     default:
//         alert("You live in city: " + userLocation);
//         break;
// }


// let user

let userFavoriteSport = prompt("Write your favorite kind of sport? ");
if (userFavoriteSport == "Football") {
    alert("Cool! Do you want to become like Ronaldo?");
} else if (userFavoriteSport == "Basketball") {
    alert("Cool! Do you want to become like Jordan?")
} else if (userFavoriteSport == "Volleyball") {
    alert("Cool! Do you want to become like April Ross?")
} else if (userFavoriteSport == null) {
    alert("It's a pity that you didn't want to enter your favourite kind of sport")
} else if (userFavoriteSport == '') {
    alert("Empty String");
}



// switch (userFavoriteSport) {
//     case "Football":
//         alert("Cool! Do you want to become like Ronaldo?")
//         break;
//
//     case "Basketball":
//         alert("Cool! Do you want to become like Jordan?")
//         break;
//
//     case "Volleyball":
//         alert("Cool! Do you want to become like April Ross?")
//         break;
//
//     default:
//         alert("It's a pity that you didn't want to enter your favourite kind of sport")
//         break;
// }




// default:
// console.log('OK!')
// break;





let userInformation = ["Your Date of Births is: " + userDate_of_Birth,"    ","You live in: " + userLocation,"    ","Your favourite sport is: " + userFavoriteSport];
//
// // let userInformation = [userDate_of_Birth, userLocation,userFavoriteSport];
//
alert(userInformation)

