var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "xxe80RCCzSM7bZuMJP6hTGDIs78CjJFc";
var query = "&q=airport";

function setup(){
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}

function gotData(giphy){
  // for (var i = 0; i < giphy.data.length; i++){
  createImg(giphy.data[0].images.original.url);
// }
}
