const exitButton = document.getElementById("exit");
const logoutButton = document.getElementById("logout");
const form1 = document.getElementById("form1");

// обработчик кнопки выйти
if (exitButton) {
    exitButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (form1) form1.reset();
        // удаление данных из локального хранилища
        localStorage.removeItem("userLogin");
        localStorage.removeItem("userBirthdate");
        localStorage.removeItem("userGender");
        localStorage.removeItem("testResult");
        // возврат на главную страницу
        window.location.href = "../index.html";
    });
}

// Получаем данные из локального хранилища
const savedLogin = localStorage.getItem("userLogin");
const savedBirthdate = localStorage.getItem("userBirthdate");
const savedGender = localStorage.getItem("userGender");
const savedTestResult = localStorage.getItem("testResult");

if (savedTestResult === null || savedTestResult === "") {
    document.getElementById("resultAnswers").textContent = "Тест еще не пройден";
} else {
    document.getElementById("resultAnswers").textContent = savedTestResult;
}

// Вставляем данные в соответствующие элементы
document.getElementById("resultLogin").textContent = savedLogin;
document.getElementById("resultDate").textContent = savedBirthdate;
document.getElementById("resultGender").textContent = savedGender;


if (logoutButton) {
    logoutButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (form1) form1.reset();
        // удаление данных из локального хранилища
        localStorage.removeItem("testResult");
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