// Write your JavaScript code here!



window.addEventListener("load", function() {
   let listedPlanets;
//    Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch("https://handlers.education.launchcode.org/static/planets.json");
   listedPlanetsResponse.then(function (result) {
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let randomPlanet = pickPlanet(result);
      addDestinationInfo(document,randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
      console.log(randomPlanet);
   }).then(function (result) {
     
   })
    let form = document.querySelector("#launchForm");
    form.addEventListener ("submit", function(event){
        let pilotNameInput = document.querySelector(("input[name=pilotName]")).value;
        let copilotNameInput = document.querySelector(("input[name=copilotName]")).value;
        let fuelLevelInput = document.querySelector(("input[name=fuelLevel]")).value;
        let cargoMass = document.querySelector(("input[name=cargoMass]")).value;
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        formSubmission(document,null,pilotNameInput,copilotNameInput,fuelLevelInput,cargoMass)   
    }); 

});