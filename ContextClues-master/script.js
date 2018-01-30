
var FRIEND_NAME = ["Peyton ", "Chris ", "Wesley ", "Taylor ", "Kate "];
var LOCATION_NAME = ["the backyard ", "the kitchen ", "the bathroom ", "the closet ", "the living room ", "Brazil ", "the office ", "the waiting room ", "the front yard ", "the hallway"];
var WEAPON_NAME = ["cup ", "chair ", "spatula ", "piano ", "guitar ", "cd case ", "stero system ", "laptop ", "paint brush ", "vaccum cleaner ", "light bulb ", "kibble ", "dog bowl ", "brita filter ", "lamp ", "shower head ", "water bottle ", "plate ", "vase ", "tv "];


for (var index = 1; index <= 101; index++) {
    var h3 = document.createElement('h3');
    h3.innerText = 'Accusation ' + index;
    document.body.appendChild(h3);

    // h3.addEventListener('click', function() {
    //     alert(' I accuse ' + FRIEND_NAME[index % FRIEND_NAME.length] + ' with a ' + WEAPON_NAME[index % WEAPON_NAME.length] + ' in ' + LOCATION_NAME[index % LOCATION_NAME.length]);
    // })
    var message = ' I accuse ' + FRIEND_NAME[index % FRIEND_NAME.length] + ' with a ' + WEAPON_NAME[index % WEAPON_NAME.length] + ' in ' + LOCATION_NAME[index % LOCATION_NAME.length];
    h3.addEventListener("click", greeter(message));

}

function myFunction(index) {
    alert(' I accuse ' + FRIEND_NAME[index % FRIEND_NAME.length] + ' with a ' + WEAPON_NAME[index % WEAPON_NAME.length] + ' in ' + LOCATION_NAME[index % LOCATION_NAME.length]);
}

// function greeter(personName) {
//     return function () {
//         alert( personName );
//     }
// }
// let greetJohn = greeter('John');
