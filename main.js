//addeventlistener play, stop, and load songs.
	
	var video = document.getElementById("myVideo");
	var playVideo = document.getElementById("playButton");
	var pauseVideo = document.getElementById("pauseButton");
	var nextVideo = document.getElementById("nextButton");
	var previousVideo = document.getElementById("previousButton");

	playVideo.onclick = function(){
		video.play();
	}
	
	pauseVideo.onclick = function(){
		video.pause();
	}

	// nextVideo.onlick = function(){
	//	video. ;
	// }



var jukeBox = function(videoName){
	var videoNames = ['bunny.mp4', 'lava.mp4', 'partly_cloudly.mp4'];
	this.videoName = videoNames[videoName]; //user passes in the video
}

