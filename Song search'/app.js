var progress=document.getElementById("progress");
var search = document.querySelector('.seach')
var song=document.getElementById("song");
var ctrlIcon=document.getElementById("ctrlIcon");
var title=document.querySelector('.title');
var artist=document.querySelector('.artist');
let input = document.getElementById("id");
var img = document.getElementById("song-img");
var picture = document.querySelector('.music-player');

input.addEventListener('keypress',function(e){
	if (e.code ==='Enter'){
		
		changeMusicUI();
	}
});

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc4bbf4091msh2c09d4cd6967219p1b5b48jsn67969fb275b9',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};


async function changeMusicUI(){
let SongSearch=document.getElementById("id").value
// let ApiUrl=`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${SongSearch}&api_key=5352d21cd6b6c4290801fb11c7b09b13&format=json`
let ApiUrl=`https://spotify23.p.rapidapi.com/search/?q=${SongSearch}&type=tracks&offset=0&limit=10&numberOfTopResults=5`
let data = await fetch(ApiUrl,options).then(res => res.json())
console.log(data);
let songID= data.tracks.items[0].data.id
let API2 =`https://spotify23.p.rapidapi.com/tracks/?ids=${songID}`
let data2 = await fetch(API2,options).then(res => res.json())
 console.log(data2);
document.getElementById("song").src = data2.tracks[0].preview_url;
    //  title.innerText = data.results.trackmatches.track[0].name
    //  artist.innerText= data.results.trackmatches.track[0].artist
    let image= data.tracks.items[0].data.albumOfTrack.coverArt.sources[0].url
picture.style.background=`linear-gradient(to top,rgba(0,0,0,0.9),rgba(0,0,0,0.7)),url(${image}) no-repeat center/cover`;
document.getElementById("song-img").src=data.tracks.items[0].data.albumOfTrack.coverArt.sources[0].url
title.innerText = data.tracks.items[0].data.name
artist.innerText= data.tracks.items[0].data.artists.items[0].profile.name

}
// changeMusicUI();


song.onloadeddata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;

}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;},500);
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
   
}

