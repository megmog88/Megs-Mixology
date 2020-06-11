  
  //-------------Age Verification----//

  let age = window.prompt("Please enter your age?: ")
    if (age >= 18 && <= 120) {
        window.alert("Welcome to Meg Mixology");
    } else if (age > 120 || age < 18){
        window.alert("Sorry, you are not authorised to enter this site")
    } else {
        window.alert("Unauthorised access!");
    }