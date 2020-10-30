// Write your JavaScript code here!
window.addEventListener('load', function () {
   //getMission();
   let form = document.querySelector('form');
   form.addEventListener('submit', function (event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector('input[name=pilotName]');
      let copilotNameInput = document.querySelector('input[name=copilotName]');
      let fuelLevel = document.querySelector('input[name=fuelLevel]');
      let cargoMass = document.querySelector('input[name=cargoMass');
      let pilotStatus = document.getElementById('pilotStatus');
      let copilotStatus = document.getElementById('copilotStatus');
      let fuelStatus = document.getElementById('fuelStatus');
      let cargoStatus = document.getElementById('cargoStatus');
      let faultyItems = document.getElementById('faultyItems');
      let missionTarget = document.getElementById('missionTarget');


      if (pilotNameInput.value === '' || copilotNameInput.value === '' || fuelLevel.value === '' || cargoMass.value === '') {
         alert('All fields are required!');
      } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert('Invalid Data!');
      }

      //for shuttle to take off
      if (cargoMass.value > 10000 && fuelLevel.value < 10000) {
         faultyItems.style.visibility = 'visible';
         launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
         launchStatus.style.color = 'red';
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready for launch`;
         fuelStatus.innerHTML = 'Fuel level too low for launch';
         cargoStatus.innerHTML = 'Cargo mass too heavy to launch';
      } else if (cargoMass.value > 10000 && fuelLevel.value >= 10000) {
         faultyItems.style.visibility = 'visible';
         launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
         launchStatus.style.color = 'red';
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready for launch`;
         fuelStatus.innerHTML = 'Fuel level high enough for launch';
         cargoStatus.innerHTML = 'Cargo mass too heavy to launch';
      } else if (cargoMass.value <= 10000 && fuelLevel.value < 10000) {
         faultyItems.style.visibility = 'visible';
         launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
         launchStatus.style.color = 'red';
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready for launch`;
         fuelStatus.innerHTML = 'Fuel level too low to launch';
         cargoStatus.innerHTML = 'Cargo mass okay for launch';
      } else {
         faultyItems.style.visibility = 'visible';
         launchStatus.innerHTML = 'Shuttle is ready for launch';
         launchStatus.style.color = 'green';
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready for launch`;

      }

   });
   //Put Fetch here
   let apiUrl = 'https://handlers.education.launchcode.org/static/planets.json';
    
   fetch(apiUrl).then(function(response){
      response.json().then( function(json){
         ;
         const index = Math.ceil(Math.random()*json.length) -1;
      missionTarget.innerHTML =` <h2>Mission Destination</h2>
      <ol>
      <li>Name: ${json[index].name}</li>
      <li>Diameter: ${json[index].diameter}</li>
      <li>Star: ${json[index].star}</li>
      <li>Distance from Earth: ${json[index].distance}</li>
      <li>Number of Moons: ${json[index].moons}</li>
      </ol>
      <img src="${json[index].image}">`;
   }); 
});
})

   
//    });

// })

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
