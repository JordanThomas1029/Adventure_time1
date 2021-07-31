document
  .getElementById('get-characters')
  .addEventListener('click', getCharacters);

document.getElementById('one').addEventListener('click', buttonOne);
document.getElementById('two').addEventListener('click', buttonTwo);
document.getElementById('three').addEventListener('click', buttonThree);
document.getElementById('four').addEventListener('click', buttonFour);

function buttonOne() {
  document.getElementsByTagName('body')[0].style.backgroundImage =
    'url(imgs/advbackground1.jpg)';
}

function buttonTwo() {
  document.getElementsByTagName('body')[0].style.backgroundImage =
    'url(imgs/advbackground2.jpg)';
}

function buttonThree() {
  document.getElementsByTagName('body')[0].style.backgroundImage =
    'url(imgs/advbackground3.jpg)';
}

function buttonFour() {
  document.getElementsByTagName('body')[0].style.backgroundImage =
    'url(imgs/advbackground4.jpg)';
}

//document.addEventListener('DOMContentLoaded', () => {
//let a = new Audio('./audio/adventure-time-theme-song.mp3');
//const audio = document.getElementById('theme-song');
//console.log(audio)
// a.play();
//});
//document.getElementById('theme-song').play(); /*

function getCharacters() {
  fetch('http://localhost:3000/characters')
    .then((res) => res.json())
    .then((data) => {
      let output = '';
      data.forEach((character) => {
        output += `<ul>
        <li>${character.displayName}</li>
        <img src="${character.sprite}">
        </ul>
        `;
      });
      document.getElementById('output').innerHTML = output;
    });
}
