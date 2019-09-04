var myText = document.getElementById("content");
myText.innerHTML += "<h2>Åbningstider i dag:</h2>";

let now = new Date();
let day = now.getDay();
let hour = now.getHours();

console.log("I dag er det: " + day);
console.log("Klokken er: " + hour);

let week = [
"Søndag : Lukket",
"Mandag",
"Tirsdag",
"Onsdag",
"Torsdag",
"Fredag",
"Lørdag"];

console.log(week[day]);


if (hour >= 9 && hour <= 15) {
    var open = 'Vi har åbent indtil kl. 16.00';
    var openTxt = document.getElementById('content');
    openTxt.innerHTML += open;
    console.log(open);

} else {
    var open = 'Butikken er lukket.';
    var openTxt = document.getElementById('content');
    openTxt.innerHTML += open;
    console.log(open);
}
