// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
let html = `<h2>Mission Destination</h2>\
<ol>\
    <li>Name: ${name}</li>6\
    <li>Diameter: ${diameter} </li>\
    <li>Star: ${star}</li>\
    <li>Distance from Earth: ${distance} </li>\
    <li>Number of Moons: ${moons}</li>\
</ol>
<img src= ${imageUrl}>`
document.getElementById("missionTarget").innerHTML = html;
                
}

function validateInput(testInput) {
   if (testInput === "") {
    return ("Empty");
   } else if (isNaN(testInput)){
    return ("Not a Number")
   } else {
    return ("Is a Number");
   }
}
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    this.event.preventDefault();

            if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
            alert("All fields are required!");
            console.log(pilotNameInput.value);

            } else if  (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") { 
                alert("Please only enter strings for the Pilot and Co-pilot fields and numbers for the Fuel and Cargo fields.");
            }
                pilotStatus.innerHTML = `Pilot ${pilot} Ready`
                copilotStatus.innerHTML = `Co-pilot ${copilot} Ready`
                document.getElementById("launchStatus").innerHTML = ("Shuttle is ready for launch");
                document.getElementById("launchStatus").style.color = "green";
                if (fuelLevel < 10000) {
                    document.getElementById("faultyItems").style.visibility ="visible";
                    document.getElementById("launchStatus").innerHTML = ("Shuttle not ready for launch");
                    document.getElementById("fuelStatus").innerHTML = ("There is not enough fuel for the journey.");
                    document.getElementById("launchStatus").style.color = "red";
            }
                if (cargoLevel > 10000) {
                    document.getElementById("faultyItems").style.visibility ="visible";
                    document.getElementById("launchStatus").innerHTML = ("Shuttle not ready for launch");
                     document.getElementById("cargoStatus").innerHTML = ("There is too much mass for the shuttle to take off.");
                    document.getElementById("launchStatus").style.color = "red";
                }
            
}           

async function myFetch(url) {
    let planetsReturned;
    planetsReturned = await fetch(url).then( function(response) {
    return (response.json());
    });

    return planetsReturned;
}

function pickPlanet(planets) {
return planets[Math.floor(Math.random() * planets.length)];
  
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
