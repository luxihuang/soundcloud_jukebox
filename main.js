var JukeBox = {
    songs:['bunny.mp4', 'partly_cloudly.mp4', 'lava.mp4'],
    currentSongId: 0,
    previousTime: 0,

    init: function() {
        var _this = this;  //making the object available to the methods
        this.video = document.getElementById("js-Video");
        this.playButton = document.getElementById("js-playButton");
        this.stopButton = document.getElementById("js-stopButton");
        this.nextButton = document.getElementById("js-nextButton");
        this.previousButton = document.getElementById("js-previousButton");
   
        this.playButton.addEventListener("click", function() {
            _this.load(_this.currentSongId);
            _this.play();
        });  

        this.stopButton.addEventListener("click", function() {
            _this.stop(_this.currentSongId);
        });
        
        this.nextButton.addEventListener("click", function() {
            _this.next(_this.currentSongId);
        });

        this.previousButton.addEventListener("click", function() {
             _this.previous(_this.currentSongId);
        }); 
    },

    load: function(id) { 
        this.video.src = this.songs[id];
        this.video.load();
    },

    play: function() {
        this.video.play();
        this.video.currentTime = this.previousTime || 0;
    },
  
    stop: function() {
        this.previousTime = this.video.currentTime;
        this.video.pause();
    },
 
    next: function() {     
        if(this.currentSongId + 1 >= this.songs.length) {          
            this.currentSongId = 0;
        } else {
            this.currentSongId = this.currentSongId + 1;
        }
        this.load(this.currentSongId);
        this.play();
    },  

    previous: function() {
        if(this.currentSongId <= 0) {
            this.currentSongId = 0;
        } else{
            this.currentSongId = this.currentSongId - 1;
    }
}

//once document is ready, call JukeBox init function. Handler when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function(){
    JukeBox.init();
});

// not incldued
// progress bar
// list of videos
// sound up and down , mute
// when you stop the video then play again, the video flashes because it's going all the way back to the currentTime = 0
