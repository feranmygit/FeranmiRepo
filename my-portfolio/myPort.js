// #variable storage here

const main = document.getElementById('main');
const blogTop = document.getElementById('blogTop');
const myDev = document.getElementById('myDev');
const SocMed = document.getElementById('SocMed');
const gitacc = document.getElementById('gitacc');
const twitteracc = document.getElementById('twitteracc');
const instacc = document.getElementById('instacc');
const linkdacc = document.getElementById('linkdacc');
const mypic = document.getElementById('mypic');
const mytext = document.getElementById('mytext');
const myinfo = document.getElementById('myinfo');
const icon_height = document.getElementsByClassName('icon_height');

gitacc.innerHTML += "<img src = './assets/image/github.png' height='20rem'>";
twitteracc.innerHTML += "<img src = './assets/image/twitter.png' height='20rem'>";
instacc.innerHTML += "<img src = './assets/image/instagram.png' height='20rem'>";
linkdacc.innerHTML += "<img src = './assets/image/linkdln.png' height='20rem'>";
mypic.innerHTML += "<img src='./assets/image/pic-removebg-preview-cropped.png' height='250rem'>";

// #using Object literals
const _owner = {
    xname: "Dev feranmi",
    _aboutMe: "Nice to meet you! I'm Dev Feranmi.",
    messagePOp: "Based in Lagos. l'm a full stack web developer passionate about building accessible web apps that users love.",
};
myDev.innerHTML = _owner.xname;
mytext.innerHTML = _owner._aboutMe;
myinfo.innerHTML = _owner.messagePOp;



















