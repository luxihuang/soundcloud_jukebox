SC.initialize({
  client_id: 'fd4e76fc67798bfa742089ed619084a6'
});


var JukeBox = {
    songs:[],
    currentSongId: 0,
    previousTime: 0,

    init: function() {
        var _this = this;  //making the object available to the methods
        this.searchInput = document.getElementById("js-search-input");
        this.video = document.getElementById("js-Video");
        this.playButton = document.getElementById("js-playButton");
        this.stopButton = document.getElementById("js-stopButton");
        this.nextButton = document.getElementById("js-nextButton");
        this.previousButton = document.getElementById("js-previousButton");
   
        this.playButton.addEventListener("click", function() {
            _this.play(_this.currentSongId);
        });  

        // this.stopButton.addEventListener("click", function() {
        //     _this.stop(_this.currentSongId);
        // });
        
        // this.nextButton.addEventListener("click", function() {
        //     _this.next(_this.currentSongId);
        // });

        // this.previousButton.addEventListener("click", function() {
        //      _this.previous(_this.currentSongId);
        // }); 

        this.search('Lady Gaga'); //loads a search searching for keyword 'Prince' when you first load
    },

    // render: function(){

    // },

    search: function(searchTerm){
        var self = this
        SC.get('/tracks', {
            q: searchTerm
        }).then(function(tracks) {
            self.songs = tracks.map(function(item){
                return item.id
            });
            console.log(self.songs); //self is only within this scope
        });
        
    },
        
    stream: function(id){
        console.log(id);
        var self = this;  //self is destroyed after the function, but it connects to this
        SC.stream('/tracks/' + id).then(function(player){
            self.player = player //makes soundcloud player available for other functions
            console.log(player)
            player.play();
        });    
    }, 

    play: function(id) {
        console.log(id);
        this.stream(id);
    },
  
    stop: function() {
        this.player.pause(); //Soundcloud player
    //     this.previousTime = this.video.currentTime;
    //     this.video.pause();
    },
 
    next: function() {     
        console.log("B4",this.currentSongId); 
        if(this.currentSongId >= this.songs.length) {          
            this.currentSongId = 0;
        } else {
            this.currentSongId = this.currentSongId + 1;
        }
        console.log("After",this.currentSongId); 
        this.play(this.songs[this.currentSongId]); //same as JukeBox.play()
    },  

    // previous: function() {
    //     if(this.currentSongId <= 0) {
    //         this.currentSongId = 0;
    //     } else{
    //         this.currentSongId = this.currentSongId - 1;
    // }
}

//once document is ready, call JukeBox init function. Handler when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function(event) {
  // searchInput.addEventListener('keyup', function(evt){
  //   search(searchInput.value);
  // })
  JukeBox.init();
});


//for about.html will ahve to type it in
// run command 'simplehttpserver' when in the specific project folder to do http://localhost:8000/

