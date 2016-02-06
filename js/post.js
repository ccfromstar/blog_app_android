$(function() {
	var url = window.location.href;
	var tmp = url.split("?id=");
	var _id = tmp[1];

	var $modal = $('#my-modal-loading');
	$('.am-modal-hd').html(loadinfo);
	$modal.modal();

	$.ajax({
		type: "POST",
		url: domino + "/app/getPost",
		data: {
			id: _id
		},
		success: function(data) {
			console.log(data);
			$('#title').html("【" + data[0].name + "】" + data[0].title);
			$('#date').html("by <a href=''>陈叔叔</a> posted on " + data[0].created_at);
			$('#posts').html(data[0].post);
			fixed_code();
			$modal.modal('close');
		}
	});
});

function fixed_code() {
	//修复代码高亮的样式问题
	var total_width = $(".ke-zeroborder").parent("div").width();
	var left_width = $(".ke-zeroborder td:first-child").width();
	left_width = 28; //左侧代码行超过10行和小于10行的宽度不一样，统一成最大的28px
	var margin_width = 16; //左右margin7px加上分割线2px
	var right_width = total_width - left_width - margin_width;
	$(".ke-zeroborder td:last-child").find("div").css("overflow", "hidden").css("width", right_width + "px");
}