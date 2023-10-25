let song;

function preload() {
  song = loadSound("./funny-tango.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(song.duration());
  song.playMode("restart"); 
}


function draw() {
  if(song.isPlaying()) {
    background(20, 220, 120); 
  } else if (song.isPaused()) {
    background(20,220,120)
  } else {
  background(220, 20, 120); }
}

function mouseClicked() {
  song.play(); 
}

function keyReleased() {
  if (key == "s") {
    song.stop();
  } else if (key == "p") {
    if(song.isPlaying()) {
      song.pause();
    } else {
      song.play(); 
    }
  }
}