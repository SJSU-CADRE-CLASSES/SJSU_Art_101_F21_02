var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=xxe80RCCzSM7bZuMJP6hTGDIs78CjJFc"; //API key
var query = "&q=hamster"; //searches GIPHY for specific gif

function setup(){
  noCanvas(); //doesn't limit p5js
  var url = api + apiKey + query; //creates a URL
  loadJSON(url, gotData); //loadJSON is a p5js function with callback that is
  //..fullfilled with data from API
}

function gotData(giphy){
  for (var i = 0; i < giphy.data.length; i++){ //array of gifs
  createImg(giphy.data[i].images.original.url); //source of gif
}
}
