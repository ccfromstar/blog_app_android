$(function() {
	loadHomelist();
});

/*加载主页的文章列表
 *默认读取sessionStorage里的数据，如果没有则访问服务器调取数据
 * */
function loadHomelist() {
	$.ajax({
		type: "POST",
		url: domino + "/app/getHomelist",
		success: function(data) {
			var res = "";
			for (var i in data) {
				res += "<li class='am-g'><a href='post.html?id=" + data[i].id + "' class='am-list-item-hd'>【" + data[i].name + "】" + data[i].title + "</a></li>";
			}
			$("#ajax_list").html(res);
		}
	});
}