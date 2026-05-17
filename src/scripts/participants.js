const participants = [
    {
        name: "Хозе-Рауль Капабланка",
        title: "Чемпион мира по шахматам",
        photo: "src/images/participants/participants__item-1.png",
        link: "#",
    },
    {
        name: "Эммануил Ласкер",
        title: "Чемпион мира по шахматам",
        photo: "",
        link: "#",
    },
    {
        name: "Александр Алехин",
        title: "Чемпион мира по шахматам",
        photo: "",
        link: "#",
    },
    {
        name: "Арон Нимцович",
        title: "Чемпион мира по шахматам",
        photo: "src/images/participants/participants__item-1.png",
        link: "#",
    },
    {
        name: "Рихард Рети",
        title: "Чемпион мира по шахматам",
        photo: "",
        link: "#",
    },
    {
        name: "Остап Бендер",
        title: "Гроссмейстер",
        photo: "src/images/participants/participants__item-1.png",
        link: "#",
    },
    {
        name: "Александр Алехин",
        title: "Чемпион мира по шахматам",
        photo: "",
        link: "#",
    },
    {
        name: "Арон Нимцович",
        title: "Чемпион мира по шахматам",
        photo: "src/images/participants/participants__item-1.png",
        link: "#",
    },
    {
        name: "Рихард Рети",
        title: "Чемпион мира по шахматам",
        photo: "",
        link: "#",
    },
];

const list = document.querySelector(".participants__list");

const prevBtn = document.querySelector(".carousel-button-prev");
const nextBtn = document.querySelector(".carousel-button-next");

const indicator = document.querySelector(
    ".participants__slider__page-indicator"
);

let currentPage = 0;
let slidesPerView = getSlidesPerView();

function getSlidesPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;

    return 3;
}

function renderSlides() {
    list.innerHTML = participants.map((participant) => {
        const hasPhoto = participant.photo?.trim();

        return `
            <li class="participants__list__item">
                <div class="
                    participants__list__item__avatar
                    ${
            !hasPhoto
                ? "participants__list__item__avatar--no-photo"
                : ""
        }
                ">
                    ${
            hasPhoto
                ? `
                                <img
                                    src="${participant.photo}"
                                    alt="${participant.name}"
                                >
                            `
                : ""
        }
                </div>

                <span class="participants__list__item__name">
                    ${participant.name}
                </span>

                <span class="participants__list__item__title text-M">
                    ${participant.title}
                </span>

                <a
                    href="${participant.link}"
                    class="participants__list__item__link text-XS"
                >
                    Подробнее
                </a>
            </li>
        `;
    }).join("");
}

function getTotalPages() {
    return Math.ceil(
        participants.length / slidesPerView
    );
}

function updateSlider() {
    slidesPerView = getSlidesPerView();

    const items = document.querySelectorAll(
        ".participants__list__item"
    );

    if (!items.length) return;

    const gap = 20;

    const itemWidth = items[0].offsetWidth + gap;

    const translate =
        currentPage * itemWidth * slidesPerView;

    list.style.transform = `
        translateX(-${translate}px)
    `;

    const viewedItems = Math.min(
        (currentPage + 1) * slidesPerView,
        participants.length
    );

    indicator.innerHTML = `
        ${viewedItems}
        <span class="participants__slider__page-indicator-per">
            / ${participants.length}
        </span>
    `;
}

function nextSlide() {
    currentPage++;

    if (currentPage >= getTotalPages()) {
        currentPage = 0;
    }

    updateSlider();
}

function prevSlide() {
    currentPage--;

    if (currentPage < 0) {
        currentPage = getTotalPages() - 1;
    }

    updateSlider();
}

nextBtn.addEventListener("click", () => {
    nextSlide();
    restartAutoplay();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    restartAutoplay();
});

window.addEventListener("resize", () => {
    slidesPerView = getSlidesPerView();
    currentPage = 0;

    updateSlider();
});

renderSlides();
updateSlider();

/* AUTOPLAY */

let autoplay = setInterval(nextSlide, 4000);

function restartAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(nextSlide, 4000);
}