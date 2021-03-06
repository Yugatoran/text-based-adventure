//play all music at the start here

playSound("theone.mp3");
audios[0].loop = true;
audios[0].pause();

// add music distances for all rooms. 
// (Non labeled rooms will not change from other rooms)

addLocations(["AptBedroom","AptKitchen","AptLivingRoom","AptBathroom"]);

currentLocation = "AptBedroom";

addStateDescripToLocation("AptBedroom", "Normal", "You're standing in your bedroom.<br><br>To the South you see the Bathroom. To the East is Living Room.");
addStateDescripToLocation("AptKitchen", "Normal", "You're standing in the kitchen.<br><br>To the North you see the Living Room. To the West is the Bathroom.");
addStateDescripToLocation("AptLivingRoom", "Normal", "You're standing in the living room.<br><br>To the South you see the Kitchen. To the West is Bedroom.");
addStateDescripToLocation("AptBathroom", "Normal", "You're standing in the bathroom.<br><br>To the North you see the Bedroom. To the East is Kitchen.");

addMove("AptBedroom", ["Normal"], "AptLivingRoom", ["Normal"], ["Go East","East","E","Move East"]);
addMove("AptLivingRoom", ["Normal"], "AptBedroom", ["Normal"], ["Go West","West","W","Move West"]);

addMove("AptBathroom", ["Normal"], "AptKitchen", ["Normal"], ["Go East","East","E","Move East"]);
addMove("AptKitchen", ["Normal"], "AptBathroom", ["Normal"], ["Go West","West","W","Move West"]);

addMove("AptBathroom", ["Normal"], "AptBedroom", ["Normal"], ["Go North","North","N","Move North"]);
addMove("AptBedroom", ["Normal"], "AptBathroom", ["Normal"], ["Go South","South","S","Move South"]);

addMove("AptKitchen", ["Normal"], "AptLivingRoom", ["Normal"], ["Go North","North","N","Move North"]);
addMove("AptLivingRoom", ["Normal"], "AptKitchen", ["Normal"], ["Go South","South","S","Move South"]);

var apple = new Item("Apple");
apple.addState(new State("Normal","The apple is shiny and red. Looks good enough to eat!"));
addItemToLocation(apple, "AptKitchen");

/*addLocations(
  ["MyBedroom","Hallway","Bathroom","GuestBedroom",
   "MasterBedroom","Stairs","MasterBedroomBed","MasterBedroomBath"
  ]);
*/

/*
audioDistances.push(["WakeUpRoom",0,1]);
audioDistances.push(["Hallway",0,0.5]);
audioDistances.push(["Bathroom",0,0.2]);
audioDistances.push(["GuestBedroom",0,0.2]);
*/


//addStateDescripToLocation(location, state, description)

/*
addStateDescripToLocation("MyBedroom", "Normal", "You're standing in your bedroom. There's a bed, freshly made. A door west leads out from the room.");
addStateDescripToLocation("Hallway", "Normal", "You're standing in the hallway. This connects everything - your bedroom to the east, a bathroom to the south-east, a guest bedroom to the south, the stairs to the north, and your parents' bedroom to the north west.");
addStateDescripToLocation("Bathroom", "Normal", "You're standing in the bathroom. There's a sink, a shower, and a toilet. Not much else. The only way out is the hallway to the north west.");
addStateDescripToLocation("GuestBedroom", "Normal", "You're standing in the guest bedroom. It smells musty from months of disuse. The only way out is the hallway to the north.");
addStateDescripToLocation("Stairs", "Normal", "You're standing at the top of the stairs. The stairs run down, and the hallway is to the south.");
addStateDescripToLocation("MasterBedroomBed", "Normal", "You're standing in the master bedroom. The master bath is to the west, and the hallway is to the south east.");
addStateDescripToLocation("MasterBedroomBath", "Normal", "You're standing in the master bathroom. There're two sinks, a shower, and a toilet. The master bedroom is to the east.");


addMove("MyBedroom", ["Normal"], "Hallway", ["Normal"], ["Go West","West","W"]);
addMove("Hallway", ["Normal"], "MyBedroom", ["Normal"], ["Go East","East","E"]);

addMove("Hallway", ["Normal"], "Bathroom", ["Normal"], ["Go Southeast","Southeast","se"]);
addMove("Bathroom", ["Normal"], "Hallway", ["Normal"], ["Go Northwest","Northwest","nw"]);

addMove("Hallway", ["Normal"], "GuestBedroom", ["Normal"], ["Go South","South","s","Move South"]);
addMove("GuestBedroom", ["Normal"], "Hallway", ["Normal"], ["Go North","North","n","Move North"]);



addPicture("MyBedroom","dragonballs.png");
addPicture("Hallway","dragonballs2.png");
addPicture("GuestBedroom","dragonball.png");

var apple = new Item("Apple");
apple.addState(new State("Normal","The apple is shiny and red. Looks good enough to eat!"));
addItemToLocation(apple, "MyBedroom");


addPossibleAction(
	[
		["itemInArea","Apple"],
		["currentLocation","MyBedroom"],
		["locationState","MyBedroom",["Normal"]],
	],
	[
		["changeLocationState","MyBedroom","Turned"]
	
	],

	["turn apple"],
	"You turned the apple."

);

addPossibleAction(
	[
		["currentLocation","MyBedroom"],
		["locationState","MyBedroom",["Normal"]],
		["checkVar","musicOneStatus",["paused","stopped"]],
	],
	[
		["playMusic","musicOne"]
	
	],

	["play music"],
	"The music is playing."

);

addPossibleAction(
	[
		["currentLocation","MyBedroom"],
		["locationState","MyBedroom",["Normal"]],
		["checkVar","musicOneStatus",["playing","paused"]],
	],
	[
		["stopMusic","musicOne"]
	
	],

	["stop music"],
	"The music is stopped."

);

addPossibleAction(
	[
		["currentLocation","MyBedroom"],
		["locationState","MyBedroom",["Normal"]],
		["checkVar","musicOneStatus",["playing"]],
	],
	[
		["pauseMusic","musicOne"]
	
	],

	["pause music"],
	"The music is paused."

);

*/
