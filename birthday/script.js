document.getElementById('loginButton').addEventListener('click', function() {
    const password = document.getElementById('passwordInput').value;
    
    // Check if the password is correct (you can set your own password here)
    if (password === '07') {
        window.location.href = 'page1.html';
    } else {
        alert('Incorrect password, please try again!');
    }
});

// Surprise button → page 2
const surpriseBtn = document.getElementById("surpriseBtn");
if (surpriseBtn) {
    surpriseBtn.addEventListener("click", () => {
        window.location.href = "page2.html";
    });
}

// Music play / pause
const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");

let isPlaying = false;

if (musicBtn && song) {
    musicBtn.addEventListener("click", () => {
        if (!isPlaying) {
            song.play();
            musicBtn.textContent = "⏸ Pause Song";
        } else {
            song.pause();
            musicBtn.textContent = "🎵 Play Song";
        }
        isPlaying = !isPlaying;
    });
}






document.addEventListener("DOMContentLoaded", () => {

    const checkBtn = document.getElementById("checkBtn");
    const meterFill = document.getElementById("meterFill");
    const meterText = document.getElementById("meterText");

    if (!checkBtn || !meterFill || !meterText) {
        console.log("Page 2 elements not found");
        return;
    }

    checkBtn.addEventListener("click", () => {
        let value = 0;
        meterText.textContent = "Measuring cuteness... 💕";
        checkBtn.disabled = true;

        const interval = setInterval(() => {
            value += 10;
            meterFill.style.width = value + "%";

            if (value >= 100) {
                clearInterval(interval);
                meterText.textContent = "Cuteness OVERLOADED 💖🥰";

                setTimeout(() => {
                    window.location.href = "page3.html";
                }, 2000);
            }
        }, 300);
    });

});








// ===== PAGE 3 QUESTION LOGIC =====
const submitBtn = document.getElementById("submitAnswer");
const answerInput = document.getElementById("answerInput");
const resultMsg = document.getElementById("resultMsg");

// Correct answer (you can change this)
const correctAnswer = "you";

if (submitBtn) {
    submitBtn.addEventListener("click", () => {
        const userAnswer = answerInput.value.trim().toLowerCase();

        if (userAnswer === correctAnswer) {
            resultMsg.style.color = "#28a745";
            resultMsg.textContent = "Correct 💖 Redirecting...";

            setTimeout(() => {
                window.location.href = "page4.html";
            }, 1500);
        } else {
            resultMsg.style.color = "#d6336c";
            resultMsg.textContent = "Oops! Try again 🥺";
        }
    });
}


const fireworksContainer = document.querySelector(".fireworks");
const fireSound = document.getElementById("fireSound");

// Play sound once
    setTimeout(() => {
        fireSound.play().catch(()=>{});
    }, 800);

    // Create 25 big fireworks
for (let i = 0; i < 25; i++) {
    const fw = document.createElement("div");
    fw.className = "firework";
    fw.style.left = Math.random() * 100 + "vw";
    fw.style.top = Math.random() * 60 + "vh";
    fw.style.animationDelay = Math.random() * 4 + "s";
    fireworksContainer.appendChild(fw);
}

// Auto redirect after fireworks
setTimeout(() => {
    window.location.href = "page6.html";
}, 12000); // 12 seconds Diwali show






const nextBtn = document.getElementById("nextBtn");

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        window.location.href = "page7.html";
    });
}





// Page 7 - Sorry button
const sorryBtn = document.getElementById("sorryBtn");
const sorryMsg = document.getElementById("sorryMsg");

if (sorryBtn && sorryMsg) {
    sorryBtn.addEventListener("click", () => {
        sorryMsg.classList.remove("hidden");
    });
}
