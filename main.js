let userDate_of_Birth = parseInt(prompt("Enter Date of Birth: "));
if (userDate_of_Birth) {
    alert("Your Date of Birth is: " + userDate_of_Birth)
} else {
    alert("It's a pity that you didn't want to enter your Date of Birth")
}


let userLocation = prompt("Write where do you live? ");
switch (userLocation) {
    case "Riga":
        alert("You live in capital, Riga is capital of Latvia");
        break;
    case "Kyiv":
        alert("You live in capital, Kyiv is capital of Ukraine");
        break;
    case "London":
        alert("You live in capital, London is capital of England and Uk");
        break;
    case "Washington":
        alert("You live in capital, Washington is capital of America");
        break;
    case null:
        alert("It's a pity that you didn't want to enter your City ");
        break;
    default:
        alert("You live in city: " + userLocation);
        break;
}
// let user

let userFavoriteSport = prompt("Write your favorite kind of sport? ");
switch (userFavoriteSport) {
    case "Football":
        alert("Cool! Do you want to become like Ronaldo?")
        break;

    case "Basketball":
        alert("Cool! Do you want to become like Jordan?")
        break;

    case "Volleyball":
        alert("Cool! Do you want to become like April Ross?")
        break;

    default:
        alert("It's a pity that you didn't want to enter your favourite kind of sport")
        break;
}

let userInformation = ["Your Date of Births is: " + userDate_of_Birth,"    ","You live in: " + userLocationTwo,"    ","Your favourite sport is: " + userFavoriteSport]

alert(userInformation)

