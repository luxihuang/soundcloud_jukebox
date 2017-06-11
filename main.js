var JukeBox = {
	songs = [];
	activeSong: null; //this will be the song object later
	dom: {};


	init: function(){
		var play = document.getElementById("js-playButton"),
		var stop = document.getElementById("js-stopButton"),
		var next: document.getElementById("js-nextButton"),
		var previous: document.getElementById("js-previousButton"),
			}
		this.bind(); //calling the bind function
		}

	bind: function(){
		this.dom.play.addEventListener("click", this.play);
		this.dom.stop.addEventListener("click", this.stop);
		this.dom.next.addEventListener("click", this.next);
		this.dom.mute.addEventListener("click", function(){
			this.setVolumne(0);
		}
	}

	play: function(song){
		console.log("Jukebox is playing");
		this.activeSong = song;
	}

	pause: function(){
		console.log("Jukebox is pausing");
	}

	stop: function(){
		console.log("Jukebox is stoping");
	}

	change: function(song){
		console.log("Jukebox is changing");
	}

	next: function(){
		console.log("Jukebox is skipping to the next song");
	}

	shuffle: function(){
		console.log("Jukebox is shuffling");
	}

//volume should be a $ number
	setVolume: function(volumeLevel){
		console.log("volumne level is this");
	}
}

//once document is ready, call Jukebox init function
document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  Jukebox.init();
});