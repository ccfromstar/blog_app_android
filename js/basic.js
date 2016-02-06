var domino = "http://blog.youlunshidai.com";
var loadinfo = "加载中...";
//domino = "http://127.0.0.1:9999";
/*关键字检索*/
function searchKey() {
	var key = $("#key").val();
	$.ajax({
		type: "POST",
		url: domino + "/app/SearchByKey",
		data: {
			key: key
		},
		success: function(data) {
			var res = "<ul class='am-list'>";
			for (var i in data) {
				res += "<li class='am-g'><a href='post.html?id=" + data[i].id + "' class='am-list-item-hd'>【" + data[i].name + "】" + data[i].title + "</a></li>";
			}
			res += "</ul>";
			$("#result").html(res);
		}
	});
}

/*加载技术分类菜单
 *默认读取localStorage里的数据，如果没有则访问服务器调取数据
 * */
function loadMenu() {
	var _storage = window.sessionStorage;
	if (_storage.getItem("menu")) {
		console.log("read data in storage");
		$("#ajax_menu").html(_storage.getItem("menu"));
	} else {
		console.log("read data from server");
		$.ajax({
			type: "POST",
			url: domino + "/app/getMenu",
			success: function(data) {
				console.log(data);
				var res = "";
				for (var i in data) {
					res += "<li class=''><a href='list.html?c=" + data[i].id + "'>" + data[i].name + "</a></li>";
				}
				$("#ajax_menu").html(res);
				_storage.setItem("menu", res);
			}
		});
	}
}

$(function() {
	loadMenu();
	var url = window.location.href;
	var parm = url.split("/");
});