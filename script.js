console.log("Welcome to FOTTY SEVEN RAP BOX");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
a = "|| fotty Seven ||"
let songs = [
    {songName: "Famous || Fotty Seven x Arjun Kanungo || ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Sehwag || Fotty Seven ||", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Statue || Fotty Seven x Arjun Kanungo ||", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Baap Se || Fotty Seven || ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Ohhhhhhh || Fotty Seven ||", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Haath Toh Laga || Fotty Seven || ", filePath: "songs/6.mp3", coverPath: "covers/5.jpg"},
    {songName: "Kar Diya || Fotty Seven || ", filePath: "songs/7.mp3", coverPath: "covers/5.jpg"},
    {songName: "Kar Lenge Bhai || Fotty Seven || ", filePath: "songs/8.mp3", coverPath: "covers/5.jpg"},
    {songName: "Asool "+a , filePath: "songs/9.mp3", coverPath: "covers/5.jpg"},
    {songName: "Sahi Sahi Sahi || Fotty Seven x Ikka ||", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
download.addEventListener('click',function(e){
    alert('THIS BUTTON IS STILL IN DEVELOPEMENT');
    
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})