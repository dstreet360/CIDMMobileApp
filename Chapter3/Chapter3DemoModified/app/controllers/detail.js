var args = arguments[0] || {};

$.closeBtn.addEventListener("click", function()
{
	$.detailWindow.close();
});

$.car.set(args.data);

$.detailWindow.addEventListener("close",function()
{
	$.destroy();
});