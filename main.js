let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.querySelector("#user-input");
let resultText = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let mainTitle = document.getElementById("main-title");
let gameOver = false;
let chance = 5;
let userValueList = [];

chanceArea.innerHTML = `남은 기회:${chance}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput);

function pickRandomNumber() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

function play() {
    const userValue = parseInt(userInput.value);
    if(userValue < 1 || userValue > 100){
        resultText.textContent = "1과 100사이 숫자를 입력해 주세요";
        return;
    }

    if(userValueList.includes(userValue)){
        resultText.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력해 주세요";
        return;
    }

    chance--;
    chanceArea.textContent = `남은 기회:${chance}`;
    userValueList.push(userValue);

    resultText.classList.remove("success", "failure");

    if(userValue < computerNum) {
        resultText.textContent = "UP!!";
    } else if(userValue > computerNum) {
        resultText.textContent = "DOWN!!";
    } else {
        resultText.textContent = "그리핀도르 기숙사 방입니다!";
        resultText.classList.add("success");
        document.getElementById("game-image").src = "https://mblogthumb-phinf.pstatic.net/20160116_124/lanseol0304_1452915982510O1kXq_JPEG/http3A2F2F40.media.tumblr.com2F0f51f63adda4b7be3191d8529ebfa8542Ftumblr_mhi.jpeg?type=w800";
        mainTitle.textContent = "축하합니다! 그리핀도르 기숙사 방을 찾았습니다!";
        gameOver = true;
    }

    if (chance == 0 && userValue !== computerNum) {
        resultText.textContent = "으악 볼드모트 방이에요!";
        resultText.classList.add("failure");
        document.getElementById("game-image").src = "https://i2.ruliweb.com/img/20/07/19/1736585a70bfb502.jpeg";
        mainTitle.textContent = "실패했습니다. 다음에 다시 도전하세요!";
        gameOver = true;
    }

    if (gameOver == true) {
        playButton.disabled = true;
    }
}

function focusInput() {
    userInput.value = "";
}

function reset() {
    userInput.value = "";
    pickRandomNumber();
    resultText.textContent = "결과값이 여기 나옵니다";
    document.getElementById("game-image").src = "https://img.freepik.com/premium-photo/enter-magical-world-hogwarts-with-stunning-hd-virtual-backgrounds_983420-106592.jpg"; // 리셋할 때 초기 이미지로 변경
    mainTitle.textContent = "해리포터인 당신 그리핀도르 기숙사 방으로 가야합니다!";
    gameOver = false;
    playButton.disabled = false;
    chance = 5;
    chanceArea.innerHTML = `남은 기회:${chance}`;
    userValueList = [];
    resultText.classList.remove("success", "failure");
}

pickRandomNumber();



