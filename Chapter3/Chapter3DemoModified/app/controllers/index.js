Alloy.Collections.instance("cars");

var carsController = Alloy.createController("cars");

Alloy.Collections.cars.reset(
	[
		{
			"make":"Honda",
		 	"model":"Civic"
		},
		{
			"make":"Honda",
			"model":"Accord"
		},
		{
			"make":"Ford",
			"model":"Escape"
		},
		{
			"make":"Ford",
			"model":"Mustang"
		},
		{
			"make":"Nissan",
			"model":"Altima"
		}
	]
);

carsController.mainWindow.open();