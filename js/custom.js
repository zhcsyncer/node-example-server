$(function(){
	$('#success').click(function(){
		$.ajax({
			url:'/testJson',
			dataType:'json',
			success:function(data){
				console.log(data);
			},
			error:function(data){
				console.log(data);
			},
			complete:function(data){
				console.log(data);
			}
		});

	});
})
