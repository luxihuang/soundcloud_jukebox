var JukeBox = {
	Var songs = ['./bunny.mp4', './lava.mp4', './partly_cloudy.mp4' ];
	Var activeSong = null; //this will be the song object later

	init: function(){
		this.playButton = document.getElementById("js-playButton"),
		this.stopButton = document.getElementById("js-stopButton"),
		this.nextButton = document.getElementById("js-nextButton"),
		this.previousButton = document.getElementById("js-previousButton"),
		this.muteButton = document.getElementById("js-muteButton"),
	
		this.playButton.addEventListener("click", this.play.bind(this)); //calling the play function below
		this.stopButton.addEventListener("click", this.stop.bind(this));
		this.nextButton.addEventListener("click", this.next.bind(this));
		this.previousButton.addEventListener("click", this.previous.bind(this));
		this.muteButton.addEventListener("click", this.mute.bind(this));
		},

	songs.push(this); //push that adds something to array

	play: function(song){
		console.log("JukeBox is playing"); //wire up the button
		this.activeSong = song;
		},
	
	stop: function(){
		console.log("JukeBox is stoping");
		},

	next: function(){
		console.log("JukeBox is skipping to the next song");
		},

	previous: function(){
		console.log("JukeBox is going back to previous song");
		},

	shuffle: function(){
		console.log("JukeBox is shuffling");
		},

	mute: function(){
		console.log("JukeBox is muted");
		},
	}

//song object
class Song {
	constructor(file){
		this.file = file;
	}
}


//once document is ready, call JukeBox init function
document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  JukeBox.init();
});