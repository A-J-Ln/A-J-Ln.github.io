console.log("Hello World");

// Alert Button
document.getElementById("alertMe").onclick = function() {
    alert("Akina Nakamori is my favourite \(*' v ' *)");
    }; 

// Hover Button
document.getElementById("hoverButton").onclick = function() {
    alert("While not technically CityPop, Masayoshi Takanaka's Rainbow Goblin Album had influence on the genre");
    };     
document.getElementById("hoverButton").onmouseover = function() {
    document.getElementById('hoverButton').style.background = "#235182"; // Change to dark blue on hover
    };
document.getElementById("hoverButton").onmouseleave = function() {
    document.getElementById("hoverButton").style.background = "#3171b5";  // Return to original color when cursor leaves
    };

// Incrementing Button
let count = 0;
document.getElementById("buttonCounter").onclick = function() {
     count = count + 1;
     document.getElementById("counter").innerHTML = count;
    
     if (count % 2 === 0) {
        document.getElementById('counter').style.color = "#a52020"; // Even
    } else {
        document.getElementById('counter').style.color = "#3171b5"; // Odd
    }
    };

    for (let i = 0; i < 5; i = i + 1) {
        document.getElementById('container').append("DON'T GET CAUGHT" + " * ");
    };    