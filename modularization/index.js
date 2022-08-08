const Tiger = require('../modularization/Tiger.js');
const Wolf = require('../modularization/Wolf.js');
 
const fighting = (tiger, wolf) => {
  
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
    // console.log(tiger.growl + "Aing Macan")
  }
 
  if(wolf.strength > tiger.strength) {
    wolf.howl();
    return;
        // console.log(wolf.growl + "Aing Asu")
  }
 
  console.log('Tiger and Wolf have same strength');
}
 
const tiger = new Tiger();
const wolf = new Wolf();
 
fighting(tiger, wolf);