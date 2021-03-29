var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.05;
	console.log(video.playbackRate);
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log(this.value)
	var slider = this.value;
	video.volume = slider / 100;
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.05;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 15;
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Play Video");
	video.muted = true;
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool")
});


document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool")
});


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
