// chapters.js - Holds all the logic behind chapters page.

// DOM Selectors.
const mainTag = document.getElementById("chapter-list");
const mangaHeading = document.getElementById("manga-heading");
const preloader = document.getElementById("preloader");

// mangaName in the query parameters.
const mangaName = new URLSearchParams(window.location.search).get("manga");

// Functions.

// This Function loops over the fetched data and one-by-one shows it on the page.
async function dataLoader() {
    data = await getChapterList();
    
    mangaHeading.textContent = getProperTitle(mangaName)

    for (chapterNum of data) {
        // Tag to hold the chapter number.
        const chapterTag = document.createElement("a");
        chapterTag.className = "chpNum";
        chapterTag.href = `chapter.html?manga=${mangaName}&chapter=${chapterNum}`;
        chapterTag.textContent = getProperText(chapterNum);

        // Appending the created tag in the DOM.
        mainTag.appendChild(chapterTag);
    }
    preloader.style.display = "none";
}

// This Function gets the list of chapters available in for this manga through an API.
async function getChapterList() {
    res = await fetch(`http://127.0.0.1:8000/${mangaName}/`);
    data = await res.json();

    return data;
}

// This function gives the chapter  name given to it  in proper format.
function getProperText(chpNum) {
    const nums = chpNum.split("-");
    if (nums.length == 1) return `Chapter: ${chpNum}`;

    return `Chapter: ${nums[0]}.${nums[1]}`;
}

// This function gives the manga name given to it proper casing.
function getProperTitle(mangaName) {
    const words = mangaName.split("-");
    let title = "";

    for (let word of words) {
        title = title.concat(" ", word.toUpperCase());
    }

    return title.trim();
}

document.title = `${getProperTitle(mangaName)} | Chapters`;

dataLoader();
