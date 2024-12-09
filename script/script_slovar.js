const termsList = document.getElementById('persList');
const descriptionDiv = document.getElementById('description');
const searchInput = document.getElementById('searchInput');
const exitButton = document.getElementById("exit");
const form1 = document.getElementById("form1");

// обработчик описания по клику на элемент
termsList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'LI') {
        const description = target.getAttribute('data-description');
        descriptionDiv.textContent = description || "Описание отсутствует";
    }
});

// фильтрация списка терминов
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    const items = termsList.querySelectorAll('li');

    // очистка описания при поиске
    descriptionDiv.textContent = "";

    items.forEach(item => {
        const term = item.textContent.toLowerCase();
        item.style.display = term.includes(filter) ? '' : 'none';
    });
});



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