// Write your code here!
const getMain = document.getElementById('main');
getMain.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Mercy Nyambura is the champion";

const body = document.querySelector('body');
body.appendChild(newHeader);
