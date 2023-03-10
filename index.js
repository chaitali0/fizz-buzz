

var i = 1;
while(i <= 50) {
//  code
    if(i % 3 == 0 && i % 5 == 0) {
        document.getElementById("p1").innerHTML += `FizzBuzz <br>`;
    } else if(i % 5 == 0) {
        document.getElementById("p1").innerHTML += `Buzz <br>`;
    } else if(i % 3 == 0) {
        document.getElementById("p1").innerHTML += `Fizz <br>`;
    } else {
        document.getElementById("p1").innerHTML += `${i} <br>`;
    }

    i++;
}

function checkNum(){
    var n = Number(document.getElementById("n").value);
    var temp = n;
    // reverse a number
    var rev = 0;
    while(n > 0) {
        var x = n % 10;
        rev = (rev * 10) + x;
        n = parseInt(n / 10);
    }

    if(temp == rev) {
        document.getElementById("p2").innerHTML = `${temp} is Palindrome. <br>`
    } else {
        document.getElementById("p2").innerHTML = `${temp} is not Palindrome. <br>`
    }
}


//  Do - while


var index = 1;
do {
    // code
    if(index % 5 == 0) {
        document.getElementById("p3").innerHTML += `${index} <br>`
    }

    index++;
} while(index <= 100)