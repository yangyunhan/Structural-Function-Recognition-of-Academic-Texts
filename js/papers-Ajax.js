$(function(){
	$('.search-results-title').click(function(){
		$.ajax({
			type:"GET",
			url:"paper.json",
			dataType:"json",
			success: function(data){
				$('').empty();
				var html = '';
				$.each(data,function(index,containeritem){
					html += '<div class="container-item"><h2>'+containeritem['title']+'</h2><p>'+containeritem['content']+'</p></div>';
				});
				$('.function-container').html(html);
			}
		});
	});
})