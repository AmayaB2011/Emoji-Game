const emojis = [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
    "🙂", "🙃", "😉", "😋", "😌", "😍", "🥰", "😘", "😗", "😙",
    "😚", "😛", "😜", "🤪", "😝", "😛", "🤑", "🤗", "🤫", "🤭",
    "🤔", "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬",
    "😮", "🥺", "😢", "😭", "😤", "😠", "😡", "😡", "🤯", "😳",
    "🥴", "😱", "😨", "😰", "😥", "😓", "🤗", "🙁", "😖", "😣",
    "😞", "😔", "😟", "😫", "🥱", "😴", "😷", "🤒", "🤕", "🤢",
    "🤮", "🥵", "🥶", "😵", "🤯", "🤠", "🥳", "😎", "🤓", "🧐",
    "😕", "😟", "🙁", "☹️", "😮‍💨", "😚", "😛", "😜", "🤪", "😝", 
    "😛", "🤑", "🤗", "🤫", "🤭", "🤔", "🤐", "🤨",
];
const emojiList = [
    {emoji: '😀', price: 5, amount: 0, own: false},
    {emoji: '😁', price: 5, amount: 0, own: false},
    {emoji: '😂', price: 5, amount: 0, own: false},
    {emoji: '🤣', price: 5, amount: 0, own: false},
    {emoji: '😄', price: 5, amount: 0, own: false},
    {emoji: '😅', price: 5, amount: 0, own: false},
    {emoji: '😆', price: 10, amount: 0, own: false},
    {emoji: '😉', price: 10, amount: 0, own: false},
    {emoji: '😊', price: 10, amount: 0, own: false},
    {emoji: '😋', price: 10, amount: 0, own: false},
    {emoji: '😎', price: 25, amount: 0, own: false},
    {emoji: '😍', price: 30, amount: 0, own: false},
    {emoji: '😘', price: 15, amount: 0, own: false},
    {emoji: '🥰', price: 20, amount: 0, own: false},
    {emoji: '😗', price: 15, amount: 0, own: false},
    {emoji: '😙', price: 10, amount: 0, own: false},
    {emoji: '🥲', price: 5, amount: 0, own: false},
    {emoji: '😚', price: 10, amount: 0, own: false},
    {emoji: '🤗', price: 20, amount: 0, own: false},
    {emoji: '🤩', price: 35, amount: 0, own: false},
    {emoji: '🤔', price: 10, amount: 0, own: false},
    {emoji: '🫡', price: 25, amount: 0, own: false},
    {emoji: '🤨', price: 15, amount: 0, own: false},
    {emoji: '😐', price: 5, amount: 0, own: false},
    {emoji: '😑', price: 5, amount: 0, own: false},
    {emoji: '😶', price: 30, amount: 0, own: false},
    {emoji: '🫥', price: 45, amount: 0, own: false},
    {emoji: '😏', price: 15, amount: 0, own: false},
    {emoji: '😣', price: 15, amount: 0,own: false},
    {emoji: '😥', price: 10, amount: 0,own: false},
    {emoji: '😮', price: 15, amount: 0, own: false},
    {emoji: '🤐', price: 40, amount: 0, own: false},
    {emoji: '😯', price: 10, amount: 0, own: false},
    {emoji: '😪', price: 5, amount: 0, own: false},
    {emoji: '😫', price: 15, amount: 0, own: false},
    {emoji: '🥱', price: 15, amount: 0, own: false},
    {emoji: '😴', price: 30, amount: 0, own: false},
    {emoji: '😌', price: 10, amount: 0, own: false},
    {emoji: '😛', price: 10, amount: 0, own: false},
    {emoji: '😜', price: 20, amount: 0, own: false},
    {emoji: '😝', price: 15, amount: 0,own: false},
    {emoji: '🤤', price: 10, amount: 0, own: false},
    {emoji: '😒', price: 5, amount: 0, own: false},
    {emoji: '😓', price: 5, amount: 0, own: false},
    {emoji: '😔', price: 5, amount: 0, own: false},
    {emoji: '😕', price: 5, amount: 0, own: false},
    {emoji: '🫤', price: 10, amount: 0, own: false},
    {emoji: '🙃', price: 35, amount: 0, own: false},
    {emoji: '🫠', price: 40, amount: 0, own: false},
    {emoji: '🤑', price: 45, amount: 0, own: false},
    {emoji: '😲', price: 10, amount: 0, own: false},
    {emoji: '☹️', price: 10, amount: 0, own: false},
    {emoji: '😖', price: 10, amount: 0, own: false},
    {emoji: '😞', price: 5, amount: 0, own: false},
    {emoji: '😤', price: 10, amount: 0, own: false},
    {emoji: '😢', price: 10, amount: 0, own: false},
    {emoji: '😭', price: 10, amount: 0, own: false},
    {emoji: '😦', price: 10, amount: 0, own: false},
    {emoji: '😧', price: 5, amount: 0, own: false},
    {emoji: '😨', price: 20, amount: 0, own: false},
    {emoji: '😩', price: 10, amount: 0, own: false},
    {emoji: '🤯', price: 35, amount: 0, own: false},
    {emoji: '😬', price: 10, amount: 0, own: false},
    {emoji: '😮‍💨', price: 15, amount: 0, own: false},
    {emoji: '😰', price: 20, amount: 0, own: false},
    {emoji: '😱', price: 20, amount: 0, own: false},
    {emoji: '🥵', price: 25, amount: 0, own: false},
    {emoji: '🥶', price: 25, amount: 0, own: false},
    {emoji: '😳', price: 15, amount: 0, own: false},
    {emoji: '🤪', price: 20, amount: 0, own: false},
    {emoji: '😵', price: 20, amount: 0, own: false},
    {emoji: '😵‍💫', price: 30, amount: 0, own: false},
    {emoji: '🥴', price: 10, amount: 0, own: false},
    {emoji: '😠', price: 10, amount: 0, own: false},
    {emoji: '😡', price: 30, amount: 0, own: false},
    {emoji: '😷', price: 15, amount: 0, own: false},
    {emoji: '🤒', price: 20, amount: 0, own: false},
    {emoji: '🤕', price: 15, amount: 0, own: false},
    {emoji: '🤢', price: 15, amount: 0, own: false},
    {emoji: '🤮', price: 15, amount: 0, own: false},
    {emoji: '🤧', price: 10, amount: 0, own: false},
    {emoji: '😇', price: 45, amount: 0, own: false},
    {emoji: '🥳', price: 50, amount: 0, own: false},
    {emoji: '🥸', price: 50, amount: 0, own: false},
    {emoji: '🥺', price: 15, amount: 0, own: false},
    {emoji: '🥹', price: 10, amount: 0, own: false},
    {emoji: '🤠', price: 50, amount: 0, own: false},
    {emoji: '🤡', price: 50, amount: 0, own: false},
    {emoji: '🤥', price: 20, amount: 0, own: false},
    {emoji: '🤫', price: 5, amount: 0, own: false},
    {emoji: '🤭', price: 10, amount: 0, own: false},
    {emoji: '🫢', price: 5, amount: 0, own: false},
    {emoji: '🫣', price: 10, amount: 0, own: false},
    {emoji: '🧐', price: 10, amount: 0, own: false},
    {emoji: '🤓', price: 25, amount: 0, own: false},
    {emoji: '😺', price: 30, amount: 0, own: false},
    {emoji: '😸', price: 20, amount: 0, own: false},
    {emoji: '😹', price: 25, amount: 0, own: false},
    {emoji: '😻', price: 40, amount: 0, own: false},
    {emoji: '😼', price: 25, amount: 0, own: false},
    {emoji: '😽', price: 25, amount: 0, own: false},
    {emoji: '😿', price: 10, amount: 0, own: false},
    {emoji: '😾', price: 10, amount: 0, own: false}
];
const container = document.getElementById('container');
const pointsDisplay = document.getElementById('item2Bar1');
const stopwatchDisplay = document.getElementById('item1Bar1');
const startOverlay = document.getElementById('startOverlay');
const endOverlay = document.getElementById('endOverlay');
const shopOverlay = document.getElementById('shopOverlay');
const shopButton = document.getElementById("shopButton");
const displayButton = document.getElementById("displayButton");
const displayOverlay = document.getElementById("displayOverlay");
const endTitle = document.getElementById('endTitle');
const showScore = document.getElementById('showScore');
const startButton = document.getElementById('startButton');
const replayButton = document.getElementById('replayButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const buyButton = document.getElementById('buyButton');
const emojiNumber = document.getElementById('emoji1');
const emojiPrice = document.getElementById('emojiPrice1');
const amountOwned = document.getElementById('amount1');
const emojiTitle = document.getElementById('emojiOwned');
const ownedOverlay = document.getElementById('ownedOverlay');
const closeButton = document.getElementById('closeButton');
const prev = document.getElementById('prev2');
const next = document.getElementById('next2');
const useButton = document.getElementById('useButton');
let number = 0;
let x = 0;
let emojisOwned = [];
let points = 0;
let seconds = 20;
let coins = 0;
let timer;

endOverlay.style.display = "none";
shopOverlay.style.display = "none";
displayOverlay.style.display = "none";

startButton.addEventListener('click', () => {
    startOverlay.style.display = 'none';
    container.style.display = 'block';
    pointsDisplay.style.display = 'block';
    stopwatchDisplay.style.display = 'block';
    startStopwatch();
});

replayButton.addEventListener('click', () => {
    container.innerText = '';
    points = 0;
    seconds = 20;
    pointsDisplay.innerText = `Points: ${points}`;
    stopwatchDisplay.innerText = '0:20';
    startOverlay.style.display = 'none';
    container.style.display = 'block';
    pointsDisplay.style.display = 'block';
    stopwatchDisplay.style.display = 'block';
    startStopwatch();
});

function startStopwatch() {
    emojis.forEach((emoji) => {
        const emojiElement = document.createElement('span');
        emojiElement.classList.add('emoji');
        emojiElement.innerText = emoji;

        emojiElement.addEventListener('click', () => {
            if (emojiElement.classList.contains('active')) {
                emojiElement.classList.remove('active');
                points++;
                pointsDisplay.innerText = `Points: ${points}`;
            }
        });
        container.appendChild(emojiElement);
    });

    endOverlay.style.display = 'none';
    timer = setInterval(() => {
        var endTitleText = "Good Job!";
        if (points >= 0 && points <= 5) {
            var possibleTitles = ["Better Luck Next Time", "Great Effort", "Keep Trying", "Almost There", "You Can Do Better"];
            endTitleText = possibleTitles[Math.floor(Math.random() * possibleTitles.length)];
        }
        else if (points >= 6 && points <= 10) {
            var possibleTitles = ["A Promising Start", "Keep Pushing!", "On the Right Track", "Good Job!"];
            endTitleText = possibleTitles[Math.floor(Math.random() * possibleTitles.length)];
        }
        else if (points >= 11 && points <= 15) {
            var possibleTitles = ["Impressive Effort", "Great!", "On the Path to Success", "Well Played!"];
            endTitleText = possibleTitles[Math.floor(Math.random() * possibleTitles.length)];
        }
        else if (points >= 16 && points <= 19) {
            var possibleTitles = ["Amazing", "A True Champion", "You're on Fire!", "Top-notch Score", "Well Above Average"];
            endTitleText = possibleTitles[Math.floor(Math.random() * possibleTitles.length)];
        }
        else if (points == 20) {
            var possibleTitles = ["Got Them All!", "All 20!", "You Are Too Good"];
            endTitleText = possibleTitles[Math.floor(Math.random() * possibleTitles.length)];
        }

        if (seconds <= 0) {
            clearInterval(timer);
            container.style.display = 'none';
            pointsDisplay.style.display = 'none';
            stopwatchDisplay.style.display = 'none';
            endOverlay.style.display = 'block';
            endTitle.innerText = endTitleText;
            showScore.innerText = "Points: " + points;
            coins = coins + points;
        } else {
            const emojis = document.querySelectorAll('.emoji');
            const randomIndex = Math.floor(Math.random() * emojis.length);
            const emojiToActivate = emojis[randomIndex];
            emojis.forEach((emoji) => {
                emoji.classList.remove('active');
            });
            emojiToActivate.classList.add('active');
        }
        stopwatchDisplay.innerText = `${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? '0' : ''}${seconds % 60}`;
        seconds--;
    }, 1000);
}

let slideIndex = 1;

function showSlides(n) {
    const slides = document.querySelectorAll('.emoji-slide');
    slideIndex = (n > slides.length) ? 1 : (n < 1) ? slides.length : n;
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

showSlides(slideIndex);

emojiNumber.innerText = emojiList[0].emoji;
emojiPrice.innerText = emojiList[0].price + ' Coins';

buyButton.addEventListener('click', () => {
    if (coins >= emojiList[number].price) {
        emojiList[number].own = true;
        emojiList[number].amount++;
        coins = coins - emojiList[number].price;
        pointsDisplay.innerText = "Coins: " + coins;
        emojisOwned.push(emojiList[number].emoji);
    }
    else {
        alert("Sorry, you don't have enough coins.");
    }
});

prevButton.addEventListener('click', () => {
    number = (number - 1 + emojiList.length) % emojiList.length;
    emojiNumber.innerText = emojiList[number].emoji;
    emojiPrice.innerText = emojiList[number].price + ' Coins';
});
nextButton.addEventListener('click', () => {
    number = (number + 1) % emojiList.length;
    emojiNumber.innerText = emojiList[number].emoji;
    emojiPrice.innerText = emojiList[number].price + ' Coins';
});

for (let i = 0; i < emojis.length; i++) {
    const emojiBox = document.createElement('div');
    emojiBox.className = 'emojiBoxes';
    emojiBox.id = `emojiBox${i}`;
    emojiBox.innerText = emojis[i];
    displayOverlay.appendChild(emojiBox);
    emojiBox.addEventListener('click', () => {
        ownedOverlay.style.display = 'block';
        emojiBox.style.backgroundColor = '#333';
        closeButton.addEventListener('click', () => {
            ownedOverlay.style.display = 'none';
            emojiBox.style.backgroundColor = '#f0f0f0';
        });
    });
}

useButton.addEventListener('click', () => {
    if (emojiTitle.innerText !== 'Emojis you buy in the shop will appear here.') {
        let spot = 0;
        for (let x = 0; x < emojisOwned.length; x++) {
            let currentEmojiTitle = emojiTitle.innerText;
            if (currentEmojiTitle !== emojisOwned[x]) {
                spot++;
            }
            else {
                break;
            }
        }
        for (let i = 0; i < emojis.length; i++) {
            let currentEmojiBox = document.getElementById(`emojiBox${i}`);
            if (currentEmojiBox.style.backgroundColor === 'rgb(51, 51, 51)') {
                let emojiTitleText = emojiTitle.innerText;
                emojiTitle.innerText = currentEmojiBox.innerText;
                currentEmojiBox.innerText = emojiTitleText;
                currentEmojiBox.style.backgroundColor = '#f0f0f0';
                emojis[i] = currentEmojiBox.innerText;
            }
        }
        emojisOwned[spot] = emojiTitle.innerText;
        console.log(emojisOwned);
    }
});

next.addEventListener('click', () => {
    if (emojiTitle.innerText !== 'Emojis you buy in the shop will appear here.') {
        x = (x + 1) % emojisOwned.length;
        emojiTitle.innerText = emojisOwned[x];
    }
});

prev.addEventListener('click', () => {
    if (emojiTitle.innerText !== 'Emojis you buy in the shop will appear here.') {
        x = (x - 1 + emojisOwned.length) % emojisOwned.length;
        emojiTitle.innerText = emojisOwned[x];
    }
});

displayButton.addEventListener('click', () => {
    ownedOverlay.style.display = 'none';
    endOverlay.style.display = 'none';
    displayOverlay.style.display = "block";
    stopwatchDisplay.style.display = "block";
    stopwatchDisplay.style.cursor = "pointer";
    stopwatchDisplay.innerText = "←";

    stopwatchDisplay.addEventListener('click', function clickHandler() {
        var emojiBoxes = document.getElementsByClassName('emojiBoxes');
        for (var i = 0; i < emojiBoxes.length; i++) {
            emojiBoxes[i].style.backgroundColor = '#f0f0f0';
        }
        endOverlay.style.display = 'block';
        displayOverlay.style.display = "none";
        container.style.display = 'none';
        shopOverlay.style.display = 'none';
        pointsDisplay.style.display = 'none';
        stopwatchDisplay.style.display = 'none';
        stopwatchDisplay.style.cursor = "auto";
        stopwatchDisplay.removeEventListener('click', clickHandler);
    });

    if (emojisOwned.length > 0) {
        emojiTitle.innerText = emojisOwned[0];
    } else {
        emojiTitle.innerText = 'Emojis you buy in the shop will appear here.';
    }
});

shopButton.addEventListener('click', () => {
    shopOverlay.style.display = "block";
    pointsDisplay.style.display = "block";
    stopwatchDisplay.style.display = "block";
    stopwatchDisplay.style.cursor = "pointer";
    endOverlay.style.display = "none";
    pointsDisplay.innerText = "Coins: " + coins;
    stopwatchDisplay.innerText = "←";
    stopwatchDisplay.addEventListener('click', function clickHandler() {
        endOverlay.style.display = 'block';
        container.style.display = 'none';
        shopOverlay.style.display = 'none';
        pointsDisplay.style.display = 'none';
        stopwatchDisplay.style.display = 'none';
        stopwatchDisplay.style.cursor = "auto";
        stopwatchDisplay.removeEventListener("click", clickHandler);
    });    
});