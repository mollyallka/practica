const form1 = document.getElementById("form1");
const nameInput = document.getElementById("name");
const birthdateInput = document.getElementById("birthdate");
const nameError = document.getElementById("nameError");
const dateError = document.getElementById("dateError");
const next1 = document.getElementById("next1");
const exitButton = document.getElementById("exit");

// проверка имени
function validateName() {
    if (!nameInput.checkValidity()) {
        nameError.textContent = "Логин должен содержать только русские буквы и цифры, от 4 до 10 символов.";
        nameError.style.display = "block";
        return false;
    } else {
        nameError.style.display = "none";
        return true;
    }
}

// проверка даты рождения
function validateBirthdate() {
    if (!birthdateInput.value) {
        dateError.textContent = "Вы не ввели дату рождения.";
        dateError.style.display = "block";
        return false;
    } else if (!birthdateInput.checkValidity()) {
        dateError.textContent = "Введите корректную дату рождения.";
        dateError.style.display = "block";
        return false;
    } else {
        dateError.style.display = "none";
        return true;
    }
}

// обработчик кнопки перехода на сайт
if (next1) {
    next1.addEventListener("click", () => {
        const isNameValid = validateName();
        const isBirthdateValid = validateBirthdate();

        if (isNameValid && isBirthdateValid) {
            const userLogin = nameInput.value;
            // сохранение имени пользователя в локальном хранилище
            localStorage.setItem("userLogin", userLogin);
            // переход на страницу описания
            window.location.href = "/практика/html/ind.html";
        }
    });
}

// обработчик кнопки выйти
if (exitButton) {
    exitButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (form1) form1.reset();
        // удаление данных из локального хранилища
        localStorage.removeItem("userLogin");
        // возврат на главную страницу
        window.location.href = "/практика/index.html";
    });
}

// отображение сообщения добро пожаловать + имя, которое ввел пользователь
const userLogin = localStorage.getItem("userLogin");
const welcomeMessage = document.getElementById("welcomeMessage");

if (userLogin) {
    welcomeMessage.textContent = `Добро пожаловать, ${userLogin}!`;
}
