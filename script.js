document.getElementById("concatenation").onclick = function () {
    let firstName = "Muhammad ";
    let secondName = "Abdul Wadood ";
    let lastName = "Afzal";
    let con = firstName + secondName + lastName;

    document.getElementById("statementSection").innerHTML = `First Name = ${firstName} <br> Second Name = ${secondName} <br> Last Name = ${lastName} <br> Result = ${con}`
    document.getElementById("outputSection").innerHTML = con;
}

document.getElementById("askName").onclick = function () {
    let firstName = prompt("Enter the First Name")
    let secondName = prompt("Enter the First Name")
    let fullName = firstName + " " + secondName
    document.getElementById("statementSection").innerHTML = `First Name = ${firstName} <br> Second Name = ${secondName} <br> Result = ${fullName}`
    document.getElementById("outputSection").innerHTML = fullName;

}
document.getElementById("comparison").onclick = function () {
    let num1 = +prompt("Enter First Number");
    let num2 = +prompt("Enter Second Number");
    if (num1 == num2) {
        document.getElementById("statementSection").innerHTML = `First Number = ${num1} <br> Second Number = ${num2}`
        document.getElementById("outputSection").innerText = "Condition is True";

    } else {
        document.getElementById("statementSection").innerHTML = `First Number = ${num1} <br> Second Number = ${num2}`;
        document.getElementById("outputSection").innerText = "Condition is False";

    }

}

document.getElementById("ifElse").onclick = function () {
    let marks = +prompt("Enter obtained  Marks")
    let grade;
    if (marks > 100) {
        document.getElementById("outputSection").innerText = "Obtained Marks should be less than 100";
        document.getElementById("statementSection").innerHTML = `You entered ${marks} marks`;

        return;

    }

    else if (marks >= 90) {
        grade = "A+"
    }
    else if (marks >= 80) {
        grade = "A"
    }
    else if (marks >= 70) {
        grade = "B"
    }
    else if (marks >= 60) {
        grade = "C"
    }
    else if (marks >= 50) {
        grade = "D"
    }


    else {
        grade = "Fail"

    }
    document.getElementById("statementSection").innerHTML = `You entered ${marks} marks`;

    document.getElementById("outputSection").innerText = "You got" + " " + grade;

}


document.getElementById("testingSets").onclick = function () {
    let age = +prompt("Please Enter your Age")
    let weight = +prompt("Please Enter your Weight");

    if (age >= 18 && weight <= 60) {
        document.getElementById("statementSection").innerHTML = `Your Age is ${age} <br> Your Weight is ${weight}`;
        document.getElementById("outputSection").innerText = "You are smart Guy";
    }
    else if (age > 18 && weight > 60) {
        document.getElementById("statementSection").innerHTML = `Your Age is ${age} <br> Your Weight is ${weight}`;

        document.getElementById("outputSection").innerText = "You are not smart Guy";
    }
    else {
        document.getElementById("outputSection").innerText = "You need to grow up"
        document.getElementById("statementSection").innerHTML = `Your Age is ${age} <br> Your Weight is ${weight}`;
    }
}



document.getElementById("nested").onclick = function () {
    let age = +prompt("Please Enter your Age")
    if (age >= 18) {
        let weight = +prompt("Please Enter your Weight")
        if (weight <= 60) {
            document.getElementById("outputSection").innerText = "You are smart Guy ";

        } else {
            document.getElementById("outputSection").innerText = "You are not smart Guy ";

        }

    } else {
        document.getElementById("outputSection").innerText = "You need to grow up "

    }

}



document.getElementById("login").onclick = function () {
    let userName = prompt("Enter User Name")
    let pass = prompt("Enter User Password")
    if (userName === "Wadood" && pass === "12345") {
        alert("User is logged In")

        document.getElementById("statementSection").innerHTML = "You Entered Correct User Name and Password";

        document.getElementById("outputSection").innerText = "Welcome to Your Account"

    } else {
        alert("User name or Password is Incorrect")
        document.getElementById("statementSection").innerHTML = `User Name is ${userName} <br> Password is 1234`;
        document.getElementById("outputSection").innerText = "Please Use correct User Name and Password to log in"

    }

}


document.getElementById("clearStatementButton").onclick = function () {
    document.getElementById("statementSection").innerText = " ";

}
document.getElementById("clearOutputButton").onclick = function () {
    document.getElementById("outputSection").innerText = " "

};
document.getElementById("clearAll").onclick = function () {
    document.getElementById("outputSection").innerText = " "
    document.getElementById("statementSection").innerText = " ";
}