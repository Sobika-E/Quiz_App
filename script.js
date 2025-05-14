document.addEventListener('DOMContentLoaded', () => {
    // 🔙 BACK button logic (NEW)
    const backBtns = document.querySelectorAll(".back-btn");
    backBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    });

    let currentDept, currentQuestion = 0, score = 0, timer, timeLeft = 30, mistakes = {}, badges = [], currentLevel;
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || {};
    const quizHistory = JSON.parse(localStorage.getItem('quizHistory')) || {};
    const currentUser = JSON.parse(sessionStorage.getItem('user'));
    const username = currentUser?.username || 'Anonymous';

    const departments = {
        "Coding": { icon: "fas fa-code" },
        "Math": { icon: "fas fa-calculator" },
        "Science": { icon: "fas fa-flask" },
        "History": { icon: "fas fa-landmark" },
        "Geography": { icon: "fas fa-globe" },
        "Literature": { icon: "fas fa-book" },
        "Physics": { icon: "fas fa-atom" },
        "Chemistry": { icon: "fas fa-vial" },
        "Biology": { icon: "fas fa-leaf" },
        "Art": { icon: "fas fa-paint-brush" }
    };

    // Navigation
    document.getElementById('nav-try-quiz')?.addEventListener('click', () => window.location.href = 'login.html');
    document.getElementById('action-try-quiz')?.addEventListener('click', () => window.location.href = 'login.html');

    document.getElementById('ask-btn')?.addEventListener('click', () => {
        const query = document.getElementById('askAnythingBox').value.trim().toLowerCase();
        const validDepts = Object.keys(departments).map(d => d.toLowerCase());
        if (validDepts.includes(query)) {
            localStorage.setItem('selectedDepartment', query);
            window.location.href = 'quiz.html';
        } else if (query === 'leaderboard') {
            window.location.href = 'leaderboard.html';
        } else {
            alert('Ask result under process');
        }
    });

    // Signup
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('signup-username').value;
            const password = document.getElementById('signup-password').value;

            try {
                const res = await fetch('/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });

                const message = await res.text();
                alert(message);
                if (res.status === 200) window.location.href = 'login.html';
            } catch (error) {
                alert("Something went wrong during signup!");
                console.error(error);
            }
        });
    }

    // Login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            try {
                const res = await fetch('/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });

                if (res.status === 200) {
                    const userData = await res.json();
                    sessionStorage.setItem('user', JSON.stringify(userData));
                    localStorage.setItem('user', JSON.stringify(userData)); // ✅ add this line
                    window.location.href = 'home.html';
                }
                 else {
                    const error = await res.text();
                    alert(error);
                }
            } catch (error) {
                console.error(error);
                alert("Login failed!");
            }
        });
    }

    document.getElementById('login-back-btn')?.addEventListener('click', () => window.location.href = 'index.html');
    document.getElementById('signup-back-btn')?.addEventListener('click', () => window.location.href = 'index.html');

    // Home
    const deptGrid = document.getElementById('dept-grid');
    if (deptGrid) {
        Object.entries(departments).forEach(([dept, { icon }]) => {
            const card = document.createElement('div');
            card.className = 'dept-card';
            card.innerHTML = `<i class="${icon}"></i><span>${dept}</span>`;
            card.addEventListener('click', () => {
                localStorage.setItem('selectedDepartment', dept.toLowerCase());
                window.location.href = 'quiz.html';
            });
            deptGrid.appendChild(card);
        });
    }

    document.getElementById('home-back-btn')?.addEventListener('click', () => window.location.href = 'index.html');
    document.getElementById('profile-btn')?.addEventListener('click', () => window.location.href = 'dashboard.html');
    const selectedDept = localStorage.getItem('selectedDepartment');
