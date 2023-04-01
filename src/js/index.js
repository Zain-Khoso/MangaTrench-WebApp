// index.js - Holds all the logic behind home page.

// DOM Selectors.
const mainTag = document.getElementById("manga-list");
const preloader = document.getElementById("preloader");
const searchBtn = document.getElementById("search-btn");
const searchEntry = document.getElementById("search-entry");

// Functions.

// This Function loops over the fetched data and one-by-one shows it on the page.
async function main() {
    data = await getMangaList();

    // This Event Listener is for the Search Button.
    searchBtn.addEventListener("click", () => {
        searchForManga(data);
    });

    for (manga of data) {
        mangaThumbnail = manga.thumbnail;
        mangaName = manga.name;
        mangaChpsNum = manga.chapters;
        mangaCardGenerator(mangaThumbnail, mangaName, mangaChpsNum);
    }
    preloader.style.display = "none";
}

// This function generates a *div* tag that will represent the fetched data in the DOM.
function mangaCardGenerator(thumbnail, title, chaptersNum) {
    // Main Card Tag.
    const mangaCard = document.createElement("div");
    mangaCard.className = "manga-card";

    // Tag to hold the thumbnail img.
    const thumbnailTag = document.createElement("img");
    thumbnailTag.className = "manga-thumbnail";
    thumbnailTag.src = thumbnail;

    // Tag to hold manga details.
    const detailsDiv = document.createElement("div");
    detailsDiv.className = "manga-details";

    // Tag to hold the Title of the Manga.
    const tagForTitle = document.createElement("a");
    tagForTitle.className = "manga-title";
    tagForTitle.href = `chapters.html?manga=${title}`;
    tagForTitle.textContent = getProperTitle(title);

    // Tag to hold the number of total chapters in the manga.
    const tagForChpsNum = document.createElement("h2");
    tagForChpsNum.className = "manga-chpsNum";
    tagForChpsNum.textContent = "Chapters: " + chaptersNum;

    // Creating a DOM tree of these tags.
    detailsDiv.appendChild(tagForTitle);
    detailsDiv.appendChild(tagForChpsNum);

    mangaCard.appendChild(thumbnailTag);
    mangaCard.appendChild(detailsDiv);

    // Appending the created mangaCard in the DOM.
    mainTag.appendChild(mangaCard);
}

// This Function gets the list of mangas available in the Database through an API.
async function getMangaList() {
    res = await fetch("http://127.0.0.1:8000/");
    data = await res.json();

    return data;
}

// This function returns the manga name given to it in upper case.
function getProperTitle(mangaName) {
    const words = mangaName.split("-");
    let title = "";

    for (let word of words) {
        title = title.concat(" ", word.toUpperCase());
    }

    return title.trim();
}

// This function returns the manga name given to it in kebab case.
function getKebabTitle(mangaName) {
    const words = mangaName.split(" ");
    let title = "";

    for (let word of words) {
        title = title.concat("-", word.toLowerCase());
    }

    return title.slice(1);
}

// This Function searchs the fetched data for a particular manga.
function searchForManga(data) {
    const mangaName = getKebabTitle(searchEntry.value);

    for (manga of data) {
        if (manga.name == mangaName) {
            mainTag.innerHTML = "";
            mangaThumbnail = manga.thumbnail;
            mangaTitle = manga.name;
            mangaChpsNum = manga.chapters;
            mangaCardGenerator(mangaThumbnail, mangaTitle, mangaChpsNum);
        }
    }
}

main();
