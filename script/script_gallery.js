const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideInfo = document.getElementById('number-slide');
const exitButton = document.getElementById("exit");
const form1 = document.getElementById("form1");

let currentSlide = 0;
const totalSlides = slides.length;

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    slideInfo.textContent = `${currentSlide + 1} слайд из ${totalSlides}`;
}

// обработчик для кнопки "вперед"
nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSliderPosition();
    }
});

// обработчик для кнопки "назад"
prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSliderPosition();
    }
});

updateSliderPosition();

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
