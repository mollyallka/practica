const form1 = document.getElementById("form1");
const nameInput = document.getElementById("name");
const birthdateInput = document.getElementById("birthdate");
const nameError = document.getElementById("nameError");
const dateError = document.getElementById("dateError");
const next1 = document.getElementById("next1");
const exitButton = document.getElementById("exit");

// Проверка имени
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

// Проверка даты рождения
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

// Обработчик кнопки перехода на сайт
if (next1) {
    next1.addEventListener("click", () => {
        const isNameValid = validateName();
        const isBirthdateValid = validateBirthdate();

        if (isNameValid && isBirthdateValid) {
            const userLogin = nameInput.value;

            // Сохранение имени пользователя в локальном хранилище
            localStorage.setItem("userLogin", userLogin);

            // Переход на страницу описания
            window.location.href = "/практика/html/ind.html";
        }
    });
}

// Обработчик кнопки выйти
if (exitButton) {
    exitButton.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение кнопки
        // Сбрасываем форму
        if (form1) form1.reset();

        // Удаляем данные из локального хранилища
        localStorage.removeItem("userLogin");

        // Возвращаемся на главную страницу
        window.location.href = "/практика/index.html";
    });
}

// Отображение сообщения добро пожаловать + имя, которое ввел пользователь
const userLogin = localStorage.getItem("userLogin");
const welcomeMessage = document.getElementById("welcomeMessage");

if (userLogin) {
    welcomeMessage.textContent = `Добро пожаловать, ${userLogin}!`;
}
