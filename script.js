function askCosmo() {

    let question = document.getElementById("question").value;

    if (question.trim() === "") {
        return;
    }

    let chat = document.getElementById("chat");

    chat.innerHTML += `
    <div class="user-message">
        You: ${question}
    </div>
    `;

    let q = question.toLowerCase();
    let answer = "";

    if (q.includes("mercury")) {
        answer = "Mercury is the closest planet to the Sun and the smallest planet in our solar system.";
    }

    else if (q.includes("venus")) {
        answer = "Venus is the hottest planet because its thick atmosphere traps heat.";
    }

    else if (q.includes("earth")) {
        answer = "Earth is our home planet and the only known planet with life.";
    }

    else if (q.includes("mars")) {
        answer = "Mars is called the Red Planet because iron oxide, also called rust, makes its surface look red.";
    }

    else if (q.includes("jupiter")) {
        answer = "Jupiter is the largest planet in our solar system.";
    }

    else if (q.includes("saturn")) {
        answer = "Saturn is famous for its beautiful rings made of ice and rocks.";
    }

    else if (q.includes("moon")) {
        answer = "The Moon is Earth's natural satellite and affects ocean tides.";
    }

    else if (q.includes("sun")) {
        answer = "The Sun is a star that gives light and heat to our solar system.";
    }

    else if (q.includes("star")) {
        answer = "Stars are giant balls of hot gas that produce their own light.";
    }

    else if (q.includes("galaxy")) {
        answer = "A galaxy is a huge group of stars, planets, gas, and dust held together by gravity.";
    }

    else if (q.includes("black hole")) {
        answer = "A black hole is a place in space where gravity is extremely strong.";
    }

    else if (q.includes("nasa")) {
        answer = "NASA is a space agency that explores space and studies planets.";
    }

    else {
        answer = "I am still learning about that topic. Ask me about planets, stars, galaxies, or space missions.";
    }


    chat.innerHTML += `
    <div class="cosmo-message">
        Cosmo 🚀: ${answer}
    </div>
    `;

    speakCosmo(answer);

    document.getElementById("question").value = "";

    chat.scrollTop = chat.scrollHeight;
}





function startListening() {

    if (!('webkitSpeechRecognition' in window)) {

        alert("Your browser does not support voice recognition.");

        return;
    }


    let recognition = new webkitSpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();


    recognition.onresult = function(event) {

        let speechText = event.results[0][0].transcript;

        document.getElementById("question").value = speechText;

        askCosmo();

    };

}
function startQuiz() {

    let questions = [

        {
            question: "Which planet is called the Red Planet?",
            options: "A) Earth\nB) Mars\nC) Jupiter",
            answer: "b",
            explanation: "Mars is called the Red Planet because iron oxide (rust) makes its surface look red."
        },

        {
            question: "Which is the largest planet in our solar system?",
            options: "A) Saturn\nB) Earth\nC) Jupiter",
            answer: "c",
            explanation: "Jupiter is the largest planet in our solar system."
        },

        {
            question: "Which planet has famous rings?",
            options: "A) Saturn\nB) Mars\nC) Venus",
            answer: "a",
            explanation: "Saturn has beautiful rings made of ice and rocks."
        },

        {
            question: "What is the name of our galaxy?",
            options: "A) Andromeda\nB) Milky Way\nC) Orion",
            answer: "b",
            explanation: "Our solar system is located inside the Milky Way galaxy."
        },

        {
            question: "What is the Sun?",
            options: "A) Planet\nB) Moon\nC) Star",
            answer: "c",
            explanation: "The Sun is a star that gives light and heat to Earth."
        }

    ];


    let randomQuestion = questions[Math.floor(Math.random() * questions.length)];


    let userAnswer = prompt(
        "🚀 Space Quiz\n\n" +
        randomQuestion.question +
        "\n\n" +
        randomQuestion.options
    );


    if (userAnswer === null) {
        return;
    }


    userAnswer = userAnswer.toLowerCase().trim();


    let chat = document.getElementById("chat");


    if (userAnswer === randomQuestion.answer) {

        let message = "Correct! 🎉 " + randomQuestion.explanation;

        chat.innerHTML += `
        <div class="cosmo-message">
        ✅ ${message}
        </div>
        `;

        speakCosmo(message);

    }

    else {

        let message = "Wrong answer. The correct answer is option " 
        + randomQuestion.answer.toUpperCase() 
        + ". " 
        + randomQuestion.explanation;


        chat.innerHTML += `
        <div class="cosmo-message">
        ❌ ${message}
        </div>
        `;

        speakCosmo(message);

    }


    chat.scrollTop = chat.scrollHeight;

}
function planetInfo(planet) {

    let chat = document.getElementById("chat");

    let info = "";


    if (planet === "Mercury") {

        info = "Mercury is the closest planet to the Sun.";

    }

    else if (planet === "Venus") {

        info = "Venus is the hottest planet in our solar system.";

    }

    else if (planet === "Earth") {

        info = "Earth is the only known planet with life.";

    }

    else if (planet === "Mars") {

        info = "Mars is the Red Planet and a target for future human missions.";

    }

    else if (planet === "Jupiter") {

        info = "Jupiter is the biggest planet and has a giant storm called the Great Red Spot.";

    }

    else if (planet === "Saturn") {

        info = "Saturn has beautiful rings made of ice and rocks.";

    }


    chat.innerHTML += `
    <div class="cosmo-message">
    Cosmo 🚀: ${info}
    </div>
    `;


    speakCosmo(info);

    chat.scrollTop = chat.scrollHeight;

}





function speakCosmo(text) {

    let speech = new SpeechSynthesisUtterance(text);

    speech.rate = 1;

    speech.pitch = 1;

    speech.volume = 1;


    window.speechSynthesis.speak(speech);

}
