var axios = require("axios");
var inquirer = require("inquirer");
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require("fs");


inquirer.prompt([
    {name: "command",
    type: "list",
    message: "Please choose an operation",
    choices: ["spotify-this-song", "concert-this", "movie-this", "do-what-it-says"]},
    {name: "parameters",
    message: "Please enter parameters"
    }
]).then(function(answers){


// console.log(parameters.toString())

if(answers.command === "spotify-this-song"){
    spotify.search({ type: 'track', query: answers.parameters, limit: 3 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data.tracks.items[0].name);
      console.log(data.tracks.items[0].artists[0].name) 
      });
      
}
else if(answers.command === "concert-this"){
    console.log(typeof(answers.parameters))
var queryUrl = "https://rest.bandsintown.com/artists/" + answers.parameters + "/events?app_id=codingbootcamp";
axios.get(queryUrl).then(
    function(response) {
      console.log(response.data);
    }
  );
}
else if(answers.command === "movie-this") {
var queryUrl = "http://www.omdbapi.com/?t=" + answers.parameters + "&y=&plot=short&apikey=trilogy";
axios.get(queryUrl).then(
    function(response) {
      console.log("Title: " + response.data.Title);
      console.log("Release Year:" + response.data.Year);
      console.log("Rating: " + response.data.Rated);
      console.log(response.data.Ratings[1].Value);
      console.log(response.data.Country);
      console.log(response.data.Language);
      console.log(response.data.Plot);
      console.log(response.data.Actors);
    }
  );
}
else if (answers.command === "do-what-it-says"){
    fs.readFile("random.txt", "utf8", function(error, data){
        if (error) {
            return console.log(error);
          }
          var dataArr = data.split(",");
          var paramArr = []
          for(var i = 1; i < dataArr.length; i++){
            paramArr.push(dataArr[i])
        }
          
          if(dataArr[0] === "spotify-this-song"){
            spotify.search({ type: 'track', query: paramArr.toString(), limit: 3 }, function(err, data) {
                if (err) {
                  return console.log('Error occurred: ' + err);
                }
               
              console.log(data.tracks.items[0]); 
              });
            }
            else if(dataArr[0] === "concert-this"){
            var queryURL = "https://rest.bandsintown.com/artists/" + paramArr.toString() + "/events?app_id=codingbootcamp";
            axios.get(queryUrl).then(
                function(response) {
                  console.log(response.data);
                }
              );
            }
            else if(dataArr[0] === "movie-this") {
            var queryUrl = "http://www.omdbapi.com/?t=" + paramArr.toString() + "&y=&plot=short&apikey=trilogy";
            axios.get(queryUrl).then(
                function(response) {
                  console.log("Title: " + response.data.Title);
                  console.log("Release Year:" + response.data.Year);
                  console.log("Rating: " + response.data.Rated);
                  console.log(response.data.Ratings[1].Value);
                  console.log(response.data.Country);
                  console.log(response.data.Language);
                  console.log(response.data.Plot);
                  console.log(response.data.Actors);
                }
              );
            }
        
    })
}
else{
    console.log("Invalid Command!\nValid Commands: \n\nspotify-this-song\nconcert-this\nmovie-this\ndo-what-it-says")
}
})