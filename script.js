/* 
FOOD ------------
- Meat-eaters: Meat = 400gr pp / +6h duration = 650gr pp
- Vegetarians: Vegetarian-friendly food = 430gr pp / +6h duration = 700gr pp
DRINK -----------
- Alcoholic drinks = 1200ml pp / +6h duration = 2000ml pp
- Alcohol-free drinks = 1000ml pp / +6h duration = 1500ml pp
>> Kids count by 0.5 
*/


function calculate() {

    let adults = document.getElementById("adults").value
        if (adults < 0 || adults == "") {adults = 0}
    let kids = document.getElementById("kids").value
        if (kids < 0 || kids == "") {kids = 0}
    let vegAdults = document.getElementById("veg-adults").value
        if (vegAdults < 0 || vegAdults == "") {vegAdults = 0}
    let vegKids = document.getElementById("veg-kids").value
        if (vegKids < 0 || vegKids == "") {vegKids = 0}
    let duration = parseInt(document.querySelector('input[name="time"]:checked').value)
    let result = document.getElementById("result")

    let meatQtt = ((meatPP(duration) * adults) + (meatPP(duration) * kids * 0.5)) / 1000
    let vegQtt = ((vegPP(duration) * vegAdults) + (vegPP(duration) * vegKids * 0.5)) / 1000
    let alcoholQtt = (alcoholPP(duration) * (parseInt(adults) + parseInt(vegAdults))) / 1000
    let drinksQtt = ((drinksPP(duration) * (parseInt(adults) + parseInt(vegAdults))) + (drinksPP(duration) * ((parseInt(kids) + parseInt(vegKids)) * 0.5))) / 1000
    
    result.innerHTML = `<p class="res1">You will need:</p>`

    result.innerHTML += 
    `<div class="icons">
    <img src="assets/meat.png" alt="">
    <p>${meatQtt.toFixed(1)}kg meat</p>
    </div>`
    
    result.innerHTML += 
    `<div class="icons">
    <img src="assets/veg.png" alt="">
    <p>${vegQtt.toFixed(1)}kg vegetarian food</p>
    </div>`
    
    result.innerHTML += 
    `<div class="icons">
    <img src="assets/alco.png" alt="">
    <p>${Math.ceil(alcoholQtt)}L alcoholic drinks</p>
    </div>`
    
    result.innerHTML += 
    `<div class="icons">
    <img src="assets/drinks.png" alt="">
    <p>${Math.ceil(drinksQtt)}L alcohol-free drinks</p>
    </div>`
    
    result.innerHTML += `<p class="res2">Please be aware that these quantities are estimates and that you may want to change them according to the weather and age of the adults</p>`
}

function meatPP(duration) {
    if (duration == 1) {
        return 400
    } else {
        return 650
    }
}

function vegPP(duration) {
    if (duration == 1) {
        return 430
    } else {
        return 700
    }
}

function alcoholPP(duration) {
    if (duration == 1) {
        return 1200
    } else {
        return 2000
    }
}

function drinksPP(duration) {
    if (duration == 1) {
        return 1000
    } else {
        return 1500
    } 
}