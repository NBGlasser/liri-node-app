# liri-node-app

## What I was supposed to do
I was supposed to be making a command line app that interpreted commands for Spotify, Bandsintown, and OMDB.

## Technology used
* Bash
* Javascript
* Node
* Various node package managers

## What I did
After requiring my various NPMs, the first thing I did was issue two inquirer prompts, one being a choice of the commands the app could handle, and the second one being the parameters for the query. If Spotify-this was selected, the app would display the song's title, artist(s) and a spotify link to the song using the spotify NPM. If Concert-this was selected the app would log the data for the next performance using Axios. If Movie-this was selected, the app would log information on the selected movie also using Axios. Lastly, if do-what-it-says was selected, the app would read the text file and execute the command withing accordingly

## Issues and bugs
I couldn't get the moment NPM working at all but aside from that I didn't have much trouble with this assignment at all
