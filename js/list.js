$(function() {
	var url = window.location.href;
	var tmp = url.split("?c=");
	var _c = tmp[1];

	var $modal = $('#my-modal-loading');
	$('.am-modal-hd').html(loadinfo);
	$modal.modal();

	$.ajax({
		type: "POST",
		url: domino + "/app/getList",
		data: {
			c: _c
		},
		success: function(data) {
			console.log(data);
			var _list = '';
			for(var i in data){
				_list += '<li class="am-g">';
				_list += '<a href="post.html?id='+data[i].id+'" class="am-list-item-hd">【'+data[i].name+'】'+data[i].title+'</a>';
				_list += '<p class="list_time">posted on：';
				_list += data[i].created_at;
				_list += '</p>';
				_list += '</li>';
			}		
			$('#article_list').html(_list);
			$modal.modal('close');
		}
	});
});