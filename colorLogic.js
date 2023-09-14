function changeColor() {
    document.getElementById("my-color-id").style.color = "green";
}

//Ska variabler!

function variables() {
    
    var name = ""
    var age = 0

    name = "Benny "
    age = 15


    alert(name + age)
    console.log(name + age);  // Shows up in INSPECTION WINDOW

}

function arrays() {
    
    var score = [100, 150, 250, 1000]

    alert(score[0])
    alert(score[3])

    // Index
    // Element
    // [] == Array

}

function userLogin() {

    var result = prompt("please input login credentials")

    alert(result)

}

function loopExercise() {
    
    for (var index = 0; index < 10; index++) {
        
        alert(index)
        
    }

}

