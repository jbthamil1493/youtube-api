$(document).ready(function(){
	$("#search-term").submit(function(event){
		event.preventDefault();
		var searchTerm = $("#query").val();
		getRequest(searchTerm);
	});
});

function getRequest(searchTerm) {
	var params = {
		key: 'AIzaSyCf4t9kor8dhtmntYNHNkVWIyQFWxQDy6Y'
		s: searchTerm,
		r: 'json'
	};
	url = 'https://developers.google.com/youtube/v3/';

	$.getJSON(url, params, function(data) {
		showResults(data.Search);
	});
}

function showResults(results) {
	var html = "";
	$.each(results, function(index,value) {
		html += "<p>" + value.Title + "</p>";
		console.log(value.Title);
	});
	$("#search-results").html(html);
}