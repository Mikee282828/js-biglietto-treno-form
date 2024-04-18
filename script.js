const perKm = 0.21;
const km = document.getElementById("km");
const età = document.getElementById("età");
const myButton = document.getElementById("submit");

myButton.addEventListener('click',function() {
        let prezzoF = perKm * km.value;
        if (età.value < 18) {
            prezzoF *= 0.8;
        } else if (età.value > 65) {
            prezzoF *= 0.6;
        }
        console.log("Il prezzo finale è:",prezzoF.toFixed(2));
    });


