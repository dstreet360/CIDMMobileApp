function transform(model)
{
	var carObject = model.toJSON();
	var output = 	
	{
		"title" : carObject.model + " by " + carObject.make,
		"id" :model.cid
	};
	return output;
}

function filter(collection)
{
	return collection.where(
		{
			make: "Honda"
		}
	);
}

$.mainWindow.addEventListener("close", function()
{
	$.destroy();
});

$.table.addEventListener('click', function(_event)
{
	
	var model = Alloy.Collections.cars.get(_event.rowData.modeId);
	var detailController = Alloy.createController("detail",
	{
		data: model
	});

	detailController.getView().open(
		{
			modal: true	
		}
	);	
});