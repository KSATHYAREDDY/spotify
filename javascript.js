console.log("welcome to spotify")
// initialize the variables
let songindex = 0;
let audioelement =new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songname:"Let me Love You",filepath:"songs/1.mp3",coverpath:"covers/2.jpg"},
    {songname:"cheapthrills",filepath:"songs/2.mp3",coverpath:"covers/1.jpg"},
    {songname:"heartattack",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"i am sorry",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"despacito",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"rider",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname:"monster kgf-2",filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
    {songname:"princess",filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},
    {songname:"lion",filepath:"songs/9.mp3",coverpath:"covers/9.jpg"},
    {songname:"dilbar",filepath:"songs/10.mp3",coverpath:"covers/10.jpg"},
]

songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;

})

masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }    
})

audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime = (myprogressbar.value * audioelement.duration)/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        makeallplays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioelement.src='songs/${songIndex+1}.mp3';
        mastersongname.innerText = songs[songIndex].songname;
        audioelement.currentTime=0;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');


    })

})
