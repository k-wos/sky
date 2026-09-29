// Tutaj najłatwiej zmienisz teksty ukryte w gwiazdach.
// x i y określają pozycję gwiazdy w procentach ekranu.
const memories = [
    {
        title: "Kotuś to najpiękniejszy człowiek na świecie",
        text: "Kotusiu twoje oczy, twoje usta, twój nos, twoje uszy, cała twoja twarz, twoje ręce i dłonie, twoje nogi i stopy, twój głos twoja skóra wprawiają mnie w zachwyt za każdym razem jak je widzę, słyszę czy sobie wyobrażam. Jesteś tak piękna, że chciałbym na Ciebie patrzeć cały czas i już nigdy nie oderwać wzroku.  ",
        x: 16,
        y: 34,
        size: 7,
        color: "#fff0f6",
    },
    {
        title: "Kotuś to najwspanialszy człowiek na świecie",
        text: "To jaka jesteś, twoje zachowania, reakcje, to wszystko co odczuwam będąc przy tobie sprawia, że poznałem mojego ulubionego człowieka. Pomimo, że nie zawsze zachowuję się odpowiednio, czego nie raz żałuję, zawsze się czuję przy tobie komfortowo, a spędzanie z tobą czasu to najlepsze chwile jakie kiedykolwiek przeżyłem",
        x: 76,
        y: 31,
        size: 6,
        color: "#f8e0ae",
    },
    {
        title: "Jesteś bardzo silna i bardzo dzielna",
        text: "Podziwiam w tobie to, że pomimo wielu przeciewności zawsze jesteś kotusiem i nigdy nic nie ukrywasz, a przy tym umiesz znaleźć w sobie siłę, żeby dać dobro innej osobie ",
        x: 88,
        y: 47,
        size: 5,
        color: "#e6dcff",
    },
    {
        title: "Potrafisz uratować każdy dzień",
        text: "Nawet gdyby walił się cały świat, wiem, że będąc przy Tobie będę szczęśliwy i znajdę wszystko czego szukam",
        x: 34,
        y: 53,
        size: 6,
        color: "#ffd8e8",
    },
    {
        title: "Tuptuś to słodziak",
        text: "Wiem, że kotuś jest czasem bardzo wściekły i bardzo zły, ale w tym wszytystkim jest również bardzo delikatny i słodki",
        x: 65,
        y: 58,
        size: 8,
        color: "#fff4cf",
    },
    {
        title: "Kotuś to też czarodziej",
        text: "Potrafisz jednym słowek, gestem albo krzykiem sprawić, że w każdym momencie kocham Cie bardziej i bardziej",
        x: 12,
        y: 68,
        size: 5,
        color: "#e9e1ff",
    },
    {
        title: "Jestem ulep, ale tylko dla kotusia",
        text: "Wiem, że jestem małym ulepem i szczekaczem, ale musisz wiedzieć, że to sprawiasz ty. Przy tobie czuję ciągłą eksytację, szczęscie i jestem w kotusiu bardzo zakochany",
        x: 82,
        y: 72,
        size: 6,
        color: "#ffd8ea",
    },
    {
        title: "Zrobię dla kotusia wszystko",
        text: "Chciałbym żebyś wiedziała, że naprawdę zrobię dla Ciebie wszystko. Zasługujesz na każdy mały, duży i niemożliwy gest. Jesteś niesamowitym człowiekiem",
        x: 43,
        y: 78,
        size: 7,
        color: "#f8e0ae",
    },
];

const starContainer = document.querySelector("#memoryStars");
const dialog = document.querySelector("#memoryDialog");
const title = document.querySelector("#memoryTitle");
const text = document.querySelector("#memoryText");
const date = document.querySelector("#memoryDate");
const closeButton = document.querySelector("#closeDialog");
const hint = document.querySelector("#hint");

memories.forEach((memory, index) => {
    const star = document.createElement("button");
    star.type = "button";
    star.className = "memory-star";
    star.style.left = `${memory.x}%`;
    star.style.top = `${memory.y}%`;
    star.style.setProperty("--star-size", `${memory.size}px`);
    star.style.setProperty("--star-color", memory.color);
    star.style.setProperty("--twinkle-speed", `${2.8 + (index % 4) * 0.65}s`);
    star.style.setProperty("--delay", `${-index * 0.43}s`);
    star.setAttribute("aria-label", `Otwórz wspomnienie: ${memory.title}`);

    star.addEventListener("click", () => openMemory(memory, star));
    starContainer.appendChild(star);
});

function openMemory(memory, star) {
    document.querySelectorAll(".memory-star.is-open").forEach((item) => {
        item.classList.remove("is-open");
    });

    star.classList.add("is-open");
    title.textContent = memory.title;
    text.textContent = memory.text;
    date.textContent = memory.date;
    hint.classList.add("is-hidden");

    if (typeof dialog.showModal === "function") {
        dialog.showModal();
    } else {
        dialog.setAttribute("open", "");
    }
}

function closeMemory() {
    if (typeof dialog.close === "function") {
        dialog.close();
    } else {
        dialog.removeAttribute("open");
    }
}

closeButton.addEventListener("click", closeMemory);

dialog.addEventListener("click", (event) => {
    const box = dialog.getBoundingClientRect();
    const clickedOutside =
        event.clientX < box.left ||
        event.clientX > box.right ||
        event.clientY < box.top ||
        event.clientY > box.bottom;

    if (clickedOutside) closeMemory();
});

dialog.addEventListener("close", () => {
    document.querySelectorAll(".memory-star.is-open").forEach((item) => {
        item.classList.remove("is-open");
    });
});
