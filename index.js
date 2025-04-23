const questions= [
    {
        questions:"Abaisse-langue refer to?",
        answers:[
            { text: "Removal", correct: false},
            { text: "Tongue lowerer", correct: true},
            { text: "Tarpaulin", correct: false},
            { text: "Slaughter", correct: false},
            { text: "Tongue", correct: false},
        ]
    },
    {
        questions:"Abat-jour refer to?",
        answers:[
            { text: "Abbot", correct: false},
            { text: "Baboon", correct: false},
            { text: "Lampshade", correct: true},
            { text: "Offal-day", correct: false},
            { text: "sububs", correct: false},
        ]
    },
    {
        questions:"Tu gêles refer to?",
        answers:[
            { text: "You are cold", correct: false},
            { text: "You are kiddind", correct: false},
            { text: "You are freezing", correct: true},
            { text: "You are pain", correct: false},
            { text: "You are sadly", correct: false},
        ]
    },
    {
        questions:"Tu as raison refer to?",
        answers:[
            { text: "You are right", correct: true},
            { text: "You are welcome", correct: false},
            { text: "You are fine", correct: false},
            { text: "You are kidding", correct: false},
            { text: "You are in love", correct: false},
        ]
    },
    {
        questions:"To move out refer to?",
        answers:[
            { text: "To disturp", correct: false},
            { text: "To vacate", correct: true},
            { text: "To enter", correct: false},
            { text: "To visit", correct: false},
            { text: "To get out", correct: false},
        ]
    },
    {
        questions:"Suburbs refer to?",
        answers:[
            { text: "fatal", correct: false},
            { text: "Baboon", correct: false},
            { text: "Lampshade", correct: true},
            { text: "Offal-day", correct: false},
            { text: "sububs", correct: false},
        ]
    },
    {
        questions:"Abat-jour refer to?",
        answers:[
            { text: "Abbot", correct: false},
            { text: "Baboon", correct: false},
            { text: "Lampshade", correct: true},
            { text: "Offal-day", correct: false},
            { text: "sububs", correct: false},
        ]
    },
];



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = "Next";
showQuestion();
}

function showQuestion() {
resetState();
const currentQuestion = questions[currentQuestionIndex];
questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.questions}`;

currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
    button.dataset.correct = true;
    }
    button.addEventListener("click", selectAnswer);
});
}

function resetState() {
nextButton.style.display = "none";
while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
}
}

function selectAnswer(e) {
const selectedBtn = e.target;

  // Vérification si le bouton sélectionné existe et a une classe
if (!selectedBtn || !selectedBtn.classList) {
    console.error("Le bouton sélectionné est invalide ou n'a pas de classList.");
    return;
}

const isCorrect = selectedBtn.dataset.correct === "true";

if (isCorrect) {
    selectedBtn.classList.add("correct"); // Ajoute la classe "correct" au bouton
    score++;
} else {
    selectedBtn.classList.add("incorrect"); // Ajoute la classe "incorrect" au bouton
}

  // Désactiver tous les boutons après une réponse
Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct"); // Marque les réponses correctes
    }
    button.disabled = true; // Désactive tous les boutons
});

  nextButton.style.display = "block"; // Affiche le bouton "Next"
}

function showScore() {
resetState();
questionElement.innerHTML = `Vous avez marqué ${score} sur ${questions.length} !`;
nextButton.innerHTML = "Rejouer";
nextButton.style.display = "block";
}

function handleNextButton() {
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
    showQuestion();
} else {
    showScore();
}
}

nextButton.addEventListener("click", () => {
if (currentQuestionIndex < questions.length) {
    handleNextButton();
} else {
    startQuiz();
}
});

startQuiz();








// JavaScript de validation
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire pour effectuer la validation
    
    var form = event.target;
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');

    // Réinitialiser les messages d'erreur
    form.querySelectorAll('.invalid-feedback').forEach(function(item) {
        item.style.display = 'none';
    });

    var isValid = true;

    // Validation de l'email
    if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        email.classList.add('is-invalid');
        email.nextElementSibling.style.display = 'block';
        isValid = false;
    }

    // Validation du mot de passe et confirmation
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        confirmPassword.nextElementSibling.style.display = 'block';
        isValid = false;
    }

    // Si tout est valide, soumettre le formulaire
    if (isValid) {
        // Logique de soumission du formulaire (par exemple, via une API)
        alert('Compte créé avec succès !');
    }
});