var JukeBox = {
	songs:['bunny.mp4', 'partly_cloudly.mp4', 'lava.mp4'], //console keeps on yelling at my syntax. this an array of mp4s, 1 as activeSong, 1 for previous, 1 for next
	// activeSong: activeSong, //this will be the song object later

	init: function(){
		//this.video = document.getElementById("js-Video"),
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

	//songs.push(this); //push that adds something to array

	play: function(song){
		console.log("JukeBox is playing"); //wire up the button
		//video.play();
		},
	
	stop: function(){
		console.log("JukeBox is stoping");
		},

	next: function(){ //should stop the activesong and grab the next song in the array 
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


// not incldued
// progress bar
// list of videos
// sound up and down , mute