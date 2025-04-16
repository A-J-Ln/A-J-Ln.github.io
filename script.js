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