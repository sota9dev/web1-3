import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";

const firebaseConfig = {
    //API, etc...
};

const app = initializeApp(firebaseConfig);

const inputField = document.querySelector('input');
const btn = document.querySelector('#btn');
const list = document.querySelector('ul');
const likeBtn = document.querySelector('#like-btn');
const likeCount = document.querySelector('#like-count');
let count = 0;

likeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    count++;
    likeCount.textContent = count;
})

btn.addEventListener('click', function(event) {
    event.preventDefault();

    let messageText = inputField.value.trim();

    if (messageText === "") {
        return;
    }

    let newLi = document.createElement('li');
    newLi.textContent = messageText;

    list.appendChild(newLi);
    inputField.value = "";
    console.log(list);
});