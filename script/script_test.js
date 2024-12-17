const exitButton = document.getElementById("exit");
const form1 = document.getElementById("form1");
const repeatButton = document.getElementById("repeat");
const goToResultsButton = document.getElementById("goToResults");
const resultAnswers = document.getElementById("resultAnswers");
const errorCheck = document.getElementById("errorCheck");

// обработчик кнопки "перейти к результатам"
goToResultsButton.addEventListener("click", () => {
    const correctAnswersArray = ["Бельдам", "Джонс", "1", "1", "1", "1"]; // для проверки
    const correctAnswersText = ["Бельдам", "Джонс", "Закильберри", "Орегон", "Розовый дворец", "Умел разговаривать"]; // для теста

    const userAnswers = [
        document.getElementById("question1").value,
        document.getElementById("question2").value,
        document.querySelector('input[name="q3"]:checked')?.value,
        document.querySelector('input[name="q4"]:checked')?.value,
        document.querySelector('input[name="q5"]:checked')?.value,
        document.querySelector('input[name="q6"]:checked')?.value,
    ];

    let allAnswered = true;

    // проверка на пропуски
    userAnswers.forEach((answer) => {
        if (!answer) {
            allAnswered = false;
        }
    });
    if (!allAnswered) {
        errorCheck.textContent = "Вы не ответили на все вопросы.";
        errorCheck.style.display = "block";
        return;
    }
    errorCheck.style.display = "none";

    // проверка ответов и вывод
    userAnswers.forEach((answer, index) => {
        const correctAnswer = correctAnswersArray[index];
        const correctText = correctAnswersText[index]; // текстовый вариант ответа (для теста)

        if (answer === correctAnswer) {
            document.getElementById(`q${index + 1}Error`).textContent = "Ответ правильный!";
            document.getElementById(`q${index + 1}Error`).className = "error-test correct";
        } else {
            document.getElementById(`q${index + 1}Error`).textContent = `Ответ неправильный, правильный ответ: ${correctText}`;
            document.getElementById(`q${index + 1}Error`).className = "error-test incorrect";
        }
    });

    // подсчет правильных ответов
    const correctAnswers = userAnswers.filter((answer, index) => answer === correctAnswersArray[index]).length;
    const score = correctAnswers * 10;

    resultAnswers.textContent = `Вы ответили верно на ${correctAnswers} из 6 вопросов. Ваши баллы: ${score} из 60 возможных.`;
    document.querySelector('.results-container').style.display = "block";
});

// обработчик кнопки "повторить"
repeatButton.addEventListener("click", () => {
    form1.reset();
    const errorElements = document.querySelectorAll('.error-test');
    errorElements.forEach(element => {
        element.textContent = "";
        element.className = "error-test";
    });
    errorCheck.textContent = "";
    errorCheck.style.display = "none";
    document.querySelector('.results-container').style.display = "none";
});

// обработчик кнопки выйти
if (exitButton) {
    exitButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (form1) form1.reset();
        // удаление данных из локального хранилища
        localStorage.removeItem("userLogin");
        // возврат на главную страницу
        window.location.href = "../index.html";
    });
}

// отображение сообщения добро пожаловать + имя, которое ввел пользователь
const userLogin = localStorage.getItem("userLogin");
const welcomeMessage = document.getElementById("welcomeMessage");

if (userLogin) {
    welcomeMessage.textContent = `Добро пожаловать, ${userLogin}!`;
}