if (document.getElementById('dept-title')) {
    currentDept = selectedDept;
    const properCaseDept = currentDept.charAt(0).toUpperCase() + currentDept.slice(1);
    document.getElementById('dept-title').textContent = properCaseDept;
    document.getElementById('dept-icon').className = departments[properCaseDept]?.icon;

    const deptLeaderboard = leaderboard[currentDept] || [];
    const leaderboardList = document.getElementById('dept-leaderboard-list');
    deptLeaderboard.sort((a, b) => b.score - a.score).slice(0, 10).forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.user}: ${entry.score}`;
        leaderboardList.appendChild(li);
    });
}

document.getElementById('take-quiz-btn')?.addEventListener('click', () => {
    document.getElementById('take-quiz-btn').classList.add('hidden');
    document.getElementById('level-select').classList.remove('hidden');
});

document.getElementById('start-quiz-btn')?.addEventListener('click', () => {
    currentLevel = document.getElementById('level').value;
    document.getElementById('level-select').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('level-display').textContent = `Level: ${currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1)}`;
    startQuiz();
});

function startQuiz() {
    const properDept = currentDept.charAt(0).toUpperCase() + currentDept.slice(1);
    const questions = questionSets[properDept][currentLevel];
    currentQuestion = 0;
    score = 0;
    mistakes = {};
    badges = [];
    loadQuestion(questions);
}

function loadQuestion(questions) {
    if (currentQuestion >= questions.length) return endQuiz();
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.q;
    const optionsGrid = document.getElementById('options');
    optionsGrid.innerHTML = '';
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.addEventListener('click', () => checkAnswer(opt, q.answer, questions));
        optionsGrid.appendChild(btn);
    });
    startTimer(questions);
}

function startTimer(questions) {
    timeLeft = 30;
    document.getElementById('timer').textContent = `Time: ${timeLeft}s`;
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Time: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            mistakes[questions[currentQuestion].q] = { correct: questions[currentQuestion].answer, chosen: "Time Out" };
            currentQuestion++;
            loadQuestion(questions);
        }
    }, 1000);
}

function checkAnswer(selected, correct, questions) {
    clearInterval(timer);
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(btn => {
        if (btn.textContent === correct) btn.classList.add('correct');
        if (btn.textContent === selected && selected !== correct) btn.classList.add('incorrect');
        btn.disabled = true;
    });
    if (selected === correct) {
        score++;
        if (timeLeft >= 25) badges.push("Quick Thinker");
        if (currentLevel === 'hard') badges.push("Expert");
    } else {
        mistakes[questions[currentQuestion].q] = { correct, chosen: selected };
    }
    setTimeout(() => {
        currentQuestion++;
        loadQuestion(questions);
    }, 1000);
}

function endQuiz() {
    document.getElementById('quiz').classList.add('hidden');
    const results = document.getElementById('results');
    results.classList.remove('hidden');

    const properDept = currentDept.charAt(0).toUpperCase() + currentDept.slice(1);
    document.getElementById('score').textContent = `Score: ${score}/${questionSets[properDept][currentLevel].length}`;
    document.getElementById('badges').textContent = badges.length ? `Badges: ${badges.join(', ')}` : 'No badges earned';

    let mistakesText = 'Mistakes:\n';
    Object.entries(mistakes).forEach(([q, { correct, chosen }]) => {
        mistakesText += `${q} - Correct: ${correct}, Chosen: ${chosen}\n`;
    });
    document.getElementById('mistakes').textContent = mistakesText === 'Mistakes:\n' ? 'No mistakes!' : mistakesText;

    leaderboard[currentDept] = leaderboard[currentDept] || [];
    leaderboard[currentDept].push({ user: username, score });
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    quizHistory[username] = quizHistory[username] || [];
    quizHistory[username].push({ dept: currentDept, level: currentLevel, score, date: new Date().toLocaleString() });
    localStorage.setItem('quizHistory', JSON.stringify(quizHistory));

    // ✅ NEW: Update user score in MongoDB
    updateUserScore(score);
}

// ✅ NEW FUNCTION ADDED BELOW
async function updateUserScore(scoreEarned) {
    const user = JSON.parse(localStorage.getItem("user") || sessionStorage.getItem("user"));
    if (!user || !user.username) return;

    try {
        const res = await fetch('/update-score', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: user.username,
                score: scoreEarned
            })
        });

        if (res.ok) {
            const updatedUser = await res.json();
            // ✅ Update local storage/session with new data
            localStorage.setItem("user", JSON.stringify(updatedUser));
            sessionStorage.setItem("user", JSON.stringify(updatedUser));
        } else {
            console.error("Failed to update user score");
        }
    } catch (err) {
        console.error("Error updating user score:", err);
    }
}

document.getElementById('quiz-back-btn')?.addEventListener('click', () => window.location.href = 'home.html');
document.getElementById('dept-back-btn')?.addEventListener('click', () => window.location.href = 'home.html');
document.getElementById('back-to-dept-btn')?.addEventListener('click', () => {
    document.getElementById('results').classList.add('hidden');
    document.getElementById('take-quiz-btn').classList.remove('hidden');
});


    //Dashboard
    if (document.getElementById('dashboard-section')) {
        document.getElementById('profile-username').textContent = username;
        const history = quizHistory[username] || [];
        document.getElementById('quizzes-taken').textContent = history.length;
        const totalScore = history.reduce((sum, entry) => sum + entry.score, 0);
        const avgScore = history.length ? (totalScore / history.length).toFixed(1) : 0;
        document.getElementById('avg-score').textContent = `${avgScore}%`;
        const deptScores = {};
        history.forEach(entry => {
            deptScores[entry.dept] = (deptScores[entry.dept] || 0) + entry.score;
        });
        const topDept = Object.entries(deptScores).sort((a, b) => b[1] - a[1])[0];
        document.getElementById('top-dept').textContent = topDept ? topDept[0] : 'None';
    }
});
document.getElementById("create-quiz-btn").addEventListener("click", function() {
    window.location.href = "a.html";  // This will navigate to a.html
});

