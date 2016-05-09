$(document).ready(function(e) {
	$('.area-title').click(function()
	{
		
		var Contenuto=$(this).parents('.review');
		
		if(!Contenuto.hasClass('active'))
		{
			Contenuto.find('.hide-review').slideDown(350,function()
			{
				Contenuto.addClass('active');
			});
		}
		else
		{
			Contenuto.find('.hide-review').slideUp(350,function()
			{
				Contenuto.removeClass('active');
			});
		}
	});
	
});