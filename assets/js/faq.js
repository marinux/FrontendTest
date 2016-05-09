$(document).ready(function(e) {
	$('.faq-section-content-single-header').click(function()
	{
		
		var FaqSectionContentSingle=$(this).parents('.faq-section-content-single');
		
		if(!FaqSectionContentSingle.hasClass('active'))
		{
			FaqSectionContentSingle.find('.faq-section-content-single-content').slideDown(350,function()
			{
				FaqSectionContentSingle.addClass('active');
			});
		}
		else
		{
			FaqSectionContentSingle.find('.faq-section-content-single-content').slideUp(350,function()
			{
				FaqSectionContentSingle.removeClass('active');
			});
		}
	});
	
});