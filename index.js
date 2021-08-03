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

var x = document.getElementById('myAudio');

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}

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
//forEach calls a function that iterates through each element in an array

// fetch call returns a promise. we use .then to handle the reponse we recieve from the call and convert it to json
